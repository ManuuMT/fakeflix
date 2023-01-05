import React from "react";
import "./styles/SplashScreen.scss";

interface SplashInterface {
  videoEnded: (end: boolean) => void;
}

const SplashScreen: React.FC<SplashInterface> = (props) => {
  return (
    <div className="splash">
      <video
        autoPlay
        muted
        src="video/Intro.mp4"
        width="100%"
        onEnded={(e: any) => props.videoEnded(!e.target.ended)}
      >
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default SplashScreen;
