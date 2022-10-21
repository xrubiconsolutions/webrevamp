import { useRouter } from "next/router";
import PageTab from "../PageTab";
import NewsMedia from "./News&Media/index";
import PressRelease from "./PressRealease";
import Interviews from "./Interview";
import PublicationsPodcast from "./Pubs&Podcast";
import { HC, Texts } from "./styles";

const Hero = () => {
  const pages = [
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
      tab: "Publications and Podcasts ",
      component: <PublicationsPodcast />,
    },
  ];

  const location = useRouter();
  // const tabNo = location?.state?.tabNo;
  const tabNo = 0;

  return (
    <HC>
      <Texts>
        <h3>Latest Updates</h3>
        <h2>What the nes is saying about us</h2>
      </Texts>
      <PageTab
        tab={tabNo !== undefined ? tabNo : 0}
        title=""
        pages={pages}
        prevLink="/"
        center={true}
      />
    </HC>
  );
};

export default Hero;
