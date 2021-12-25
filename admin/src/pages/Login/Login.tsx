import "./login.scss";
import { useState, ChangeEvent } from "react";
import { CircularProgress } from "@material-ui/core";
import { login } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/selectors";
import { UserAdminType } from "../../redux/apiCalls";
import { useHistory } from "react-router";
export default function Login() {
  const { pending, error } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({} as UserAdminType);
  const history = useHistory();
  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleClick = () => {
    login(userInput, dispatch, history);
  };

  return (
    <div className="login">
      <form method="post" onSubmit={(e) => e.preventDefault()}>
        <h3 className="title">LOGIN</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={HandleChange}
          value={userInput.username}
          name="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={HandleChange}
          value={userInput.password}
          name="password"
        />
        <button onClick={HandleClick}>
          {pending ? (
            <CircularProgress style={{ color: "white", fontSize: "20px" }} />
          ) : (
            "Se connecter"
          )}
        </button>
        {error && "username or password incorrect"}
      </form>
    </div>
  );
}
