import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Quotes from "./Quotes";
import type { Movie as TMovie } from "./types";

export default function Movie() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<TMovie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`/movie/${movieId}`);
      setMovie(res.data.docs[0]);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {movie && <h1>{movie.name}</h1>}
      <Quotes />
    </>
  );
}
