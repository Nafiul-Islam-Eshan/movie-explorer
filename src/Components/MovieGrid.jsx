import MovieCard from "./MovieCard";

const MovieGrid = ({ movies, searchTerm }) => {

  const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  // console.log(filteredMovies);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-5 md:mx-20 lg:mx-30">
      {
        filteredMovies.length>0 ? (
          filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))
        ): (
          <p className="text-center text-2xl col-span-3 text-gray-800">No Movie Found 🥲</p>
        )
      }
    </div>
  );
};

export default MovieGrid;
