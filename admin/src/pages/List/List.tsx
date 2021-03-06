import "./list.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { privateRequest } from "api";
import { useState, ChangeEvent } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { updateList } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { ListType } from "../../../../front/src/context/listSlice";
import { MovieType } from "../../../../front/src/context/movieSlice";

export default function List() {
  const location = useLocation();
  const list = location.state as ListType;

  const [content, setContent] = useState<MovieType[]>([]);
  const [userInput, setUserInput] = useState({} as ListType);
  const history = useHistory();
  const dispatch = useDispatch();

  const HandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const HandleClick = async (id: string) => {
    updateList(id, userInput, dispatch);
    history.push("/lists");
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await Promise.all(
          list.content.map((c) => {
            return privateRequest.get("/movies/one/" + c);
          })
        );
        setContent(res.map((r) => r.data));
      } catch (err) {
        throw new Error("something went wrong");
      }
    };
    fetchContent();
  }, [list.content]);

  return (
    <div className="list">
      <div className="container">
        <h3 className="title">List</h3>
        <Link to="/newlist">
          <li>Create</li>
        </Link>
      </div>
      <div className="wrapper">
        <div className="description">
          <div className="img">
            <span>{list.title}</span>
          </div>
          <div className="infos">
            <div className="item">
              <span className="infoItem">id: </span>{" "}
              <span className="infoData">{list._id}</span>
            </div>
            <div className="item">
              <span className="infoItem">Type: </span>{" "}
              <span className="infoData">{list.type}</span>
            </div>
            <div className="item">
              <span className="infoItem">Genre: </span>{" "}
              <span className="infoData">{list.genre}</span>
            </div>
            <div className="item">
              <span className="infoItem">Content: </span>{" "}
            </div>

            <div className="info__container">
              {content?.map((c, key) => {
                return (
                  <div key={key} className="static">
                    <span>{c.title}</span>
                    <img
                      src={
                        c.bigPicture ||
                        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="edit">
          <h3>Edit</h3>
          <div className="wrapper">
            <div className="left">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="title">Title</label>
                <input
                  placeholder={list.title}
                  name="title"
                  value={userInput.title}
                  onChange={HandleChange}
                  type="text"
                  id="title"
                />

                <label htmlFor="year">Type</label>
                <input
                  placeholder={list.type}
                  name="type"
                  value={userInput.type}
                  onChange={HandleChange}
                  type="text"
                  id="year"
                />

                <label htmlFor="genre">Genre</label>
                <input
                  placeholder={list.genre}
                  name="genre"
                  value={userInput.genre}
                  onChange={HandleChange}
                  type="text"
                  id="genre"
                />

                <button
                  onClick={() => {
                    HandleClick(list._id);
                  }}
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
