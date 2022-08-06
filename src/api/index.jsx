import { useState, useEffect } from "react";

export default function api() {
  const [popularMovies, setPopularMovies] = useState();
  const [page, setPage] = useState(1);
  const [nowPlaying, setNowPlaying] = useState();
  const [more, setMore] = useState();
  const [moviesSearch, setMoviesSearch] = useState();
  const [series, setSeries] = useState();
  useEffect(() => {
    async function fetchApi(url) {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    }

    const tv = fetchApi(
      `https://api.themoviedb.org/3/tv/popular?api_key=b6e4ad003421248c7843499f10553775&adult=false&language=pt-BR&page=1`
    );

    const populares = fetchApi(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6e4ad003421248c7843499f10553775&adult=false&language=pt-BR&page=${page}`
    );

    const now = fetchApi(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=b6e4ad003421248c7843499f10553775&language=pt-BR&adult=false&page=3`
    );

    populares.then((response) => setPopularMovies(response.results));

    now.then((response) => setNowPlaying(response.results));

    tv.then((res) => setSeries(res.results));
  }, []);

  return {
    popularMovies,
    nowPlaying,
    setPopularMovies,
    setNowPlaying,
    more,
    setMore,
    series,
    setSeries,
    moviesSearch,
  };
}
