import "./itemlist.css";

import { Link } from "react-router-dom";
import { MovieType } from "../../context/movieSlice";

type ItemListType = {
  item: MovieType;
};

export default function ItemList({ item }: ItemListType) {
  return (
    <Link to={`/movie/${item._id}`}>
      <div className="item">
        <img
          src={item.thumbnail}
          alt="movie thumbnail"
          className="item--image"
        />
      </div>
    </Link>
  );
}
