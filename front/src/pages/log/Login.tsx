import "./log.css";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="log log--login">
      <div className="card__container">
        <div className="card__header">
          <h1 className="card__header--title">LOGIN</h1>
        </div>
        <div className="card__body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="card__form">
              <label htmlFor="username" className="card__form--label">
                USERNAME
              </label>
              <input
                type="text"
                className="card__form--input"
                name="username"
              />
            </div>
            <div className="card__form">
              <label htmlFor="password" className="card__form--label">
                PASSWORD
              </label>
              <input
                type="password"
                className="card__form--input"
                name="password"
              />
            </div>
            <div className="card__form">
              <button className="card__form--btn">
                <span className="card__form--btn-text">SE CONNECTER</span>
                <LoginOutlined className="card__form--icon" />
              </button>
            </div>
          </form>
        </div>
        <div className="card__footer">
          <span>Vous n'avez pas encore de compte ? </span>
          <Link to="/register" className="card__footer--link">
            <span className="card__footer--text">Créer un compte</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
