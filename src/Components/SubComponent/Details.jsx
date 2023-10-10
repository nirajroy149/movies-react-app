import React from "react";
import { AiFillYoutube } from "react-icons/ai";

const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
const img_500 = "https://images.tmdb.org/t/p/w500";
const yt = "https://www.youtube.com/watch?v=";

function Details({ open, setOpen, id, media_type, content, videolink }) {
  console.log(content);
  return (
    open && (
      <>
        <div className="py-10 px-6  h-full  w-screen z-10 flex flex-col justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0">
          <div className="relative w-full max-w-[1800px] flex flex-col  items-center overflow-auto lg:w-2/3 rounded-md  h-full bg-gray-700 text-white py-10 px-2 pr-4">
            <button
              className="absolute top-0 right-0 font-bold hover bg-red-700 py-2 px-5"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <div className="flex flex-col md:flex-row gap-3">
              <img
                src={
                  content.poster_path
                    ? `${img_500}/${content.poster_path}`
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
                  href={`${yt}${videolink}`}
                  target="_blank"
                  rel="noreferrer"
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
