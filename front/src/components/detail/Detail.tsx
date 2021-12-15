import { PlayArrow } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MovieList from "../movielist/MovieList";
import "./detail.css";

export default function Detail() {
  return (
    <main className="movie__content">
      <img
        src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50CAD0A8C45F8DB39508DCD96FA108DB09269EEE6B83B8E0E83628008DABDF35/scale?width=1920&aspectRatio=1.78&format=jpeg"
        alt="background img"
        className="movie__content--img"
      />
      <div className="movie__content__background--filter"></div>
      <article className="detail">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BA856C6565616A3D5D04B9E0DBC251DFF25BDF5C5DF382A24FA5BF52490E2B8/scale?width=1344&aspectRatio=1.78&format=png"
          className="detail-img"
          alt=""
        />
        <div className="detail__infos">
          <span className="detail-text-small">2003 . 2 h 24 min</span>
          <span className="detail-text-small">
            Fantastique, Action, Aventure
          </span>
        </div>
        <div className="detail__btns">
          <Link to="/watch/123">
            <p className="detail--btn btn--light">
              <PlayArrow style={{ fontSize: "30px" }} className="detail-icon" />
              <span>LECTURE</span>
            </p>
          </Link>
          <button className="detail--btn btn--dark">
            <span>BANDE-ANNONCE</span>
          </button>
        </div>
        <p className="detail-text-big">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          numquam ex explicabo quae eaque esse totam, animi delectus reiciendis,
          at eius, sapiente nemo accusamus officia a vel sequi non doloremque!
        </p>
      </article>
      <div className="content__footer">
        <p className="content__footer-text">Suggestions</p>
        <MovieList isInDetailPage={false} />
      </div>
    </main>
  );
}
