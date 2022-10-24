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
      {/* <Image src={imgSrc} layout="responsive" width={550} height={300} /> */}

      <Contains col={color ? true : false}>
        <div style={{ marginTop: "20px" }}>
          <Image
            src={imgSrc}
            layout="responsive"
            width={550}
            height={300}
            className="mt-10"
          />
        </div>

        {/* <Image
          src={imgSrc}
          layout="responsive"
          width={550}
          // height={300}
          className="mt-10"
        /> */}

        <Link href={link} target="_blank">
          <H2 col={color ? true : false} decoration={decoration ? true : false}>
            {headline}
          </H2>
        </Link>
        <H3>{`${subtext.substring(0, 100)}....`}</H3>

        <Flex>
          <Div>
            {info?.map(({ text, imgSrc }, index) => (
              <div className="flex gap-1">
                <Image src={imgSrc} alt="Pakam" width={15} height={15}></Image>
                <small>{text}</small>
              </div>
            ))}
          </Div>
          <Div>
            {dates?.map(({ imgSrc, text }, index) => (
              <div className="flex gap-1 items-center">
                <Image src={imgSrc} alt="Pakam" width={10} height={10}></Image>
                <small>{text}</small>
              </div>
            ))}
          </Div>
        </Flex>
      </Contains>
    </CardWrapper>
  );
};

export default Card;
