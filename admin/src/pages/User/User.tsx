import {
  CalendarTodayOutlined,
  CloudUploadOutlined,
  EmailOutlined,
  PermIdentityOutlined,
  PhoneOutlined,
} from "@material-ui/icons";
import { useState, ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import "./user.scss";
import { useHistory } from "react-router";
import { updateUser } from "redux/apiCalls";
import { UserAdminType } from "../../redux/apiCalls";

export default function User() {
  const location = useLocation();
  const user = location.state as UserAdminType;
  const [userInput, setUserInput] = useState({} as UserAdminType);
  const history = useHistory();

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
    updateUser(user, userInput, history);
  };
  return (
    <div className="user">
      <div className="title">
        <h3>Edit User</h3>
        <Link to="/add">
          <span>Create</span>
        </Link>
      </div>
      <div className="wrapper">
        <div className="profile">
          <div className="picture">
            <img
              src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              alt=""
            />
            <div className="infos">
              <span>{user.username}</span>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="account">
            <p>Account Details</p>

            <span>
              <PermIdentityOutlined className="icon" /> {user.username}
            </span>
            <span>
              <CalendarTodayOutlined className="icon" /> 10.06.98
            </span>
          </div>
          <div className="account">
            <p>Contact Details</p>
            <span>
              {" "}
              <PhoneOutlined className="icon" /> 06 74 56 25 41
            </span>
            <span>
              <EmailOutlined className="icon" /> {user.email}
            </span>
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
                <label htmlFor="username">Username</label>
                <input
                  placeholder={user.username}
                  onChange={HandleChange}
                  name="username"
                  type="text"
                  id="username"
                />

                <label htmlFor="fullname">Full Name</label>
                <input
                  placeholder="your fullname"
                  onChange={HandleChange}
                  name="fullName"
                  type="text"
                  id="fullname"
                />

                <label htmlFor="email">Email</label>
                <input
                  placeholder={user.email}
                  onChange={HandleChange}
                  name="email"
                  type="email"
                  id="email"
                />

                <label htmlFor="phone">Phone</label>
                <input
                  placeholder="06 98 75 32 45"
                  onChange={HandleChange}
                  name="phone"
                  type="text"
                  id="phone"
                />

                <label htmlFor="address">Address</label>
                <input
                  placeholder="New York | USA"
                  onChange={HandleChange}
                  name="address"
                  type="text"
                  id="adresse"
                />
              </form>
            </div>
            <div className="right">
              <div className="img">
                <img
                  src="https://www.verywellmind.com/thmb/IeZeA3IaM9a6P8df_hIdUpu4hw0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-4660327211-56b5fae93df78c0b13571d1e.jpg"
                  alt=""
                />
                <button>
                  <CloudUploadOutlined />
                </button>
              </div>
              <button onClick={HandleClick} className="btn__update">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
