
import Loading from "../Components/Loading";
import MovieGrid from "../Components/MovieGrid";

import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { movies, loading } = useMovies();

  return (
    <>
      
      {loading ? (
        <div className="flex justify-center items-center">
            <Loading />
        </div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </>
  );
};

export default Movies;
