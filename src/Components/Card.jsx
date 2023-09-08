import React from "react";

function Card({ poster, media_type, vote_average, title, r_date }) {
  const img_300 = "https://images.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
    <div className="hover:cursor-pointer hover:bg-white hover:text-black transition ease-linear relative text-white  flex flex-col w-[180px] sm:w-[220px] p-1 md:m-3 m-1 rounded min-h-[93.471px]">
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
  );
}

export default Card;
