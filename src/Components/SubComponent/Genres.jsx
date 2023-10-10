import React, { useEffect } from "react";
import axios from "axios";

function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) {
  const fetchGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
    const REACT_APP_AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    const { data } = await axios.get(url, { headers });
    console.log(data);
  };

  useEffect(() => {
    fetchGenres();
  }, [genres]);

  return <div>Genres</div>;
}

export default Genres;
