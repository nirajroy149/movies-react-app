import React from "react";

function Pagination({ setPage }) {
  return (
    <div className=" text-white m-auto mt-5 my-2 max-w-[500px] flex justify-around flex-wrap">
      {[...Array(100 / 10)].map((_, i) => {
        return (
          <span
            className="hover:scale-105 transition linear bg-gray-700 w-[40px] leading-10 text-center hover:cursor-pointer"
            onClick={() => {
              setPage(i + 1);
              window.scroll(0, 0);
            }}
            key={i}
          >
            {i + 1}
          </span>
        );
      })}
    </div>
  );
}

export default Pagination;
