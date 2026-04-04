import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === id);

  return (
    <div>
      <h2>{movie?.title}</h2>
      <p>{movie?.description}</p>
      <p>{movie?.genre}</p>
    </div>
  );
};

export default MovieDetails;