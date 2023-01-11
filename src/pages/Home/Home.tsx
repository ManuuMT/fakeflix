import React from "react";
import "./styles/Home.scss";
import { Navbar } from "./components";
import { Hero, Catalogue } from "./sections";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Catalogue />
    </div>
  );
};

export default Home;
