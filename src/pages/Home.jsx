import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <section className="relative flex min-h-[600px] items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="mb-4 font-semibold uppercase tracking-widest text-red-500">
                Welcome to MovieExplorer
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Discover Your Next Favorite Movie
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Explore movies, discover new stories, and find
                something exciting to watch.
              </p>

              <Link
                to="/movies"
                className="mt-8 inline-block rounded-lg bg-red-600 px-7 py-3 font-semibold hover:bg-red-700"
              >
                Explore Movies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;