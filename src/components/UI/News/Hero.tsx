import { useRouter } from "next/router";
import PageTab from "../../PageTab";
import NewsMedia from "./News&Media/index";
import PressRelease from "./PressRealease";
import Interviews from "./Interview";
import PublicationsPodcast from "./Pubs&Podcast";
import { HC, Texts, TabContainer } from "./styles";
import { Container } from "../../index";

const Hero = () => {
  interface PageModel {
    tab: string;
    component: any;
  }

  const pages: Array<PageModel> = [
    {
      tab: "News & Media ",
      component: <NewsMedia />,
    },

    {
      tab: "Press Release ",
      component: <PressRelease />,
    },

    {
      tab: "Interviews ",
      component: <Interviews />,
    },

    {
      tab: "Publications & Podcasts ",
      component: <PublicationsPodcast />,
    },
  ];

  return (
    <HC>
      <Texts>
        <Container>
          <h3>Latest Updates</h3>
          <h2>What the news is saying about us</h2>
        </Container>
      </Texts>
      <TabContainer>
        <PageTab
          pages={pages}
          prevLink="/"
          center={true}
          paddingBottom={true}
        />
      </TabContainer>
    </HC>
  );
};

export default Hero;
