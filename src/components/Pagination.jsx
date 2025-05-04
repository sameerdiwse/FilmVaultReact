import React from "react";
function Pagination({ pageNumber, handleNext, handlePrev }) {
  return (
    <div className="bg-gray-800/60 flex justify-center">
      <div onClick={handlePrev}>
        <i class="fa-solid fa-arrow-left px-5"></i>
      </div>
      <div className="font-bold">{pageNumber}</div>
      <div onClick={handleNext}>
        <i class="fa-solid fa-arrow-right px-5"></i>
      </div>
    </div>
  );
}
export default Pagination;
