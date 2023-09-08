import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import PageHeading from "../Components/SubComponent/PageHeading";
import Pagination from "../Components/Pagination";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fethcTrending = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}`;
    const REACT_APP_AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    const { data } = await axios.get(url, { headers });
    setContent(data.results);
  };

  useEffect(() => {
    fethcTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="w-full min-h-screen bg-black from-gray-500 to-gray-800 flex flex-col justify-center place-content-center pb-[100px]">
        <div className="w-full max-w-[1300px] pt-[100px] md:pt-[150px] h-full px-4 m-auto">
          <PageHeading text="Movies" />
          <div className="flex flex-wrap justify-around">
            {content &&
              content.map((c) => {
                return (
                  <Card
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                    title={c.name || c.title}
                    r_date={c.first_air_date || c.release_date}
                  />
                );
              })}
          </div>
          <Pagination setPage={setPage} />
        </div>
      </div>
    </>
  );
}

export default Movies;
