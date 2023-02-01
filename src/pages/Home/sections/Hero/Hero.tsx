import React, { useEffect, useState } from "react";
import "./Hero.scss";
import iconReload from "../../../../assets/icons/iconReload.png";
import iconMute from "../../../../assets/icons/iconMute.png";
import iconUnmute from "../../../../assets/icons/iconUnmute.png";
import robotLogo from "../../../../assets/mrRobotLogo.png";
import iconArrow from "../../../../assets/icons/iconArrow.png";
import iconInfo from "../../../../assets/icons/iconInfo.png";
import mrRobotBack from "../../../../assets/mrRobotBack.jpg";

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  // * States
  const [videoEnded, setVideoEnded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [animation, setAnimation] = useState(false);

  // * Methods

  // * Life Cycle
  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 4000);
  }, []);

  return (
    <div className="hero">
      <div className="hero-main">
        <div className={`hero-title ${animation ? "active" : ""}`}>
          <img src={robotLogo} alt="robot" className="hero-title-img" />
        </div>
        <div className={`hero-description ${animation ? "active" : ""}`}>
          <p>
            A contemporary and culturally resonant drama about a young
            programmer, Elliot, who suffers from a debilitating anti-social
            disorder and decides that he can only connect to people by hacking
            them. He wields his skills as a weapon to protect the people that he
            cares about.
          </p>
        </div>
      </div>
      <button className="hero-button-play">
        <img src={iconArrow} alt="play" />
        Play
      </button>
      <button className="hero-button-info">
        <img src={iconInfo} alt="info" className="white" />
        More info
      </button>
      {videoEnded ? (
        <img className="hero-poster" src={mrRobotBack} alt="robot" />
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
        <button
          className="hero-button white"
          onClick={() => setVideoEnded(false)}
        >
          <img src={iconReload} alt="reload" />
        </button>
      ) : (
        <button className="hero-button" onClick={() => setMuted(!muted)}>
          <img
            src={muted ? iconMute : iconUnmute}
            alt="volume"
            className="white"
          />
        </button>
      )}
      <div className="hero-clasif">13+</div>
    </div>
  );
};

export default Hero;
