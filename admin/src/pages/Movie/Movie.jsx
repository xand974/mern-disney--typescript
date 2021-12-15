import { useHistory, useLocation } from "react-router";
import "./movie.scss";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateMovie } from "redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  const [userInput, setUserInput] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const HandleChange = (e) => {
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
            <img
              src={
                movie.titleImage ||
                "https://i.pinimg.com/originals/1d/15/69/1d1569322ba074da6624218cab85129e.jpg"
              }
              alt=""
            />
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
                {movie.synopsis.length > 100
                  ? movie.synopsis.substring(0, 100) + "..."
                  : movie.synopsis}
              </span>
            </div>
            <div className="item">
              <span className="infoItem">Trailer: </span>{" "}
              <span className="infoData trailer">
                {movie.trailer.length > 100
                  ? movie.trailer.substring(0, 100) + "..."
                  : movie.trailer}
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
                  placeholder={movie.year}
                  onChange={HandleChange}
                  name="year"
                  type="text"
                  id="year"
                />

                <label htmlFor="genre">Genre</label>
                <input
                  placeholder={movie.genre}
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

                <label htmlFor="agelimit" onChange={HandleChange}>
                  Age Limit
                </label>
                <input
                  placeholder={movie.ageLimit}
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
