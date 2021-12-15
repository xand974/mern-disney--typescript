import { Link } from "react-router-dom";
import "./cat.css";
import { catItems } from "../../helpers/data";

export default function Category() {
  return (
    <div className="categories">
      <div className="categories__list">
        {catItems.map((item) => (
          <Link to={item.link} key={item.id} className="category--link">
            <div className="categories__item">
              <img
                src={item.photoURL}
                alt="category illustration"
                className="categories__item--image"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
