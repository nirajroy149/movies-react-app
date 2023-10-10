import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import PageHeading from "../Components/SubComponent/PageHeading";
import Pagination from "../Components/Pagination";
// import Badge from "../Components/SubComponent/Badge";
import Genres from "../Components/SubComponent/Genres";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numofPages, setNumofPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fethcMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}`;
    const REACT_APP_AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    const { data } = await axios.get(url, { headers });
    setContent(data.results);
    setNumofPages(data.total_pages);
  };

  useEffect(() => {
    fethcMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="w-full min-h-[110vh] bg-black flex flex-col justify-center place-content-center pb-[100px]">
        <div className="w-full max-w-[1300px] pt-[100px] md:pt-[150px] h-full px-1 sm:px-4 m-auto">
          <PageHeading text="Movies" />
          <Genres
            type="movies"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
          />

          <div className="flex flex-wrap justify-around">
            {content &&
              content.map((c) => {
                return (
                  <Card
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    media_type={"movie"}
                    vote_average={c.vote_average}
                    title={c.name || c.title}
                    r_date={c.first_air_date || c.release_date}
                  />
                );
              })}
          </div>
          <Pagination setPage={setPage} />
          {numofPages}
        </div>
      </div>
    </>
  );
}

export default Movies;
