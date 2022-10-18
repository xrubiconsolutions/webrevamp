import analytics from "./33810-payments.json";
import payment from "./86866-payment.json";
import thumbs from "./121028-one-line-drawing-like-icon.json";
import PSR from "/public/img/PSR.png";
import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import Paper from "/public/img/Paper.png";
import Business from "/public/img/Business.png";
import Pakam from "/public/img/Pakam.png";

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

interface EarnWasteModel {
  imgSrc: any;
  imgAlt: string;
  text: string;
  reverse: boolean;
}

interface EarnWasteContentModel {
  imgSrc: any;
  imgAlt: string;
  header1: string;
  header2: string;
  reverse: boolean;
  sub_text: Array<string>;
}

// Array<Record<string, any>>

interface KPIData {
  heading: string;
  text: string;
}

interface FeaturesModel {
  imgSrc: any;
  imgAlt: string;
  text: string;
}

export const earnarticles: Array<EarnWasteModel> = [
  {
    text: "Earn-as-You Waste is a recycling service that connects waste generators to waste collectors/aggregators in real time, ensuring individuals capture value for their waste. The Earn-as-You Waste mobile application includes a household app which enables household members (as an individual or commercial user like schools, businesses etc.) to schedule for a “pick-up”  or “drop-off” of their recyclable waste.The App features include multi-selection of waste categories, in-app chat with collectors, in-app direct to call, community chat, E-wallet, and learning resources on waste matters. With the Earn-as-You Waste App, users can easily sort their trash from source, schedule collection, and receive monetary value of this trash in their wallet. Users can simply transfer their  money directly to their bank accounts or donate to a charity of their choice. Experience a seamless flow while using your Earn-as-You Waste application.",
    imgAlt: "",
    imgSrc: PSR,
    reverse: false,
  },
];

export const earncontentarticles: Array<EarnWasteContentModel> = [
  {
    imgSrc: PSR,
    imgAlt: "pickup",
    header1: "Pickup Schedule Process",
    header2: "How It Works",
    sub_text: [
      "Download and install the app from Android play-store and/or IOS app-store",
      "Schedule waste pickup at a click from the mobile app.",
      "Have a recycler/collector routed to your location for waste pickup.",
      "Have a recycler/collector routed to your location for waste pickup.",
      "Earn a reward for every completed waste scheduled pickup",
      "Earn a reward for every completed waste scheduled pickup",
    ],
    reverse: false,
  },

  {
    imgSrc: PSR,
    imgAlt: "drop off",
    header1: "Drop off Schedule Process",
    header2: "How It Works",
    sub_text: [
      "Download and install the (Pakam Household Application) from goggle play store and/or IOS app store)",
      "Select your type of user (individual or commercial) and create account.",
      "Have a recycler/collector routed to your location for waste pickup.",
      "Sign In",
      "Select your type of user (individual or commercial) and create account.",
      "Choose waste category/categories and input the waste quantity in bags.",
      "Your E-wallet is credited as soon as the request is completed by the recycler. EARN-AS-YOU WASTE!!! Recycling made easy.",
    ],
    reverse: true,
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

export const KPIarticles: Array<KPIData> = [
  {
    heading: "Key Perfomance Improvement",
    text: "Provides a focus for strategic and operational improvement, by helping us create an analytical basis for decision making and help focus attention on what matters most.",
  },
];

export const KPIFeaturesInfo: Array<FeaturesModel> = [
  { imgSrc: GuyPickUpTrash, imgAlt: "trash", text: "Know your daily pickup" },
  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Reduce your service cost",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Provide world class service",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Reduce organization’s carbon footprint",
  },
  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Geo-fencing location and global positioning system",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Eliminate overfilling by collecting waste real time",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Send optimized route directly to truck drivers",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Get instant payment on geo payment scheme",
  },
];

export const Payarticles: Array<EarnWasteModel> = [
  {
    text: "Pay-as-You Waste is a full waste management application that enables citizens to properly dispose their non-recyclable and specialized waste to collectors. This service solves the day to day problem of delayed waste collection by PSP or waste management agencies. Pay-as-You Waste ensures an efficient and effective waste management system to eliminate the overflow of waste bins and environmental pollution in general. This service allows waste to be collected at just a click at an affordable pricing rate for  individuals and businesses. ",
    imgAlt: "",
    imgSrc: PSR,
    reverse: true,
  },
];

export const Smartarticles: Array<EarnWasteModel> = [
  {
    text: "The Pakam Smart Enforcement is an integrated environmental reporting platform that provides an enabling environment for the public to report environmental infractions to environmental agencies in a faste, better, and unified manner. It also allows the regulatory agencies to connect with the reporting public for easy access to all infractions reported.",
    imgAlt: "Pakam Smart Reinforcement",
    imgSrc: PSR,
    reverse: false,
  },
];

export const payContentarticles: Array<EarnWasteContentModel> = [
  {
    imgSrc: PSR,
    imgAlt: "pickup",
    header1: "",
    header2: "How It Works",
    sub_text: [
      "Download and install the (Pakam Waste Disposal)  from google play store and/or IOS app store.",
      "Select your type of user (household or commercial) and create an account.",
      "Have a recycler/collector routed to your location for waste pickup.",
      "Schedule for a waste (non-recyclable) pickup by entering the required information.",
      "A nearby collector will  accept your schedule and get routed to your                                                         location to complete the pickup.",
      "Your monthly bill invoice would be sent for payment.",
    ],

    reverse: false,
  },
];

export const smartContentarticles: Array<EarnWasteContentModel> = [
  {
    imgSrc: PSR,
    imgAlt: "pickup",
    header1: "",
    header2: "How It Works",
    sub_text: [
      "Download and install the (Pakam Waste Disposal)  from google play store and/or IOS app store.",
      "Select your type of user (household or commercial) and create an account.",
      "Have a recycler/collector routed to your location for waste pickup.",
      " Schedule for a waste (non-recyclable) pickup by entering the required information.",
      "A nearby collector will  accept your schedule and get routed to your                                                        location to complete the pickup.",
      "Your monthly bill invoice would be sent for payment.",
    ],
    reverse: false,
  },
];

export const kpiFeatures: Array<FeaturesModel> = [
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Geo fencing and global positioning",
  },
  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Send optimise routes directly to environmental agencies",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Provide world class service.",
  },
  {
    imgSrc: Pakam,
    imgAlt: "trash",
    text: "Reduce organization carbon footprint",
  },
];

export const payKpifeatures: Array<FeaturesModel> = [
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Provide world class service",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Reduce organization’s carbon footprint",
  },
  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Geo-fencing location and global positioning system",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Eliminate overfilling by collecting waste real time",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Send optimized route directly to truck drivers",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Get instant payment on geo payment scheme",
  },
  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Geo-fencing location and global positioning system",
  },
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Eliminate overfilling by collecting waste real time",
  },
];

export const payContentArticles: Array<KPIData> = [
  {
    heading: "Key Perfomance Improvement",
    text: "Provides a focus for strategic and operational improvement, by helping us create an analytical basis for decision making and help focus attention on what matters most.",
  },
];
