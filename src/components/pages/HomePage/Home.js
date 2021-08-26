import React from 'react';
import HeroSection from '../../HeroSection';
import Projects from '../../Projects'
import Title from '../../title'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive } from './Data';

function Home() {
  return (
    <>
      <Title />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Projects />
    </>
  );
}

export default Home;