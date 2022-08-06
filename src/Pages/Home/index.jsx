import api from "../../api";
import "../../App.css";
import HorizontalSlide from "../../components/HorizontalSlide";
import { Reccommended } from "../../components/Recommended";

function Home() {
  const movies = api();

  if (movies) {
    return (
      <>
        <HorizontalSlide
          nowPlaying={movies.nowPlaying}
          setNowPlaying={movies.setNowPlaying}
          page={4}
        />
        <Reccommended
          popularMovies={movies.popularMovies}
          setPopularMovies={movies.setPopularMovies}
        />
      </>
    );
  } else return null;
}

export default Home;
