import { Container } from "../../../src/components/index";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { Button } from "../../../src/components/index";
import { pressItems } from "../../../src/utils/data";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";

const Date = styled.p`
  ${tw`text-lg tracking-wider pt-0 md: pt-14`}
`;
const Heading = styled.h2`
  ${tw`text-primary font-bold text-2xl lg:text-3xl  py-8 text-center`}
`;

const BodyP = styled.p`
  ${tw`text-base pb-6 leading-loose tracking-wide `}
`;

const Controller = styled.div`
  ${tw`flex items-center justify-center m-auto max-w-[800px] h-[300px] bg-primary`}
`;

const Br = styled.div`
  ${tw`pb-10`}
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = pressItems.map((press) => {
    return {
      params: {
        id: press.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const pressItemss = pressItems.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      press: pressItemss[0],
    },
  };
};

const Press = ({ press }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div className="bg-secondary">
      <Container>
        <div>
          <Date>{press.date}</Date>
          <Heading>{press.heading}</Heading>
          <BodyP>{press.paragraph1}</BodyP>
          <BodyP>{press.Paragraph2}</BodyP>

          <div className="mt-5 mb-12">
            <Controller>
              <Image
                src={press.image}
                width={450}
                height={250}
                alt=""
                objectFit="contain"
              />
            </Controller>
          </div>

          <BodyP>{press.paragraph3}</BodyP>
          <BodyP>{press.paragraph4}</BodyP>
          <BodyP>{press.paragraph5}</BodyP>
          <BodyP>{press.paragraph6}</BodyP>
          <BodyP>{press.paragraph7}</BodyP>
          <BodyP>{press.paragraph8}</BodyP>

          <Button
            onClick={() => {
              router.back();
            }}
            icons={false}
            weight={false}
            primary={true}
            white={true}
            width={true}
            className=""
          >
            Back To News
          </Button>
        </div>

        <Br />
      </Container>
    </div>
  );
};

export default Press;
