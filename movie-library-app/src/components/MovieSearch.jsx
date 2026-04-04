import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../store/movieActions";
import MovieCard from "./MovieCard";

export default function MovieSearch() {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const { searchResults, searchLoading } = useSelector((s) => s.movies);

  useEffect(() => {
    const t = setTimeout(() => {
      if (q.trim()) dispatch(searchMovies(q));
    }, 500);
    return () => clearTimeout(t);
  }, [q, dispatch]);

  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search movies..."
        className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {searchLoading && (
        <div className="flex items-center justify-center py-8 text-slate-600">
          Searching...
        </div>
      )}

      {!q.trim() && (
        <div className="text-center py-8 text-slate-500">
          Enter a movie title to search
        </div>
      )}

      {q.trim() && !searchLoading && searchResults?.length === 0 && (
        <div className="text-center py-8 text-slate-600">
          No movies found for "{q}"
        </div>
      )}

      {q.trim() && !searchLoading && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {searchResults?.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}
