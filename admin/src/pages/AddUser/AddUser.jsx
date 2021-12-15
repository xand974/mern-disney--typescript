import { useState } from "react";
import "./addUser.scss";
import { useHistory } from "react-router";
import { createUser } from "redux/apiCalls";

export default function Add() {
  const history = useHistory();
  const [userInput, setUserInput] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleClick = async () => {
    createUser(history);
  };
  return (
    <div className="add">
      <h3 className="title">New User</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="data">
          <label htmlFor="username">Username</label>
          <input
            onChange={HandleChange}
            placeholder="anabeck"
            type="text"
            id="username"
            name="username"
            value={userInput.username}
          />
        </div>
        <div className="data">
          <label htmlFor="fullName">Full Name</label>
          <input
            onChange={HandleChange}
            placeholder="anna back"
            type="text"
            name="fullName"
            value={userInput.fullName}
            id="fullname"
          />
        </div>
        <div className="data">
          <label htmlFor="email">Email</label>
          <input
            onChange={HandleChange}
            placeholder="annaback@gmail.com"
            name="email"
            value={userInput.email}
            type="email"
            id="email"
          />
        </div>
        <div className="data">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={HandleChange}
            placeholder="06 98 75 32 45"
            type="text"
            name="phone"
            value={userInput.phone}
            id="phone"
          />
        </div>
        <div className="data">
          <label htmlFor="address">Address</label>
          <input
            onChange={HandleChange}
            placeholder="New York | USA"
            type="text"
            value={userInput.address}
            name="address"
            id="adresse"
          />
        </div>
        <div className="data">
          <label>Active</label>
          <select onChange={HandleChange} name="active" id="user__select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="data">
          <button onClick={HandleClick}>Create</button>
        </div>
      </form>
    </div>
  );
}
