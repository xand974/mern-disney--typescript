import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./slider.css";
import { sliderItem } from "../../helpers/data";
import { useState } from "react";
import { useRef } from "react";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const container = useRef<HTMLDivElement>(null);
  const handleClick = (value: string) => {
    if (value === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliderItem.length - 1);
      if (container.current !== null) {
        container.current.style.transform = `translateX(${
          -90 * sliderIndex
        }vw)`;
      }
    } else if (value === "right") {
      setSliderIndex(sliderIndex < sliderItem.length - 1 ? sliderIndex + 1 : 0);
      if (container.current !== null) {
        container.current.style.transform = `translateX(calc(${
          -90 * sliderIndex
        }vw - (2% * ${sliderIndex}) ))`;
      }
    }
  };
  return (
    <div className="slider">
      <div className="slider__left">
        <div className="slider__icon__container slider__icon__container--left">
          <button onClick={() => handleClick("left")}>
            <ArrowBackIos
              style={{ fontSize: "50px" }}
              className="slider-icon slider-icon-left"
            />
          </button>
        </div>
      </div>
      <div className="slider__parent" ref={container}>
        {sliderItem.map((item, key) => (
          <div className="slider__container" key={key}>
            <img
              src={item.photoURL}
              className="slider-img slider-img-active"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="slider__right">
        <div className="slider__icon__container slider__icon__container--right">
          <button onClick={() => handleClick("right")}>
            <ArrowForwardIos
              style={{ fontSize: "50px" }}
              className="slider-icon slider-icon-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
