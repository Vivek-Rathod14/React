import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/movieActions";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((s) => s.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-slate-600">Loading movies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
        <p className="font-semibold">Error loading movies</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12 text-slate-600">
        <p>No movies found. Start by adding a new movie!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
