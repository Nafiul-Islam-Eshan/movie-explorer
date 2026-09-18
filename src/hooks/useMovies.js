import { useEffect, useState } from "react";

const API_URL = "https://api.tvmaze.com/shows";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await res.json();

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    error,
  };
};

export default useMovies;