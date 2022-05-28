import "./log.css";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { UserModel } from "../../types/types";
import { signUp } from "../../api/auth";

export default function Register() {
  const [credential, setCredential] = useState({} as UserModel);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const register = async () => {
    try {
      setLoading(true);
      await signUp(credential);
      navigation("/login");
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      return;
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredential((prev) => {
      const name = e.target.name;
      const value = e.target.value;
      return {
        ...prev,
        [name]: value,
      };
    });
  };
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
                required
                onChange={handleChange}
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
                onChange={handleChange}
                type="text"
                className="card__form--input"
                name="fullName"
              />
            </div>
            <div className="card__form">
              <label htmlFor="email" className="card__form--label">
                Email
              </label>
              <input
                required
                type="email"
                onChange={handleChange}
                className="card__form--input"
                name="email"
              />
            </div>
            <div className="card__form">
              <label htmlFor="password" className="card__form--label">
                PASSWORD
              </label>
              <input
                required
                onChange={handleChange}
                type="password"
                className="card__form--input"
                name="password"
              />
            </div>
            <div className="card__form">
              <button className="card__form--btn" onClick={() => register()}>
                <span className="card__form--btn-text">
                  {loading ? "loading" : " Créer un compte"}
                </span>
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
