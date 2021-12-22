import { PlayArrow } from "@mui/icons-material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import MovieList from "../movielist/MovieList";
import "./detail.css";
import { useState } from "react";
import { MovieType } from "../../context/movieSlice";
import { useEffect } from "react";
import { getMovie } from "../../api/movie";
import { getRandomList } from "../../api/list";
import { useAppDispatch } from "../../hooks/selector";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

export default function Detail() {
  const location = useLocation();
  const PATHNAME = location.pathname.split("/")[2];
  const [movie, setMovie] = useState<MovieType | null>(null);
  const dispatch = useAppDispatch();
  const { lists } = useSelector((state: RootState) => state.list);

  useEffect(() => {
    getMovie(null, setMovie, PATHNAME);
  }, [PATHNAME]);

  useEffect(() => {
    getRandomList(dispatch, true);
  }, [dispatch]);

  return (
    <main className="movie__content">
      <img
        src={movie?.bigPicture}
        alt="background img"
        className="movie__content--img"
      />
      <div className="movie__content__background--filter"></div>
      <article className="detail">
        <img src={movie?.thumbnail} className="detail-img" alt="" />
        <div className="detail__infos">
          <span className="detail-text-small">
            {movie?.year} . {movie?.duration} min
          </span>
          {movie?.genre.map((g, key) => (
            <span className="detail-text-small" key={key}>
              {g}
            </span>
          ))}
        </div>
        <div className="detail__btns">
          <Link to={`/watch/${movie?._id}`} state={movie}>
            <p className="detail--btn btn--light">
              <PlayArrow style={{ fontSize: "30px" }} className="detail-icon" />
              <span>LECTURE</span>
            </p>
          </Link>
          <button className="detail--btn btn--dark">
            <span>BANDE-ANNONCE</span>
          </button>
        </div>
        <p className="detail-text-big">{movie?.desc}</p>
      </article>
      <div className="content__footer">
        <p className="content__footer-text">Suggestions</p>
        {lists.map((item, key) => (
          <MovieList isInDetailPage={false} item={item} key={key} />
        ))}
      </div>
    </main>
  );
}
