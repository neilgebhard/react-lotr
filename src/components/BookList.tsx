import axios from "axios";
import { useEffect, useState } from "react";
import type { Book } from "../types";
import BookItem from "./BookItem";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("/book");
      setBooks(res.data.docs);
    };

    fetchBooks();
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book._id} book={book} />
      ))}
    </ul>
  );
}
