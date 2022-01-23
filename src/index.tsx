import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Layout from "./Layout";
import Books from "./Books";
import Book from "./Book";
import Movies from "./Movies";
import Movie from "./Movie";
import Characters from "./Characters";
import Character from "./Character";
import Search from "./Search";
import "./index.css";

axios.defaults.baseURL = "https://the-one-api.dev/v2";
axios.defaults.headers.common["Authorization"] = "Bearer _6uvQZVrAykosT1oitLl";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:bookId" element={<Book />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:characterId" element={<Character />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
