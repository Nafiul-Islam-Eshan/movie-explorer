import { useState } from "react";
import Loading from "../Components/Loading";
import MovieGrid from "../Components/MovieGrid";

import useMovies from "../hooks/useMovies";
import SearchBar from "../Components/SearchBar";

const Movies = () => {
  const { movies, loading } = useMovies();
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col">
          <SearchBar setSearchTerm={setSearchTerm} />
          <MovieGrid movies={movies} searchTerm={searchTerm} />
        </div>
      )}
    </>
  );
};

export default Movies;
