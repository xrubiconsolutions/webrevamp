import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../src/components";
import Awards from "../../src/components/UI/about/awards/awards";
import Featured from "../../src/components/UI/about/featured/featured";
import Goals from "../../src/components/UI/about/goals/goals";
import AboutHero from "../../src/components/UI/about/hero/hero";
import Impact from "../../src/components/UI/about/impact/impact";
import SDG from "../../src/components/UI/about/SDG";
import Solutions from "../../src/components/UI/about/solutions/solutions";
import Values from "../../src/components/UI/about/values/values";
import WhatWeDoSection from "../../src/components/UI/about/whatwedo/whatwedo";

const About: NextPage = () => {
  return (
    <>
      <AboutHero />
      <WhatWeDoSection />
      <Goals />
      <Solutions />
      <Impact />
      <Values />
      <SDG />
      <Awards />
      <Featured />
    </>
  );
};

export default About;
