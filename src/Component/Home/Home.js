import React from "react";


import Buses from "../Buses/Buses";

import HeroSection from "../HeroSection/HeroSection";
import Rote from "../Rote/Rote";

import Top from "../Top/Top";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Buses/>
      <Rote/>
      
      <Top/>
    </div>
  );
};

export default Home;
