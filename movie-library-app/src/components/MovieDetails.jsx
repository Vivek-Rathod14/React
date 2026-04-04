import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchMovieDetails, deleteMovie } from "../store/movieActions";

export default function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { details, loading, error } = useSelector((s) => s.movieDetails);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-slate-600">Loading movie details...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
                <p className="font-semibold">Error loading movie</p>
                <p className="text-sm">{error}</p>
            </div>
        );
    }

    if (!details) {
        return (
            <div className="text-center py-12 text-slate-600">
                <p>Movie not found</p>
            </div>
        );
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this movie?')) {
            dispatch(deleteMovie(details.id));
            navigate('/');
        }
    };

    return (
        <div className="bg-white rounded shadow p-6">
            <div className="md:flex md:gap-6">
                {details.posterURL && (
                    <img
                        src={details.posterURL}
                        alt={details.title}
                        className="w-48 rounded shadow-md"
                    />
                )}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-slate-900">{details.title}</h1>
                    <p className="text-sm text-slate-600 mt-2">
                        {details.release_date}
                        {details.genres && details.genres.length > 0 && (
                            <> • {details.genres.join(", ")}</>
                        )}
                    </p>

                    {details.overview && (
                        <>
                            <h3 className="mt-6 font-semibold text-slate-900">Overview</h3>
                            <p className="mt-2 text-slate-700 leading-relaxed">{details.overview}</p>
                        </>
                    )}

                    {details.cast && details.cast.length > 0 && (
                        <>
                            <h3 className="mt-6 font-semibold text-slate-900">Cast</h3>
                            <div className="mt-3 space-y-1">
                                {details.cast.slice(0, 6).map((c, idx) => (
                                    <div key={idx} className="text-sm text-slate-600">
                                        <span className="font-medium">{c.name}</span>
                                        {c.character && <span> as {c.character}</span>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="mt-6 flex gap-3">
                        <Link
                            to={`/movies/${details.id}/edit`}
                            className="px-4 py-2 bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700 transition"
                        >
                            Edit Movie
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700 transition"
                        >
                            Delete Movie
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
