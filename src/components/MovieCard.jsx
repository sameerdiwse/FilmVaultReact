import React from "react";
function MovieCard() {
  return (
    <>
      <div className="flex">
        <div
          className="m-4 rounded hover:scale-110 duration-300 w-[100px] h-[35vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://legacymovieposters.com/cdn/shop/products/IronMan3_photo.jpg)`,
          }}
        ></div>
      </div>
    </>
  );
}
export default MovieCard;
