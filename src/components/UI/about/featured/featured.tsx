import { featured } from "../../../../utils/data";
import BannerSlide from "../../../BannerSlide";

const Featured = () => {
  return <BannerSlide title="As featured in:" imgUrl={featured} />;
};

export default Featured;
