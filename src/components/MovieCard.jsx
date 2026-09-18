function MovieCard({ movie, onClick }) {
  const image =
    movie.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <article
      onClick={() => onClick(movie)}
      className="cursor-pointer overflow-hidden rounded-xl bg-slate-900 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <img
        src={image}
        alt={movie.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="truncate text-lg font-semibold">
          {movie.name}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {movie.premiered || "Unknown"}
        </p>

        {movie.rating?.average && (
          <p className="mt-2 text-sm text-yellow-400">
            ⭐ {movie.rating.average}
          </p>
        )}

        <button className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;