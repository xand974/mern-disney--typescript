import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { useRef, useState } from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Topbar() {
  const [isTriggered, setIsTriggered] = useState(false);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsTriggered(true);
      } else {
        setIsTriggered(false);
      }
    }

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="topbar"
      ref={nav}
      style={{ background: isTriggered ? "#e5e5e5" : "none" }}
    >
      <Link to="/">
        <span className="title">Flixadmin</span>
      </Link>
      <div className="links">
        <div className="notif">
          <NotificationsNone className="icon " />
          <span>2</span>
        </div>
        <Language className="icon" />
        <Settings className="icon" />
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
