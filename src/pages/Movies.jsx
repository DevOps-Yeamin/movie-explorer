import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import {
  getMovies,
  searchMovies,
} from "../services/movieApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      setLoading(true);
      setError("");

      const data = await getMovies();

      setMovies(data);
    } catch {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
      loadMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchMovies(search);

      const formattedMovies = results.map(
        (item) => item.show
      );

      setMovies(formattedMovies);
    } catch {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Explore Movies
          </h1>

          <p className="mt-3 text-gray-400">
            Search and discover your favorite movies and shows.
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
          onSearch={handleSearch}
        />

        {loading && (
          <div className="py-20 text-center">
            Loading movies...
          </div>
        )}

        {error && (
          <div className="py-10 text-center text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-10">
            <MovieGrid
              movies={movies}
              onMovieClick={setSelectedMovie}
            />
          </div>
        )}

      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
}

export default Movies;