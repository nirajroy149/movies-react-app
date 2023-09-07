import React from "react";

function PageHeading({ text }) {
  return (
    <div className="mb-4 w-full tracking-widest text-center text-xl sm:text-2xl text-white">
      {text}
    </div>
  );
}

export default PageHeading;
