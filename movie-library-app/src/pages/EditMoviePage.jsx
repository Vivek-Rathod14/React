import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, updateMovie } from '../store/movieActions';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { details, loading, error } = useSelector((s) => s.movieDetails || {});

  const [title, setTitle] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [overview, setOverview] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [genres, setGenres] = useState('');
  const [cast, setCast] = useState('');
  const [saving, setSaving] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (id) dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (details) {
      setTitle(details.title || '');
      setReleaseDate(details.release_date || '');
      setOverview(details.overview || '');
      setPosterURL(details.posterURL || '');
      setGenres((details.genres || []).join(', '));
      setCast((details.cast || []).map((c) => c.name).join(', '));
    }
  }, [details]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!title.trim()) {
      setSubmitError('Title is required');
      return;
    }

    setSaving(true);
    try {
      const updates = {
        title: title.trim(),
        release_date: release_date.trim(),
        overview: overview.trim(),
        posterURL: posterURL.trim(),
        genres: genres
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        cast: cast
          .split(',')
          .map((s) => ({ name: s.trim() }))
          .filter(Boolean),
      };
      await dispatch(updateMovie(id, updates));
      navigate(`/movie/${id}`);
    } catch (err) {
      setSubmitError(err.message || 'Failed to update movie');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-slate-600">Loading movie...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 text-red-700 p-4 rounded">
        <p className="font-semibold">Error loading movie</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900">Edit Movie</h2>

      {submitError && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm border border-red-200">
          {submitError}
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
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Poster Image URL
          </label>
          <input
            type="url"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            placeholder="https://example.com/poster.jpg"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            disabled={saving}
            className="px-6 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 disabled:opacity-50 transition"
          >
            {saving ? 'Saving...' : 'Save Changes'}
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
