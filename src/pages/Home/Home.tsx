import React from "react";
import "./styles/Home.scss";
import { Navbar, Hero } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
