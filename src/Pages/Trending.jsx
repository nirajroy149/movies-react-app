import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import PageHeading from "../Components/SubComponent/PageHeading";
// import BasicPagination from "../Components/BasicPagination";
import Pagination from "../Components/Pagination";
// import Details from "../Components/SubComponent/Details";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  // const [open, setOpen] = useState(false);

  const fethcTrending = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;
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
      {/* {open && <Details open={open} setOpen={setOpen} />} */}
      <div className="relative w-full min-h-[110vh] bg-black flex flex-col justify-center place-content-center pb-[100px]">
        <div className="w-full max-w-[1300px] pt-[100px] md:pt-[150px] h-full px-1 sm:px-4 m-auto">
          <PageHeading text="Trending" />
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
                    // setOpen={setOpen}
                    // open={open}
                  />
                );
              })}
          </div>
          <Pagination setPage={setPage} />
          {/* <BasicPagination /> */}
        </div>
      </div>
    </>
  );
}

export default Trending;
