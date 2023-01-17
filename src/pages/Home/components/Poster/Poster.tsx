import React from "react";
import "./Poster.scss";

export interface PosterInterface {
  data: any;
}

const Poster: React.FC<PosterInterface> = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const src = `${imgUrl}${props.data.poster_path}`;

  return props.data ? (
    <img className="poster" src={src} alt={props.data.name} />
  ) : null;
};

export default Poster;
