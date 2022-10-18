import Image1 from "/public/img/image1.png";
import Image2 from "/public/img/image2.png";
import Image3 from "/public/img/image3.png";

import Card from "./Card";
import { Container } from "../..";
import { CardContainer } from "./styles";
import Footer from "../../Footer/footer";
import Hero from "./Hero";

const NewsMedia = () => {
  const articles = [
    {
      imgSrc: Image1,
      headline:
        "Dr. Dolapo Fasawe: Making Case for the Environment at COP2 6 through LASEPA",
      subtext:
        "With Dr. Dolapo Fasawe as the general manager, the agency has grown in leaps and bounds since she assumed office on August 19, 2019.",
      imgAlt: "Lasepa GM",
      link: "https://www.thisdaylive.com/index.php/2021/11/12/dr-dolapo-fasawe-making-case-for-the-environment-at-cop26-through-lasepa/",
    },
    {
      imgSrc: Image2,
      headline:
        "Sanwo-Olu moves to create 6,000 jobs as lagos adopts waste conversion",
      subtext:
        "Lagos State is transiting from traditional waste management to conversion of waste materials – an innovation that is projected to generate 6,000 jobs.",
      imgAlt: "Babajide Sanwo-olu",
      link: "https://lagosstate.gov.ng/blog/2021/04/29/sanwo-olu-moves-to-create-6000-jobs-as-lagos-adopts-waste-conversion/",
    },

    {
      imgSrc: Image3,
      headline: "LAWMA records impressive start to Lagos recycle initiative",
      subtext:
        "Following the commencement of the Lagos Recycle Initiative, geared towards addressing the menace of plastic pollution in the state.",
      imgAlt: "Recycle Truck",
      link: "https://www.ekohotblog.com/2021/03/01/176149/",
    },
    {
      imgSrc: Image3,
      imgAlt: "LAWMA GM",
      headline: "LAWMA’ll continue to improve on Waste Management Strategy",
      subtext:
        "“It is very important we move forward with the Lagos Recycle Initiative and continue to evolve our waste management...",
      link: "https://westernpostnigeria.com/lagos-recycle-we-must-continue-to-evolve-and-change-our-mindset-about-waste-lawma-md-odumboni-says-at-second-interactive-session/",
    },
  ];

  return (
    <>
      <div>
        <Hero />
        <Container>
          <CardContainer>
            {articles?.map((article, index) => (
              <Card {...article} key={index} />
            ))}
          </CardContainer>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default NewsMedia;
