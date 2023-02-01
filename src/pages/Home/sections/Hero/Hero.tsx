import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { HeroImages } from "./Hero+Helper";

const Hero: React.FC = () => {
  // * States
  const [videoEnded, setVideoEnded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [animation, setAnimation] = useState(false);

  // * Life Cycle
  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 5000);
    setTimeout(() => {
      setAnimation(false);
    }, 27000);
  }, []);

  return (
    <div className="hero">
      <div className="hero-main">
        <div className={`hero-title ${animation ? "active" : ""}`}>
          <img
            src={HeroImages.robotlogo.src}
            className="hero-title-img"
            alt={HeroImages.robotlogo.alt}
          />
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
        <img src={HeroImages.arrow.src} alt={HeroImages.arrow.alt} />
        Play
      </button>
      <button className="hero-button-info">
        <img
          src={HeroImages.info.src}
          className="white"
          alt={HeroImages.arrow.alt}
        />
        More info
      </button>
      {videoEnded ? (
        <img
          className="hero-poster"
          src={HeroImages.robotback.src}
          alt={HeroImages.robotback.alt}
        />
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
          <img src={HeroImages.reload.src} alt={HeroImages.reload.alt} />
        </button>
      ) : (
        <button className="hero-button" onClick={() => setMuted(!muted)}>
          <img
            src={muted ? HeroImages.mute.src : HeroImages.unmute.src}
            className="white"
            alt={HeroImages.mute.alt}
          />
        </button>
      )}
      <div className="hero-clasif">13+</div>
    </div>
  );
};

export default Hero;
