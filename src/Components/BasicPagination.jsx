import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function BasicPagination() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <Pagination count={10} />;
      </div>
    </>
  );
}
