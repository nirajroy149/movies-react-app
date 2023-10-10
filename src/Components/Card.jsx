import React, { useState } from "react";
import Details from "./SubComponent/Details";
import axios from "axios";

function Card({ poster, media_type, vote_average, title, r_date, id }) {
  const img_300 = "https://images.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const REACT_APP_AUTH_KEY = process.env.REACT_APP_AUTH_KEY;

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});
  const [video, setVideo] = useState();

  const fetchContents = async () => {
    const url = `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    try {
      const { data } = await axios.get(url, { headers });
      setContent(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchVideo = async () => {
    const url = `https://api.themoviedb.org/3/${media_type}/${id}/videos?&language=en-U`;
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${REACT_APP_AUTH_KEY}`,
    };
    try {
      const { data } = await axios.get(url, { headers });
      setVideo(data.results[0]?.key);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick() {
    fetchContents();
    fetchVideo();
  }

  return (
    <>
      {open && (
        <Details
          open={open}
          setOpen={setOpen}
          media_type={media_type}
          id={id}
          content={content}
          videolink={video}
        />
      )}
      <div
        onClick={() => {
          handleClick();
        }}
        className="relative flex flex-col w-[180px] sm:w-[220px] p-1 md:m-3 m-1 rounded min-h-[93.471px] bg-black hover:bg-white hover:cursor-pointer"
        style={{}}
      >
        <img
          src={poster ? `${img_300}/${poster}` : `${unavailable}`}
          className="rounded"
          alt={title}
        ></img>
        <div className="p-1 flex flex-col align-between font-bold">
          <div className="text-center whitespace-nowrap text-ellipsis overflow-hidden ...">
            {title}
          </div>
          <div className="flex uppercase justify-between my-2">
            <div>{media_type}</div>
            <div>{r_date}</div>
          </div>
        </div>
        <div
          className={`absolute px-[10px] py-1 -right-3 -top-3 rounded-full ${
            vote_average > 7 ? "bg-green-800" : "bg-red-800"
          } `}
        >
          {vote_average.toFixed(1)}
        </div>
      </div>
    </>
  );
}

export default Card;
