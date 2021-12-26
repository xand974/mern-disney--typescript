import { useHistory, useLocation } from "react-router";
import "./movie.scss";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { updateMovie } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { MovieType } from "../../../../front/src/context/movieSlice";

export default function Movie() {
  const location = useLocation();
  const movie = location.state as MovieType;
  const [userInput, setUserInput] = useState({} as MovieType);
  const history = useHistory();
  const dispatch = useDispatch();

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleClick = () => {
    updateMovie(movie._id, userInput, dispatch);
    history.push("/movies");
  };
  return (
    <div className="movie">
      <div className="container">
        <h3 className="title">Movie</h3>
        <Link to="/newmovie">
          <li>Create</li>
        </Link>
      </div>
      <div className="wrapper">
        <div className="description">
          <div className="img">
            <img src={movie.thumbnail} alt="" />
            <span>{movie.title}</span>
          </div>
          <div className="infos">
            <div className="item">
              <span className="infoItem">id: </span>{" "}
              <span className="infoData">{movie._id}</span>
            </div>
            <div className="item">
              <span className="infoItem">year: </span>{" "}
              <span className="infoData">{movie.year}</span>
            </div>
            <div className="item">
              <span className="infoItem">is Series: </span>{" "}
              <span className="infoData">{movie.isSeries ? "oui" : "non"}</span>
            </div>
            <div className="item">
              <span className="infoItem">Genre: </span>{" "}
              <span className="infoData">{movie.genre}</span>
            </div>
            <div className="item">
              <span className="infoItem">Duration: </span>{" "}
              <span className="infoData">{movie.duration} min</span>
            </div>
            <div className="item">
              <span className="infoItem">Age Limit: </span>{" "}
              <span className="infoData">{movie.ageLimit}</span>
            </div>
            <div className="item">
              <span className="infoItem">Synopsis: </span>{" "}
              <span className="synopsis infoData">
                {movie.desc.length > 100
                  ? movie.desc.substring(0, 100) + "..."
                  : movie.desc}
              </span>
            </div>
          </div>
        </div>
        <div className="edit">
          <h3>Edit</h3>
          <div className="wrapper">
            <div className="left">
              <form>
                <label htmlFor="title">Title</label>
                <input
                  placeholder={movie.title}
                  onChange={HandleChange}
                  type="text"
                  name="title"
                  id="title"
                />

                <label htmlFor="year">Year</label>
                <input
                  placeholder={movie.year.toString()}
                  onChange={HandleChange}
                  name="year"
                  type="text"
                  id="year"
                />

                <label htmlFor="genre">Genre</label>
                <input
                  placeholder="fantasy"
                  onChange={HandleChange}
                  name="genre"
                  type="text"
                  id="genre"
                />

                <label htmlFor="synopsis">Synopsis</label>
                <input
                  type="text"
                  id="synopsis"
                  onChange={HandleChange}
                  name="synopsis"
                />

                <label htmlFor="agelimit">Age Limit</label>
                <input
                  placeholder={movie.ageLimit.toString()}
                  type="number"
                  id="synopsis"
                  name="ageLimit"
                  onChange={HandleChange}
                />
              </form>
            </div>
            <div className="right">
              <div className="img">
                <img
                  src={
                    movie.thumbnail ||
                    "https://i.pinimg.com/originals/1d/15/69/1d1569322ba074da6624218cab85129e.jpg"
                  }
                  alt=""
                />
                <label htmlFor="thumbnail" className="thumbnail">
                  <CloudUploadOutlined className="icon" />
                </label>
                <input type="file" id="thumbnail" />
              </div>
              <button onClick={HandleClick} className="btn__update">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
