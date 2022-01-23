import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Book } from "./types";

axios.defaults.baseURL = "https://the-one-api.dev/v2";
axios.defaults.headers.common["Authorization"] = "_6uvQZVrAykosT1oitLl";

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
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
