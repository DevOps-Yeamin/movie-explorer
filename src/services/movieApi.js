const API_URL = "https://api.tvmaze.com";

export async function getMovies() {
  const response = await fetch(`${API_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}

export async function searchMovies(query) {
  const response = await fetch(
    `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  return response.json();
}