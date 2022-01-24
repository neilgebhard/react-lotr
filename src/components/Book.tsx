import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Book, Chapter } from "../types";

export default function App() {
  let { bookId } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    const fetchBook = async () => {
      const [bRes, cRes] = await Promise.all([
        axios.get(`/book/${bookId}`),
        axios.get(`/book/${bookId}/chapter`),
      ]);
      setBook(bRes.data.docs[0]);
      setChapters(cRes.data.docs);
    };

    fetchBook();
  }, [bookId]);

  return (
    <>
      {book && <h1>{book.name}</h1>}
      <ul>
        {chapters.map((c) => (
          <li key={c._id}>{c.chapterName}</li>
        ))}
      </ul>
    </>
  );
}
