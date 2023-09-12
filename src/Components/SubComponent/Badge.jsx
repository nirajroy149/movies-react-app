import React from "react";

function Badge({ text }) {
  return (
    <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
      {text}
    </span>
  );
}

export default Badge;
