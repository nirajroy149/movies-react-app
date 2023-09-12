import React, { useState, useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";
import axios from "axios";

const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
const img_300 = "https://images.tmdb.org/t/p/w500";

function Details({ open, setOpen, id, media_type }) {
  const [content, setContent] = useState({});

  const fethcTrending = async () => {
    const url = `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`;
    const REACT_APP_AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    const { data } = await axios.get(url, { headers });
    setContent(data);
  };

  useEffect(() => {
    console.log(content); // Log the updated content
  }, [content]);

  useEffect(() => {
    fethcTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    open &&
    content && (
      <>
        <div className="py-10 px-6  h-full  w-screen z-10 flex flex-col justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0">
          <div className="w-full max-w-[1800px] flex flex-col  items-center overflow-auto lg:w-2/3 rounded-md  h-full bg-gray-700 text-white py-10 px-2 pr-4">
            <button onClick={() => setOpen(false)}>Close</button>
            <div className="flex flex-col md:flex-row gap-3">
              <img
                src={
                  content.poster_path
                    ? `${img_300}/${content.poster_path}`
                    : unavailable
                }
                alt="not found"
                className="max-h-[400px] md:max-h-[500px] md:m-4 rounded-md"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl text-center">
                  {media_type === "tv" ? content.name : content.title}
                </h3>
                <h4 className="text-center italic">
                  {content.tagline ? content.tagline : ""}
                </h4>
                <div className="p-2 border-2 border-black font-bold rounded-md min-h-[300px]">
                  {content.overview ? content.overview : ""}
                </div>

                <a
                  href={"#dkd"}
                  className="focus:outline-non cursor-pointer uppercase flex justify-center items-center gap-2 text-white bg-red-600 hover:bg-red-800 font-bold rounded-md text-sm px-5 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <AiFillYoutube size={25} />
                  Watch the trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Details;
