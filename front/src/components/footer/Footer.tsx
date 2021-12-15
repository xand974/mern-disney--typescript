import "./footer.css";
import { footerLinks } from "../../helpers/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__top">
        <img
          src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
          className="footer--img"
          alt=""
        />
      </div>
      <div className="footer__infos">
        {footerLinks.map((item) => (
          <Link to={item.link} key={item.id}>
            <span className="footer--link">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="footer__copyright">
        <p className="footer--text">© Disney. Tous droits réservés</p>
      </div>
    </footer>
  );
}
