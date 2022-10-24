import {
  CardWrapper,
  H2,
  H3,
  Flex,
  Div,
  ImageHolder,
  Link,
  Contains,
} from "./styles";
import Image from "next/image";

const Card = ({
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
}: {
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
}) => {
  return (
    <CardWrapper bg={bg ? true : false}>
      <div>
        <ImageHolder src={imgSrc} alt={imgAlt}></ImageHolder>
      </div>

      <Contains col={color ? true : false}>
        <Link href={link} target="_blank">
          <H2 col={color ? true : false} decoration={decoration ? true : false}>
            {headline}
          </H2>
        </Link>
        <H3>{`${subtext.substring(0, 100)}...`}</H3>

        <Flex>
          <Div>
            {info?.map(({ text, imgSrc }, index) => (
              <div className="flex items-center gap-1">
                <Image src={imgSrc} alt="Pakam" width={20} height={20}></Image>
                <h4>{text}</h4>
              </div>
            ))}
          </Div>
          <Div>
            {dates?.map(({ imgSrc, text }, index) => (
              <div className="flex items-center gap-1">
                <Image src={imgSrc} alt="Pakam" width={20} height={20}></Image>
                <h4>{text}</h4>
              </div>
            ))}
          </Div>
        </Flex>
      </Contains>
    </CardWrapper>
  );
};

export default Card;
