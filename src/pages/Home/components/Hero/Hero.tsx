import React, { useEffect, useState } from "react";
import "./styles/Hero.scss";
import axios from "axios";

export interface HeroInterface {}

const Hero: React.FC<HeroInterface> = () => {
  // * States
  const [heroData, setHeroData] = useState<any>();
  const [videoEnded, setVideoEnded] = useState(false);

  const posterUrl =
    "https://image.tmdb.org/t/p/original/1SEVAgbaah9wE5xoLt4qWPMBdpL.jpg";

  // * Life Cycle
  const GetHeroData = async (): Promise<any> => {
    const url = `${process.env.REACT_APP_URL}62560?api_key=${process.env.REACT_APP_KEY}&language=en-US`;
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
      {videoEnded ? (
        <img className="hero-poster" src={posterUrl} alt="robot" />
      ) : (
        <video
          autoPlay
          muted
          src="video/MrRobotTrailer.mp4"
          onEnded={(e: any) => setVideoEnded(e.target.ended)}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
      <div className="hero-title">{heroData?.name}</div>
    </div>
  );
};

export default Hero;
