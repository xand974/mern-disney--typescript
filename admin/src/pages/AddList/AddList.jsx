import "./addList.scss";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { createList, fetchMovies } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AddList() {
  const history = useHistory();
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    fetchMovies(dispatch);
  }, [dispatch]);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleSelect = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (options) => options.value
    );

    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  const HandleClick = () => {
    createList(dispatch, userInput);
    history.push("/lists");
  };
  return (
    <div className="add">
      <h3 className="title">New List</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="title">Title</label>
          <input
            onChange={HandleChange}
            placeholder="best ... movie"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="data">
          <label htmlFor="type">Type</label>
          <input
            onChange={HandleChange}
            placeholder="serie"
            type="text"
            name="type"
            id="type"
          />
        </div>
        <div className="data">
          <label htmlFor="genre">Genre</label>
          <input
            onChange={HandleChange}
            placeholder="horror"
            name="genre"
            type="text"
            id="genre"
          />
        </div>

        <div className="data">
          <label>Content</label>
          <select
            multiple
            onChange={HandleSelect}
            name="content"
            id="user__select"
          >
            {movies.map((movie) => {
              return (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="data">
          <button onClick={HandleClick}>Create</button>
        </div>
      </form>
    </div>
  );
}
