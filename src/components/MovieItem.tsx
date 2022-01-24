import { Link } from "react-router-dom";
import { Movie } from "../types";

type MovieItemProps = {
  movie: Movie;
};

export default function MovieItem({ movie }: MovieItemProps) {
  return (
    <li key={movie._id}>
      <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
    </li>
  );
}
