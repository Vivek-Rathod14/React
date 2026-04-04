import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="bg-white rounded shadow-sm overflow-hidden">
            <Link to={`/movie/${movie.id}`}>
                {movie.posterURL ? (
                    <img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover" />
                ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-slate-100 text-slate-400">No Image</div>
                )}
                <div className="p-3">
                    <h3 className="text-sm font-semibold">{movie.title}</h3>
                    <p className="text-xs text-slate-500">{movie.release_date}</p>
                </div>
            </Link>
        </div>
    );
}
