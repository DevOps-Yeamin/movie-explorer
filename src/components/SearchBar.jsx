import { Search } from "lucide-react";

function SearchBar({ value, onChange, onSearch }) {
  return (
    <form
      onSubmit={onSearch}
      className="flex w-full max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-slate-900"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 bg-transparent px-4 py-3 outline-none"
      />

      <button
        type="submit"
        className="flex items-center gap-2 bg-red-600 px-5 font-medium hover:bg-red-700"
      >
        <Search size={18} />
        Search
      </button>
    </form>
  );
}

export default SearchBar;