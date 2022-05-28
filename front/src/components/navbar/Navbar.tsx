import { Add, Home, Search, Star, Movie, Tv } from "@mui/icons-material";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import "./navbar.css";
import { signOut } from "../../api/auth";
import { useDispatch } from "react-redux";
export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    function handleNav() {
      setIsScroll(window.scrollY > 200 ? true : false);
    }
    window.addEventListener("scroll", () => {
      handleNav();
    });
    return window.removeEventListener("scroll", handleNav);
  }, []);

  const logout = () => {
    signOut(dispatch);
    navigate("/login");
  };

  const toggle = () => {
    setShow((prev) => (prev = !prev));
  };

  return (
    <nav
      className="nav"
      ref={container}
      style={{ background: isScroll ? "black" : "none" }}
    >
      <div className="nav__wrapper">
        <div className="nav__left">
          <div className="nav--title">
            <Link to="/">
              <img
                className="nav--title-img"
                src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
                alt="disney logo"
              />
            </Link>
          </div>
          <ul className="nav-links">
            <Link to="/">
              <li className="nav--link">
                <Home className="nav--icon" style={{ fontSize: "15px" }} />
                <span>ACCUEIL </span>
              </li>
            </Link>
            <Link to="/search">
              <li className="nav--link">
                <Search className="nav--icon" style={{ fontSize: "15px" }} />
                <span>RECHERCHE</span>
              </li>
            </Link>
            <Link to="/mylist">
              <li className="nav--link">
                <Add className="nav--icon" style={{ fontSize: "15px" }} />
                <span>MA LISTE</span>
              </li>
            </Link>
            <Link to="/originals">
              <li className="nav--link">
                <Star className="nav--icon" style={{ fontSize: "15px" }} />
                <span>ORIGINALS</span>
              </li>
            </Link>
            <Link to="/films">
              <li className="nav--link">
                <Movie className="nav--icon" style={{ fontSize: "15px" }} />
                <span>FILMS</span>
              </li>
            </Link>
            <Link to="/series">
              <li className="nav--link">
                <Tv className="nav--icon" style={{ fontSize: "15px" }} />
                <span>SERIES</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="nav__profile" onClick={() => toggle()}>
          <span className="nav__profile-text">Maletto</span>
          <div className="nav__profile-img-container">
            <img
              height="50"
              width="50"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt="navbar profile avatar"
              className="nav__profile--img"
            />
          </div>
          {show ? <Dropdown logout={logout} /> : <></>}
        </div>
      </div>
    </nav>
  );
}
