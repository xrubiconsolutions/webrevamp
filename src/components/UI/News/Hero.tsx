import { useRouter } from "next/router";
import PageTab from "../../PageTab";
import NewsMedia from "./News&Media/index";
import PressRelease from "./PressRealease";
import Interviews from "./Interview";
import PublicationsPodcast from "./Pubs&Podcast";
import { HC, Texts, TabContainer } from "./styles";

import BodyContainer from "../../BodyContainer/index";

export interface PageModel {
  tab: string;
  component: any;
}

const Hero = () => {
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

  const tabNo = 0;

  return (
    <HC>
      {/* <Texts>
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
      </TabContainer> */}
      <BodyContainer
        title=""
        smaller_title="What the news is saying about us"
        text="Latest Updates"
        tabNo={tabNo}
        pages={pages}
      />
    </HC>
  );
};

export default Hero;
