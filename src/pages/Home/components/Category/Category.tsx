import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GENRES, getGenre } from "../../../../services/getGenre";
import "./styles/Category.scss";
import { SliderMoves } from "./Category+Helper";

export interface CategoryInterface {}

const Category: React.FC<CategoryInterface> = () => {
  // * States
  const [data, setData] = useState<any>();
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const sliderRef = useRef<HTMLDivElement>(null);

  const GetData = async (): Promise<any> => {
    try {
      const genre = await getGenre(GENRES.Comedy.id);
      setData(genre);
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(error);
    }
  };

  const HandleClick = (move: SliderMoves) => {
    const slider = sliderRef.current;
    const sliderIndex = Number(
      slider?.style.getPropertyValue("--slider-index")
    );

    if (move === SliderMoves.Right)
      slider?.style.setProperty("--slider-index", String(sliderIndex + 1));
    if (move === SliderMoves.Left)
      slider?.style.setProperty("--slider-index", String(sliderIndex - 1));
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="container">
      <div
        className="handle handle-left"
        onClick={() => HandleClick(SliderMoves.Left)}
      >
        <div className="handle-symbol">&#x2039;</div>
      </div>
      <div className="slider" ref={sliderRef}>
        {data &&
          data.map((tvshow: any, i: number) => {
            const src = `${imgUrl}${tvshow.poster_path}`;
            return (
              <img className="poster" src={src} alt={tvshow.name} key={i} />
            );
          })}
      </div>
      <div
        className="handle handle-right"
        onClick={() => HandleClick(SliderMoves.Right)}
      >
        <div className="handle-symbol">&#x203A;</div>
      </div>
    </div>
  );
};

export default Category;
