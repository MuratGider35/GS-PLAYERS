import React from "react";
import "./Button.css";

const Button = ({ total, page, lastInd, firstInd, setPage }) => {
  return (
    <div className="button">
      <button
        onClick={() => {
          page > 1 ? setPage(page - 1) : setPage((page = total));
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          total > page ? setPage(page + 1) : setPage(1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
