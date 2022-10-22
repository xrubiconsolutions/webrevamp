import { featured } from "../../../../utils/data";
import BannerSlide from "../../../BannerSlide";

const Featured = () => {
  return (
    <BannerSlide
      title="As featured in:"
      imgUrl={featured}
      classname="object-contain ml-2"
    />
  );
};

export default Featured;
