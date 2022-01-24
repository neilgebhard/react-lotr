import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/HomePage";
import Layout from "./layout/Layout";
import BooksPage from "./pages/BooksPage";
import BookPage from "./pages/BookPage";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./pages/MoviePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";
import SearchPage from "./pages/SearchPage";

axios.defaults.baseURL = "https://the-one-api.dev/v2";
axios.defaults.headers.common["Authorization"] = "Bearer _6uvQZVrAykosT1oitLl";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:bookId" element={<BookPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoviePage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/:characterId" element={<CharacterPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
