import { members } from "../../../utils/data";
import BannerSection from "../../BannerSection";

const Members = () => {
  return (
    <BannerSection
      title="WE ARE MEMBERS OF."
      imgUrl={members}
      classname="object-contain"
      width={240}
      height={50}
    />
  );
};

export default Members;
