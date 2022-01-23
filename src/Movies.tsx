import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import type { Movie } from "./types";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("/movie");
      setMovies(res.data.docs);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li>
            <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
