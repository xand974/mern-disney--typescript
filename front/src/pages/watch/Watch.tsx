import "./watch.css";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { MovieType } from "../../context/movieSlice";

export default function Watch() {
  const location = useLocation();
  const movie: MovieType = location.state;

  return (
    <main className="watch">
      <div className="watch__infos">
        <Link to="/" className="watch--link">
          <ArrowBackIos className="watch--icon" />
          <h1 className="watch--title">{movie.title}</h1>
        </Link>
      </div>
      <video
        src={movie.videoURL}
        className="watch--video"
        controls
        autoPlay
      ></video>
    </main>
  );
}
