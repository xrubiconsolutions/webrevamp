import React from "react";
import { Container } from "../../src/components/index";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import PR from "/public/img/PressRelease.png";

const Date = styled.p`
  ${tw`text-xl tracking-wider pt-0 md: pt-14`}
`;
const Heading = styled.h2`
  ${tw`text-primary font-bold text-4xl lg:text-5xl  py-8 text-center`}
`;

const BodyP = styled.p`
  ${tw`text-lg pb-10 leading-loose tracking-wide `}
`;

const Controller = styled.div`
  ${tw`flex items-center justify-center m-auto max-w-[900px] h-[300px] bg-primary`}
`;

const Br = styled.div`
  ${tw`pb-20`}
`;

const press = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <Date>February 9th, 2021</Date>
        <Heading>Pakam announces strategic partnership with Arup</Heading>
        <BodyP>
          Pakam technology has entered a strategic partnership with Arup. The
          collaboration originated from the need to build circularity around
          waste for a sustainable environment and will help both parties to
          support sustainable agenda through strengthening of capacity for
          recycling, composting, up-cycling, and reuse of waste materials.{" "}
        </BodyP>

        <BodyP>
          Pakam is a next-generation unified waste management collection
          software & reporting platform start-up, enabling circularity &
          responsible disposal of waste on an earn as you waste basis to achieve
          a zero-waste circular economy. Pakam connects waste from the
          generating public and/or businesses to waste companies through waste
          collector in real-time, activates transactions in real-time, and
          generates actionable insight reports in real-time. Pakam leverages
          end-to-end real-time data intelligence across the waste collection
          ecosystem that guarantees automation, transparency, incentivisation,
          and material traceability.{" "}
        </BodyP>

        <div className="mt-10 mb-20">
          <Controller>
            <Image src={PR}></Image>
          </Controller>
        </div>

        <BodyP>
          Arup is a British multinational professional services firm
          headquartered in London which
          provides design, engineering, architecture, planning, and advisory
          services across every aspect of the built environment. With presence
          across 35 countries around the world. Arup has participated in
          projects in over 160 countries with sustainability at the core of its
          business.
        </BodyP>
        <BodyP>
          This partnership is key to building an impactful and sustainable
          solution for communities recycling, composting, and reusing with the
          aim to create circular economy, communities inclusion, and climate
          resilience.
        </BodyP>
        <BodyP>
          This collaboration is starting immediately, as it will increase the
          credibility of Arup and Pakam in the global push to solving waste
          management challenges, and climate change.
        </BodyP>
        <BodyP>
          Initially, the partnership will revolve around support for recycling
          collection. With time, the companies will also collaborate on building
          collection infrastructure to support the ecosystem.{" "}
        </BodyP>
        <Br />
      </Container>
    </div>
  );
};

export default press;
