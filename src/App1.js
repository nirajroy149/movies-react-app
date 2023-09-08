import React from "react";
import Header from "./Components/Header";
import FooterNav from "./Components/FooterNav";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Tv from "./Pages/Tv";
import Search from "./Pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App1 = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Trending />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>

        <FooterNav />
      </div>
    </BrowserRouter>
  );
};
