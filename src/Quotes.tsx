import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Quote } from "./types";

export default function Quotes() {
  let { movieId } = useParams();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await axios.get(`/movie/${movieId}/quote`);
      setQuotes(res.data.docs);
    };
    fetchQuotes();
  }, [movieId]);

  return (
    <>
      <h2>Quotes</h2>
      {quotes.map((quote) => (
        <blockquote>{quote.dialog}</blockquote>
      ))}
    </>
  );
}
