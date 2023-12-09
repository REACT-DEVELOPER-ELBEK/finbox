import React from "react";
import Hero from "./routes/home/hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
