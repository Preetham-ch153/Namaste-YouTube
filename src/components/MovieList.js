import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="py-2 text-3xl text-white pl-5">
      {title}
        <div className="flex overflow-x-scroll">
          <div className="flex py-3">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} path={movie.poster_path} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default MovieList;
