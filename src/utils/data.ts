import analytics from "./33810-payments.json";
import payment from "./86866-payment.json";
import thumbs from "./121028-one-line-drawing-like-icon.json";
interface TechnologyModel {
  imgUrl: any;
  title: string;
  text: string;
  link: string;
}
export const serve: Array<TechnologyModel> = [
  {
    imgUrl: "/svg/Group 625999.svg",
    title: "Citizens",
    text: "We are improving citizen engagement to waste management through waste on demand and incentivisation.. ",
    link: "Read more",
  },
  {
    imgUrl: "/svg/Group 625998.svg",
    title: "Business operators",
    text: "We are helping waste businesses to optimize their collection & operations.",
    link: "Read more",
  },
  {
    imgUrl: "/svg/Group 625997.svg",
    title: "Agencies",
    text: "We are helping government and it’s agencies to build data for insight, track inclusion and build resilience with smart reporting. ",
    link: "Read more",
  },
];
export const subscription: Array<TechnologyModel> = [
  {
    imgUrl: analytics,
    title: "Earn as you waste",
    text: ``,
    link: "Read more",
  },
  {
    imgUrl: payment,
    title: "Pay as you waste",
    text: "",
    link: "Read more",
  },
  {
    imgUrl: thumbs,
    title: "Smart Enforcement",
    text: " ",
    link: "Read more",
  },
];

export const support: Array<string> = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/C40 cities logo.png",
  "/img/Lagos state.png",
  "/img/Lasepa.png",
  "/img/Rethinking.png",
];

export const members: Array<string> = [
  "/img/Circular network.png",
  "/img/9.png",
  "/img/blob_a20d1134f2 1.png",
  "/img/8.png",
  "/img/Smart-cities-world-logo-2 1.png",
];
