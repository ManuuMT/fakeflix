import React, { useEffect, useState } from "react";
import "./styles/Hero.scss";
import axios from "axios";
import iconReload from "../../../../assets/icons/iconReload.png";
import iconMute from "../../../../assets/icons/iconMute.png";
import iconUnmute from "../../../../assets/icons/iconUnmute.png";
import robotLogo from "../../../../assets/mrRobotLogo.png";
import iconArrow from "../../../../assets/icons/iconArrow.png";
import iconInfo from "../../../../assets/icons/iconInfo.png";

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  // * States
  const [heroData, setHeroData] = useState<any>();
  const [videoEnded, setVideoEnded] = useState(false);
  const [muted, setMuted] = useState(true);

  const posterUrl =
    "https://image.tmdb.org/t/p/original/1SEVAgbaah9wE5xoLt4qWPMBdpL.jpg";

  // * Life Cycle
  const GetHeroData = async (): Promise<any> => {
    const url = `${import.meta.env.VITE_REACT_APP_URL}62560?api_key=${
      import.meta.env.VITE_REACT_APP_KEY
    }&language=en-US`;
    try {
      const res = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setHeroData(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(error);
    }
  };

  // * Life Cycle
  useEffect(() => {
    GetHeroData();
  }, []);

  return (
    <div className="hero">
      <img src={robotLogo} alt="robot" className="hero-title" />
      <div className="hero-description">
        <p>
          A contemporary and culturally resonant drama about a young programmer,
          Elliot, who suffers from a debilitating anti-social disorder and
          decides that he can only connect to people by hacking them. He wields
          his skills as a weapon to protect the people that he cares about.
        </p>
      </div>
      <button className="hero-button-play">
        <img src={iconArrow} alt="play" />
        Reproducir
      </button>
      <button className="hero-button-info">
        <img src={iconInfo} alt="info" />
        Más información
      </button>
      {videoEnded ? (
        <img className="hero-poster" src={posterUrl} alt="robot" />
      ) : (
        <video
          autoPlay
          muted={muted}
          src="video/MrRobotTrailer.mp4"
          onEnded={(e: any) => setVideoEnded(e.target.ended)}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
      {videoEnded ? (
        <button className="hero-button" onClick={() => setVideoEnded(false)}>
          <img src={iconReload} alt="reload" />
        </button>
      ) : (
        <button className="hero-button" onClick={() => setMuted(!muted)}>
          <img src={muted ? iconMute : iconUnmute} alt="volume" />
        </button>
      )}
      <div className="hero-clasif">13+</div>
    </div>
  );
};

export default Hero;
