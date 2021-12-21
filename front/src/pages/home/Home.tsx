import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Category from "../../components/cat/Category";
import MovieList from "../../components/movielist/MovieList";
import Footer from "../../components/footer/Footer";
import { useAppSelector, useAppDispatch } from "../../hooks/selector";
import { RootState } from "../../context/store";
import { useEffect } from "react";
import { getRandomList } from "../../api/list";

export default function Home() {
  const { lists } = useAppSelector((state: RootState) => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRandomList(dispatch);
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <div className="home__wrapper">
        <Slider />
        <Category />
        {lists.map((item) => (
          <MovieList isInDetailPage={true} key={item._id} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
