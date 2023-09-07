import React from "react";
import { useNavigate } from "react-router-dom";

function FooterTab({ title, element, goto }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(goto);
        }}
        className={`flex flex-col justify-center items-center text-sm w-24 mb-1 p-1 md:w-44 md:p-2  hover:cursor-pointer hover:bg-[#ffffff38] hover:scale-105  rounded-xl transition ease-in hover:text-white`}
      >
        <div className="md:text-2xl text-xl mb-2">{element}</div>
        <p>{title}</p>
      </div>
    </>
  );
}

export default FooterTab;
