import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Category from "../../components/cat/Category";
import MovieList from "../../components/movielist/MovieList";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__wrapper">
        <Slider />
        <Category />
        <MovieList isInDetailPage={true} />
        <MovieList isInDetailPage={true} />
        <MovieList isInDetailPage={true} />
        <MovieList isInDetailPage={true} />
      </div>
      <Footer />
    </div>
  );
}
