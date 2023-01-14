import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GENRES, getGenre, GenreDictionary } from "../../../../services/";
import "./Category.scss";
import { SliderMoves } from "./Category+Helper";

export interface CategoryInterface {
  genre: GENRES;
}

const Category: React.FC<CategoryInterface> = (props) => {
  // * States
  const [data, setData] = useState<any[]>();
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const sliderRef = useRef<HTMLDivElement>(null);

  const GetData = async (): Promise<any> => {
    try {
      const genre = await getGenre(GenreDictionary[props.genre].id);
      setData(genre);
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(error);
    }
  };

  const HandleClick = (move: SliderMoves) => {
    const slider = sliderRef.current;
    const sliderIndex = Number(
      getComputedStyle(slider as Element).getPropertyValue("--slider-index")
    );
    const imgPerScreen = Number(
      getComputedStyle(slider as Element).getPropertyValue("--imgs-per-screen")
    );

    if (move === SliderMoves.Right) {
      if (sliderIndex + 1 >= data!.length / imgPerScreen)
        slider?.style.setProperty("--slider-index", "0");
      else slider?.style.setProperty("--slider-index", String(sliderIndex + 1));
    }
    if (move === SliderMoves.Left) {
      if (sliderIndex - 1 < 0)
        slider?.style.setProperty(
          "--slider-index",
          String(data!.length / imgPerScreen - 1)
        );
      else slider?.style.setProperty("--slider-index", String(sliderIndex - 1));
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="category">
      <h3 className="category-title">{GenreDictionary[props.genre].title}</h3>
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
    </div>
  );
};

export default Category;
