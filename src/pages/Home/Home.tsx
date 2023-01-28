import React from "react";
import { Navbar } from "./components";
import "./Home.scss";
import { Catalogue, Footer, Hero } from "./sections";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Catalogue />
      <Footer />
    </div>
  );
};

export default Home;
