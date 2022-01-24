import { useState, useEffect } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import type { Movie } from "../types";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("/movie");
      setMovies(res.data.docs);
    };

    fetchMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </ul>
  );
}
