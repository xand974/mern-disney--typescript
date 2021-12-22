import ItemList from "../itemlist/ItemList";
import "./movielist.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef, useState } from "react";
import { ListType } from "../../context/listSlice";
import { MovieType } from "../../context/movieSlice";
import { useEffect } from "react";
import { getMovie } from "../../api/movie";

type MovieListType = {
  isInDetailPage: boolean;
  item: ListType;
};

export default function MovieList({
  isInDetailPage = true,
  item,
}: MovieListType) {
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const [movieItem, setMovieItem] = useState([] as MovieType[]);
  const container = useRef<HTMLDivElement>(null);
  const handleClick = (value: string) => {
    if (value === "left") {
      setSliderIndex(
        sliderIndex > 0 ? sliderIndex - 1 : item.content.length - 5
      );
      if (container.current !== null) {
        container.current.style.transform = `translateX(${
          -17 * sliderIndex
        }vw - 20px * ${sliderIndex})`;
      }
    } else if (value === "right") {
      setSliderIndex(
        sliderIndex < item.content.length - 5 ? sliderIndex + 1 : 0
      );
      if (container.current !== null) {
        container.current.style.transform = `translateX(calc(${
          -17 * sliderIndex
        }vw - 20px * ${sliderIndex})`;
      }
    }
  };

  useEffect(() => {
    getMovie(item.content, setMovieItem, null);
  }, [item]);

  return (
    <div className="list">
      {isInDetailPage && <h1 className="list--title">{item.title}</h1>}
      <div className="list__arrow list-left">
        <button onClick={() => handleClick("left")} className="list--btn">
          <ArrowBackIos className="list--icon" fontSize="large" />
        </button>
      </div>
      <div className="list__container" ref={container}>
        {movieItem.map((item) => (
          <ItemList key={item._id} item={item} />
        ))}
      </div>
      <div className="list__arrow list-right">
        <button onClick={() => handleClick("right")} className="list--btn">
          <ArrowForwardIos className="list--icon" fontSize="large" />
        </button>
      </div>
    </div>
  );
}
