import Footer from "../../components/footer/Footer";
import "./movie.css";
import Detail from "../../components/detail/Detail";
import Navbar from "../../components/navbar/Navbar";

export default function Movie() {
  return (
    <div className="movie">
      <Navbar />
      <Detail />
      <Footer />
    </div>
  );
}
