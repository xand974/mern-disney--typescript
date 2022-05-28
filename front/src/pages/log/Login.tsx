import "./log.css";
import { LoginOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CredentialType, login } from "../../api/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/selector";
import { RootState } from "../../context/store";

export default function Login() {
  const [credential, setCredential] = useState({} as CredentialType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, pending } = useAppSelector((state: RootState) => state.user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredential((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    const res = await login(credential, dispatch);
    if (res.data === "success") navigate("/");
  };

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
                onChange={handleChange}
                required
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="card__form">
              {pending ? (
                <span>Veuillez Patienter</span>
              ) : (
                <button className="card__form--btn" onClick={handleClick}>
                  <span className="card__form--btn-text">SE CONNECTER</span>
                  <LoginOutlined className="card__form--icon" />
                </button>
              )}
            </div>
          </form>
          {error && <span>Mauvais identifiant ou mot de passe</span>}
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
