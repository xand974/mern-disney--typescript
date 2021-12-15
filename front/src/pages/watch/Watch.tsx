import "./watch.css";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <main className="watch">
      <div className="watch__infos">
        <Link to="/" className="watch--link">
          <ArrowBackIos className="watch--icon" />
          <h1 className="watch--title">
            Pirates des Caraïbes : La Malédiction du Black Pearl
          </h1>
        </Link>
      </div>
      <video
        src={process.env.PUBLIC_URL + "/assets/Test.mp4"}
        className="watch--video"
        controls
        autoPlay
      ></video>
    </main>
  );
}
