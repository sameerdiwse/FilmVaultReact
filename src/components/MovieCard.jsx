import React from "react";
function MovieCard({ posterPath, movieName }) {
  return (
    <div
      className="flex m-4 rounded hover:scale-110 duration-300 w-[150px] h-[45vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      <div className="text-white mt-auto bg-gray-900/60 text-center w-full">
        {movieName}
      </div>
    </div>
  );
}
export default MovieCard;
