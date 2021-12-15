import ItemList from "../itemlist/ItemList";
import "./movielist.css";
import { movieListItems } from "../../helpers/data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef, useState } from "react";

type MovieListType = {
  isInDetailPage: boolean;
};

export default function MovieList({ isInDetailPage = true }: MovieListType) {
  const [sliderIndex, setSliderIndex] = useState<number>(1);

  const container = useRef<HTMLDivElement>(null);
  const handleClick = (value: string) => {
    if (value === "left") {
      setSliderIndex(
        sliderIndex > 0 ? sliderIndex - 1 : movieListItems.length - 5
      );
      if (container.current !== null) {
        container.current.style.transform = `translateX(${
          -17 * sliderIndex
        }vw - 20px * ${sliderIndex})`;
      }
    } else if (value === "right") {
      setSliderIndex(
        sliderIndex < movieListItems.length - 5 ? sliderIndex + 1 : 0
      );
      if (container.current !== null) {
        container.current.style.transform = `translateX(calc(${
          -17 * sliderIndex
        }vw - 20px * ${sliderIndex})`;
      }
    }
  };
  return (
    <div className="list">
      {isInDetailPage && <h1 className="list--title">Nouveau sur Disney +</h1>}
      <div className="list__arrow list-left">
        <button onClick={() => handleClick("left")} className="list--btn">
          <ArrowBackIos className="list--icon" fontSize="large" />
        </button>
      </div>
      <div className="list__container" ref={container}>
        {movieListItems.map((item) => (
          <ItemList key={item.id} id={item.id} item={item} />
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
