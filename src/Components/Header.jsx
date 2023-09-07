import React from "react";

function Header() {
  return (
    <>
      <div
        onClick={() => window.scroll(0, 0)}
        className="cursor-pointer tracking-wider z-10 w-full fixed uppercase text-5xl md:text-7xl py-2 md:py-7 bg-primary_color  text-white font text-center"
      >
        Moviesvilla
      </div>
    </>
  );
}

export default Header;
