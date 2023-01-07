import React from "react";
import "./styles/Home.scss";
import { Navbar } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Navbar />
      Home
    </div>
  );
};

export default Home;
