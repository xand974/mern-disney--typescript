import "./itemlist.css";
import { MovieType } from "../../helpers/data";
import { Link } from "react-router-dom";

type ItemListType = {
  id: number;
  item: MovieType;
};

export default function ItemList({ id, item }: ItemListType) {
  return (
    <Link to={item.link}>
      <div className="item">
        <img
          src={item.photoURL}
          alt="movie thumbnail"
          className="item--image"
        />
      </div>
    </Link>
  );
}
