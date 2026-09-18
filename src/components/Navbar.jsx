import { Link } from "react-router-dom";
import { Film } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Film size={24} />
          MovieExplorer
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-red-600 px-5 py-2 font-medium hover:bg-red-700"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;