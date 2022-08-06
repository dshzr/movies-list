import { useState } from "react";
import api from "../../api";
import CardMovie from "../../components/CardMovie";
import Searchbar from "../../components/Searchbar";

function Series() {
  const { series, setSeries } = api();

  const [pesquisa, setPesquisa] = useState();
  const [enterPressed, setEnterPressed] = useState(false);

  const [seriesFromSearch, setSeriesFromSearch] = useState([]);

  function search(pesquisa, page) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b6e4ad003421248c7843499f10553775&language=pt-BR&query=${pesquisa}&include_adult=true`
    )
      .then((res) => res.json())
      .then((json) => setSeriesFromSearch(json.results));
  }

  function searchMovie(e) {
    if (e.key === "Enter") {
      setEnterPressed(true);
      search(pesquisa);
    }
  }
  return (
    <>
      <Searchbar
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        searchMovie={searchMovie}
        setEnterPressed={setEnterPressed}
        placeholder="Search for your favorite movies"
      />
      {enterPressed && (
        <h2 className="text-3xl p-6">Results with "{pesquisa}"</h2>
      )}
      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
        p-6
      "
      >
        {enterPressed == false && series
          ? series
              .filter((item) => item.backdrop_path != null)
              .map((item) => <CardMovie movie={item} key={item.id} isSerie={true} />)
          : seriesFromSearch &&
            seriesFromSearch
              .filter((item) => item.backdrop_path != null)
              .map((item) => <CardMovie movie={item} key={item.id} isSerie={true} />)}
      </div>
    </>
  );
}

export default Series;
