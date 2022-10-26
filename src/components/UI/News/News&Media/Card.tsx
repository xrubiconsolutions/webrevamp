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
import { useRouter } from "next/router";

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
  inPage,
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
  inPage?: boolean;
}) => {
  const router = useRouter();
  return (
    <CardWrapper bg={bg ? true : false}>
      <Contains col={color ? true : false}>
        <div style={{ marginTop: "20px" }}>
          <Image
            src={imgSrc}
            layout="responsive"
            width={500}
            height={300}
            className="mt-10"
          />
        </div>
        {/* <Link href={link} target="_blank">
          <H2 col={color ? true : false} decoration={decoration ? true : false}>
            {headline}
          </H2>
        </Link> */}

        {inPage ? (
          <H2
            col={color ? true : false}
            decoration={decoration ? true : false}
            onClick={() => router.push("/news/press")}
            className="cursor-pointer"
          >
            {headline}
          </H2>
        ) : (
          <Link href={link} target="_blank">
            <H2
              col={color ? true : false}
              decoration={decoration ? true : false}
            >
              {headline}
            </H2>
          </Link>
        )}

        <H3>{`${subtext.substring(0, 150)}....`}</H3>

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
