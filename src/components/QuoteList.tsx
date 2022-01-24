import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuoteItem from "./QuoteItem";
import type { Quote } from "../types";

export default function QuoteList() {
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
      {quotes.map((quote) => (
        <QuoteItem key={quote._id} quote={quote} />
      ))}
    </>
  );
}
