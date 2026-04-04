import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;