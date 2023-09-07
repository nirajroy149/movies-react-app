import React from "react";
import FooterTab from "./SubComponent/FooterTab";
import { BsFire, BsSearch } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

function FooterNav() {
  const footerContent = [
    {
      element: <BsFire />,
      title: "Trending",
      goto: "/",
    },
    {
      element: <MdMovie />,
      title: "Movies",
      goto: "/movies",
    },
    {
      element: <PiTelevisionFill />,
      title: "Tv",
      goto: "/tv",
    },
    {
      element: <BsSearch />,
      title: "Search",
      goto: "/search",
    },
  ];
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center bg-primary_color text-xl pb-2 pt-1">
        <div className="justify flex flex-wrap justify-center items-center text-gray-300">
          {footerContent.map((item, index) => {
            return (
              <FooterTab
                key={index}
                element={item.element}
                title={item.title}
                goto={item.goto}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FooterNav;
//trending, movies, tv series, search
