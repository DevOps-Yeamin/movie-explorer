import { X } from "lucide-react";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 hover:bg-black"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          <img
            src={
              movie.image?.original ||
              movie.image?.medium ||
              "https://via.placeholder.com/500x700"
            }
            alt={movie.name}
            className="h-full max-h-[500px] w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold">
              {movie.name}
            </h2>

            {movie.rating?.average && (
              <p className="mt-3 text-yellow-400">
                ⭐ {movie.rating.average}/10
              </p>
            )}

            <p className="mt-4 text-gray-300">
              Premiered: {movie.premiered || "Unknown"}
            </p>

            <p className="mt-4 text-gray-300">
              Language: {movie.language || "Unknown"}
            </p>

            <div
              className="prose prose-invert mt-6"
              dangerouslySetInnerHTML={{
                __html:
                  movie.summary ||
                  "<p>No description available.</p>",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;