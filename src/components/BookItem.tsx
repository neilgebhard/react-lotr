import { Link } from "react-router-dom";
import { Book } from "../types";

type BookProps = {
  book: Book;
};

export default function BookItem({ book }: BookProps) {
  return (
    <li key={book._id}>
      <Link to={`/books/${book._id}`}>{book.name}</Link>
    </li>
  );
}
