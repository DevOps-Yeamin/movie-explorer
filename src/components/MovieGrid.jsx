import MovieCard from "./MovieCard";

function MovieGrid({ movies, onMovieClick }) {
  if (movies.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400">
        No movies found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
}

export default MovieGrid;