import MovieCard from "./MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?page=${pageNumber}&language=en-US&api_key=ada610fb1ab5ea8ed0a9571019e3af84`,
      )
      .then(function (response) {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, [pageNumber]);
  return (
    <>
      <div className="flex flex-wrap justify-around">
        {movies.map((result) => {
          //console.log(result.poster_path);
          return (
            <MovieCard
              posterPath={result.poster_path}
              movieName={result.original_title}
            />
          );
        })}
      </div>
      <Pagination
        pageNumber={pageNumber}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
}

export default Movies;
