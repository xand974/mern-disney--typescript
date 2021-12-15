import { Visibility } from "@material-ui/icons";
import { users } from "../../mockData";
import { useEffect, useState } from "react";
import "./smWidget.scss";

export default function SmWidget() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    setNewUser(users);
  }, []);

  return (
    <div className="smWidget">
      <h3 className="members__text">New Join Members</h3>
      <div className="wrapper">
        {newUser.map((u, key) => {
          return (
            <div className="display__user" key={key}>
              <img
                src={
                  u?.profilePicture ||
                  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                }
                alt=""
              />
              <div className="infos">
                <span className="name">{u?.username}</span>
                <span className="job">{u?.email}</span>
              </div>
              <button>
                <Visibility /> display
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
