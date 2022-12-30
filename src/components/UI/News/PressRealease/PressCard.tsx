import { H3, Flex, Div } from "../News&Media/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

const CardWrapper = styled.div`
  ${tw`pb-0 bg-red-500`};
  background: #005700;
  box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.7);
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;

  > div:first-child {
    background: #fff;
  }

  > div:last-child {
    padding: 20px;
  }
`;

const H2 = styled.h2<{ col?: boolean }>`
  ${tw` text-[14px] md:text-base leading-[35px] font-bold  tracking-normal `}
  color: ${({ col }) => (col ? "#fff" : "#005700")};
`;

export const PressCard = ({
  id,
  imgAlt,
  imgSrc,
  headline,
  subtext,
  link,
  info,
  dates,
  bg,
  color,
  decoration,
  inPage,
}: {
  id?: number;
  headline: string;
  subtext: string;
  link: string;
  imgAlt: string;
  imgSrc: any;
  info: { imgSrc: any; text: string }[];
  dates: { imgSrc: any; text: string }[];
  bg?: boolean;
  color?: boolean;
  decoration?: boolean;
  inPage?: boolean;
}) => {
  const router = useRouter();

  return (
    <Link href={`/news/press/${id}`}>
      <CardWrapper>
        <div>
          <Image
            src={imgSrc}
            width="100%"
            height="60%"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div>
          {inPage && <H2 col={color ? true : false}>{headline}</H2>}
          <H3>{`${subtext.substring(0, 150)}....`}</H3>
          <Flex>
            <Div>
              {info?.map(({ text, imgSrc }, index) => (
                <div className="flex gap-1">
                  <Image
                    src={imgSrc}
                    alt="Pakam"
                    width={15}
                    height={15}
                  ></Image>
                  <small>{text}</small>
                </div>
              ))}
            </Div>
            <Div>
              {dates?.map(({ imgSrc, text }, index) => (
                <div className="flex gap-1 items-center">
                  <Image
                    src={imgSrc}
                    alt="Pakam"
                    width={10}
                    height={10}
                  ></Image>
                  <small>{text}</small>
                </div>
              ))}
            </Div>
          </Flex>
        </div>
      </CardWrapper>
    </Link>
  );
};
