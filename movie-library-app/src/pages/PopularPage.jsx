import React from "react";
import MovieList from "../components/MovieList";

export default function PopularPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Popular Movies</h2>
      <MovieList />
    </div>
  );
}
