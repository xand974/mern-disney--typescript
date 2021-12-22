import Navbar from "../../components/navbar/Navbar";
import "./catpage.css";
import ItemList from "../../components/itemlist/ItemList";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router";
import { useState } from "react";
import { MovieType } from "../../context/movieSlice";
import { useEffect } from "react";
import { getMoviesByCat } from "../../api/movie";

export default function CatPage() {
  const location = useLocation();
  const CAT_QUERY = location.search.split("=")[1];
  const [movies, setMovies] = useState([] as MovieType[]);

  useEffect(() => {
    getMoviesByCat(setMovies, CAT_QUERY);
  }, [CAT_QUERY]);

  return (
    <div className="home">
      <Navbar />
      <div className="home__wrapper home__wrapper__cat">
        <h1 className="home__wrapper__cat--title">
          LES MEILLEURS {CAT_QUERY.toUpperCase()}
        </h1>
        <div className="home__wrapper__cat__items">
          {movies.map((item, key) => (
            <ItemList item={item} key={key} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
