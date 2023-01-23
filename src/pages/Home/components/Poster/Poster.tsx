import React, { useEffect, useState } from "react";
import iconArrowDown from "../../../../assets/icons/iconArrowDown.png";
import iconPlay from "../../../../assets/icons/iconPlay.png";
import iconPlus from "../../../../assets/icons/iconPlusSimple.png";
import iconThumb from "../../../../assets/icons/iconThumbUp.png";
import { useHover } from "../../../../hooks";
import { getShow } from "../../../../services";
import "./Poster.scss";

interface PosterInterface {
  poster: string;
  showID: string;
}

const Poster: React.FC<PosterInterface> = (props) => {
  // * States
  const [data, setData] = useState<any>();
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const posterSrc = `${imgUrl}${props.poster}`;

  // * Methods
  const GetData = async (): Promise<any> => {
    try {
      const show = await getShow(props.showID);
      setData(show);
    } catch (error) {
      console.error(error);
    }
  };

  // * Life Cycle
  useEffect(() => {
    if (isHovered && !data) {
      GetData();
    }
  }, [isHovered]);

  return (
    <div className="poster-container" ref={hoverRef}>
      <div className={`poster-card ${isHovered ? "active" : ""}`}>
        <img className="poster-card-img" src={posterSrc} alt="tvshow" />

        {data ? (
          <div className="poster-card-info">
            <div className="pc-icons">
              <div className="pc-icons-menu">
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
              </div>
              <div className="pc-icon-default pc-arrow">
                <img
                  className="pc-icon-default-img"
                  alt="add"
                  src={iconArrowDown}
                />
              </div>
            </div>
            <div className="pc-seasons">
              <div className="pc-seasons-match">99% Match </div>
              <div className="pc-seasons-clasif">13 +</div>
              <div className="pc-seasons-episodes">
                {`${data.number_of_seasons} Seasons`}
              </div>
              <div className="pc-seasons-quality">HD</div>
            </div>
            <div className="pc-genres">
              {data.genres.map((genre: any, i: number) => {
                if (i < 3)
                  return (
                    <div className="pc-genres-single" key={i}>
                      <div className="pc-genres-name">{genre.name}</div>
                      <div className="pc-genre-divider" />
                    </div>
                  );
              })}
            </div>
          </div>
        ) : (
          <span>"Loading..."</span>
        )}
      </div>

      <img className="poster-img" src={posterSrc} alt="tvshow" />
    </div>
  );
};

export default Poster;
