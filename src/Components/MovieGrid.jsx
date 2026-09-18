import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  // console.log(movies);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-5 md:mx-20 lg:mx-30">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
