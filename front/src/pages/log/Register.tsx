import "./log.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="log log--register">
      <div className="card__container">
        <div className="card__header">
          <h1 className="card__header--title">REGISTER</h1>
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
              <label htmlFor="fullName" className="card__form--label">
                Fullname
              </label>
              <input
                type="text"
                className="card__form--input"
                name="fullName"
              />
            </div>
            <div className="card__form">
              <label htmlFor="email" className="card__form--label">
                Email
              </label>
              <input type="email" className="card__form--input" name="email" />
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
              </button>
            </div>
          </form>
        </div>
        <div className="card__footer">
          <span>Vous avez déjà un compte ? </span>
          <Link to="/login" className="card__footer--link">
            <span className="card__footer--text">Se connecter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
