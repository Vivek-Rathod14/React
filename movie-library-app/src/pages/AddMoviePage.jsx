import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/movieActions';
import { useNavigate } from 'react-router-dom';

const CLOUDINARY_CLOUD_NAME = 'dghl6cxi9';
const CLOUDINARY_UPLOAD_PRESET = 'movies';

export default function AddMoviePage() {
  const [title, setTitle] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [overview, setOverview] = useState('');
  const [posterFile, setPosterFile] = useState(null);
  const [genres, setGenres] = useState('');
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    if (!posterFile) {
      setError('Please upload a poster image');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', posterFile);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryRes.json();

      if (!cloudinaryRes.ok) {
        throw new Error(cloudinaryData.error?.message || 'Image upload failed');
      }

      const movie = {
        title: title.trim(),
        release_date: release_date.trim(),
        overview: overview.trim(),
        posterURL: cloudinaryData.secure_url,
        genres: genres
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        cast: cast
          .split(',')
          .map((s) => ({ name: s.trim() }))
          .filter(Boolean),
      };

      await dispatch(addMovie(movie));
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to add movie');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900">Add New Movie</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie title"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Release Date
          </label>
          <input
            type="date"
            value={release_date}
            onChange={(e) => setReleaseDate(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Poster Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPosterFile(e.target.files[0] || null)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Genres (comma-separated)
          </label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            placeholder="Action, Drama, Thriller"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Cast (comma-separated names)
          </label>
          <input
            type="text"
            value={cast}
            onChange={(e) => setCast(e.target.value)}
            placeholder="Actor 1, Actor 2, Actor 3"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Overview
          </label>
          <textarea
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="Movie description and plot"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 disabled:opacity-50 transition"
          >
            {loading ? 'Adding...' : 'Add Movie'}
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded font-semibold hover:bg-slate-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}