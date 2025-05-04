import React from "react";
function Pagination({ pageNumber, handleNext, handlePrev }) {
  return (
    <div className="bg-gray-800/60 flex justify-center">
      <div onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left px-5 cursor-pointer"></i>
      </div>
      <div className="font-bold cursor-default">{pageNumber}</div>
      <div onClick={handleNext}>
        <i className="fa-solid fa-arrow-right px-5 cursor-pointer"></i>
      </div>
    </div>
  );
}
export default Pagination;
