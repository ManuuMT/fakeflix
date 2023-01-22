import React from "react";
import { useHover } from "../../../../hooks";
import "./Poster.scss";
import iconPlay from "../../../../assets/icons/iconPlay.png";
import iconPlus from "../../../../assets/icons/iconPlusSimple.png";
import iconThumb from "../../../../assets/icons/iconThumbUp.png";
import iconArrowDown from "../../../../assets/icons/iconArrowDown.png";

export interface PosterInterface {
  data: any;
}

const Poster: React.FC<PosterInterface> = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const posterSrc = `${imgUrl}${props.data.poster_path}`;

  // * States
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    props.data && (
      <div className="poster-container">
        <div
          ref={hoverRef}
          className={`poster-card ${isHovered ? "active" : ""}`}
        >
          {
            <img
              className="poster-card-img"
              src={posterSrc}
              alt={props.data.name}
            />
          }
          <div className="poster-card-info">
            <div className="pc-icons">
              <div className="pc-icons-main">
                <div className="pc-icon-play">
                  <img className="pc-icon-play-img" alt="play" src={iconPlay} />
                </div>
                <div className="pc-icon-default">
                  <img
                    className="pc-icon-default-img"
                    alt="add"
                    src={iconPlus}
                  />
                </div>
                <div className="pc-icon-default pc-thumb">
                  <img
                    className="pc-icon-default-img"
                    alt="add"
                    src={iconThumb}
                  />
                </div>
                <div className="pc-icon-default pc-cross">
                  <img
                    className="pc-icon-default-img"
                    alt="add"
                    src={iconPlus}
                  />
                </div>
              </div>
              <div className="pc-icon-default pc-arrow">
                <img
                  className="pc-icon-default-img"
                  alt="add"
                  src={iconArrowDown}
                />
              </div>
              <div className="pc-icons-menu"></div>
            </div>
            <div className="pc-seasons">Seasons</div>
            <div className="pc-genres">Genres</div>
          </div>
        </div>
        <img className="poster-img" src={posterSrc} alt={props.data.name} />
      </div>
    )
  );
};

export default Poster;
