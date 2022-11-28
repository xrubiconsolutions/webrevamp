import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../src/components";
import Image from "next/image";
import { contact, contact2 } from "../../src/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowUpRight } from "react-icons/bs";
import { Map } from "../../src/components/UI/Map/Map";

const ContactSection = styled.div`
  padding: 3.2rem 0;
  ${tw`bg-secondary`}
  @media screen and (max-width: 960px) {
    padding: 1.6rem 0;
  }
`;
const ContactTitle = styled.h1`
  ${tw`font-extrabold text-5xl text-blak-100 text-left mb-10 `}
`;
const ContactContainer = styled.div`
  ${tw`grid lg:grid-cols-2 gap-3 items-center lg:items-start justify-center`}
`;
const ConatctImageContainer = styled.div`
  ${tw``}
`;
const ConatctTextContainer = styled.div`
  ${tw`space-y-12`}
`;
const ConatctText2Container = styled.div`
  ${tw`space-y-6`}
`;
const ConatctTextContainerh6 = styled.h6`
  ${tw`font-bold text-lg lg:text-xl text-blak-100`}
`;
const ConatctTextContainerP = styled.p`
  ${tw`text-blak-100 text-base`}
`;
const ConatctTextContainerLink = styled.p`
  ${tw`text-primary font-thin text-sm`}
`;
const ConatctTextWrapper = styled.div`
  ${tw`space-y-3`}
`;
const ConatctTextContainerLinks = styled.div`
  ${tw`flex items-center gap-5`}
`;
const Contact = () => {
  const router = useRouter();

  return (
    <ContactSection>
      <Container>
        <ContactTitle>Contact Us</ContactTitle>
        <div className="space-y-28">
          <ContactContainer>
            <ConatctImageContainer>
              <Image
                src="/img/contact.png"
                height={387}
                width={580}
                objectFit="cover"
              />
            </ConatctImageContainer>
            <ConatctTextContainer>
              {contact.map((el, i) => {
                return (
                  <ConatctTextWrapper key={i}>
                    <ConatctTextContainerh6>{el.title}</ConatctTextContainerh6>
                    <ConatctTextContainerP>{el.text}</ConatctTextContainerP>
                    <ConatctTextContainerLink>
                      {/* <a> {el.link}</a> */}

                      <div
                        onClick={() => router.push(`${el.linkto}`)}
                        className="hover:cursor-pointer w-[30%] flex items-center justify-start gap-1"
                      >
                        {el.link}
                        <span>
                          <BsArrowUpRight />
                        </span>
                      </div>
                    </ConatctTextContainerLink>
                  </ConatctTextWrapper>
                );
              })}
            </ConatctTextContainer>
          </ContactContainer>

          <ContactContainer className="!flex !flex-col-reverse lg:!grid lg:!grid-cols-2  ">
            <ConatctText2Container>
              {contact2.map((el, i) => {
                console.log("el", el);
                return (
                  <ConatctTextWrapper key={i}>
                    <ConatctTextContainerh6>{el.title}</ConatctTextContainerh6>
                    <ConatctTextContainerP>{el.text}</ConatctTextContainerP>
                    {/* <ConatctTextContainerLinks>
                      {el.links &&
                        el.links!.map((el: string | undefined, i: any) => (
                          <Image
                            src={el!}
                            key={i}
                            alt="socials"
                            width={25.82}
                            height={26.67}
                          />
                        ))}
                    </ConatctTextContainerLinks> */}
                    <ConatctTextContainerLinks>
                      {el.links?.map((el, i) => {
                        return (
                          <Link href={el.imgLink}>
                            <a href={el.imgLink} target="_blank">
                              <Image
                                src={el.imgSrc}
                                key={i}
                                alt="socials"
                                width={25.82}
                                height={26.67}
                              />
                            </a>
                          </Link>
                        );
                      })}
                    </ConatctTextContainerLinks>
                  </ConatctTextWrapper>
                );
              })}
            </ConatctText2Container>
            {/* <ConatctImageContainer> */}
            {/* <Image
                src="/img/contact1.png"
                height={387}
                width={580}
                alt="contact"
                objectFit="contain"
              /> */}

            <Map />
            {/* </ConatctImageContainer> */}
          </ContactContainer>
        </div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
