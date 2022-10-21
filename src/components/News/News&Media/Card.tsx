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

const Card = ({
  imgAlt = "",
  imgSrc = "",
  headline = "",
  subtext = "",
  link = "",
}) => {
  return (
    <CardWrapper>
      <ImageHolder src={imgSrc} alt={imgAlt}></ImageHolder>
      <Contains>
        <Link href={link}>
          <H2>{headline}</H2>
        </Link>
        <H3>{subtext}</H3>
        <Flex>
          <Div>Pakam</Div>
          <Div>August 20, 2021</Div>
        </Flex>
      </Contains>
    </CardWrapper>
  );
};

export default Card;
