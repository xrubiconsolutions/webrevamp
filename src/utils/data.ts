import analytics from "./33810-payments.json";
import payment from "./86866-payment.json";
import thumbs from "./121028-one-line-drawing-like-icon.json";
import MorphingGreen from "./71506-shape-morphing-green.json";
import Technology from "./82661-technology.json";
import OpenUp from "./97262-open-up-dffs.json";
import SocialNetwork from "./91955-social-media-network.json";
import ProblemSolvingTeam from "./73386-problem-solving-team.json";

import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import PSR from "/public/img/PSR.png";
import Paper from "/public/img/Paper.png";
import Business from "/public/img/Business.png";
import Pakam from "/public/img/Pakam.png";
import Image1 from "/public/img/Image1.png";
import Image2 from "/public/img/Image2.png";
import Image4 from "/public/img/image53.png";
import Image5 from "/public/img/image53-1.png";
import Image6 from "/public/img/image56.png";
import Image7 from "/public/img/image57.png";
import Image8 from "/public/img/image28.png";
import Image9 from "/public/img/image31.png";
import Image10 from "/public/img/image28-2.png";
import Image11 from "/public/img/image28-1.png";
import Image12 from "/public/img/image28-3.png";
import Image13 from "/public/img/image28-4.png";
import Image14 from "/public/img/image31-2.png";
import Image15 from "/public/img/image31-3.png";
import Image16 from "/public/img/image31-4.png";
import PR from "/public/img/PressRelease.png";
import Interview1 from "/public/img/Interview1.png";
import Interview2 from "/public/img/Interview2.png";
import Interview3 from "/public/img/Interview3.png";
import Pub1 from "/public/img/Pub1.png";
import Pub2 from "/public/img/Pub2.png";
import Pub3 from "/public/img/Pub3.png";
import Group from "/public/img/GRealease.png";
import EP from "/public/img/EarnPay.png";
import Dashboard from "/public/img/DashboardScreen.png";
import PayDash from "/public/img/PayDashboard.png";
import PayContent from "/public/img/PayContent.png";
import PayPhone from "/public/img/PayPhone.png";
import SmartPhone from "/public/img/SmartPhone.png";
import EarnPhone from "/public/img/EarnPhone.png";
import Route from "/public/img/route.png";
import Globe from "/public/img/globe.png";
import GlobeEU from "/public/img/globeEu.png";
import BusWoman from "/public/img/BusinessWoman.png";
import SmartRF from "/public/img/SmartRF.png";

export interface TechnologyModel {
  imgUrl?: any;
  title?: string;
  text?: string;
  link?: string;
  description?: string;
  isTitle?: boolean;
  linkUrl?: string;
}

export const serve: Array<TechnologyModel> = [
  {
    imgUrl: "/svg/Group 625999.svg",
    title: "Citizens",
    text: "We are improving citizen engagement to waste management through waste on demand and incentivisation.. ",
    link: "Read more",
    linkUrl: "/serve/citizens",
  },
  {
    imgUrl: "/svg/Group 625998.svg",
    title: "Business operators",
    text: "We are helping waste businesses to optimize their collection & operations.",
    link: "Read more",
    linkUrl: "/serve/business-operators",
  },
  {
    imgUrl: "/svg/Group 625997.svg",
    title: "Agencies",
    text: "We are helping government and it’s agencies to build data for insight, track inclusion and build resilience with smart reporting. ",
    link: "Read more",
    linkUrl: "/serve/agencies",
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
export const whatwedo: Array<TechnologyModel> = [
  {
    imgUrl: "/img/Reduced operational cost.png",
    title: "Ecosystem technology platform for waste ",
  },
  {
    imgUrl: "/img/coins.png",
    title: "Waste managemenet consultancy",
  },
  {
    imgUrl: "/img/entypo_news.png",
    title: "Data Provision",
  },
  {
    imgUrl: "/img/Better Revenue Assurance.png",
    title: "Building and deploying waste management infrastructure",
  },
];

interface EarnWasteModel {
  imgSrc: any;
  imgAlt: string;
  text: string;
  reverse: boolean;
}

export interface EarnWasteContentModel {
  imgSrc: any;
  imgAlt: string;
  header1: string;
  header2: string;
  reverse: boolean;
  sub_text: Array<string>;
}

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
    text: "Earn-as-You Waste is a recycling service that connects waste generators to waste collectors/aggregators in real time, ensuring individuals capture value for their waste. The Earn-as-You Waste mobile application includes a household app which enables household members (as an individual or commercial user like schools, businesses etc.) to schedule for a “pick-up” or “drop-off” of their recyclable waste. With the Earn-as-You Waste App, users can easily sort their trash from source, schedule collection, and receive monetary value of this trash in their wallet. Experience a seamless flow while using your Earn-as-You Waste application.",
    imgAlt: "",
    imgSrc: EP,
    reverse: false,
  },
];

export const earncontentarticles: Array<EarnWasteContentModel> = [
  {
    imgSrc: EP,
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
    imgSrc: EarnPhone,
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
    reverse: false,
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
  {
    imgSrc: GuyPickUpTrash,
    imgAlt: "trash",
    text: "Know your daily pickup",
  },
  {
    imgSrc: Business,
    imgAlt: "trash",
    text: "Reduce your service cost",
  },
  {
    imgSrc: Globe,
    imgAlt: "trash",
    text: "Provide world class service",
  },
  {
    imgSrc: Pakam,
    imgAlt: "trash",
    text: "Reduce organization’s carbon footprint",
  },

  {
    imgSrc: Paper,
    imgAlt: "trash",
    text: "Eliminate overfilling by collecting waste real time",
  },

  {
    imgSrc: Route,
    imgAlt: "trash",
    text: "Send optimized route directly to truck drivers",
  },

  {
    imgSrc: BusWoman,
    imgAlt: "trash",
    text: "Get instant payment on geo payment scheme",
  },
  {
    imgSrc: GlobeEU,
    imgAlt: "trash",
    text: "Geo-fencing location and global positioning system",
  },
];

export const Payarticles: Array<EarnWasteModel> = [
  {
    text: "Pay-as-You Waste is a full waste management application that enables citizens to properly dispose their non-recyclable and specialized waste to collectors. This service solves the day to day problem of delayed waste collection by PSP or waste management agencies. Pay-as-You Waste ensures an efficient and effective waste management system to eliminate the overflow of waste bins and environmental pollution in general. This service allows waste to be collected at just a click at an affordable pricing rate for  individuals and businesses. ",
    imgAlt: "",
    imgSrc: PayDash,
    reverse: true,
  },
];

export const Smartarticles: Array<EarnWasteModel> = [
  {
    text: "The Pakam Smart Enforcement is an integrated environmental reporting platform that provides an enabling environment for the public to report environmental infractions to environmental agencies in a faste, better, and unified manner. It also allows the regulatory agencies to connect with the reporting public for easy access to all infractions reported.",
    imgAlt: "Pakam Smart Reinforcement",
    imgSrc: SmartRF,
    reverse: false,
  },
];

export const payContentarticles: Array<EarnWasteContentModel> = [
  {
    imgSrc: PayPhone,
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
    imgSrc: SmartPhone,
    imgAlt: "pickup",
    header1: "",
    header2: "How It Works",
    sub_text: [
      "Download and install the Pakam User from google play store and/or IOS app store.",
      "Create an account to gain access into the app",
      "Have a recycler/collector routed to your location for waste pickup.",
      " Click on the 'report request' to make a ive video of any environmental incident happening around you ",
      "A nearby collector will  accept your schedule and get routed to your                                                        location to complete the pickup.",
      "Your monthly bill invoice would be sent for payment.",
    ],
    reverse: false,
  },
];

export const kpiFeatures: Array<FeaturesModel> = [
  {
    imgSrc: GlobeEU,
    imgAlt: "trash",
    text: "Geo fencing and global positioning",
  },
  {
    imgSrc: Route,
    imgAlt: "trash",
    text: "Send optimise routes directly to environmental agencies",
  },
  {
    imgSrc: Globe,
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
export const faqs: Array<TechnologyModel> = [
  {
    text: "How much are pet bottles sold per KG?",
    description:
      "Price is not fixed, it varies based on location and Recyclers.",
  },
  {
    text: "Do we operate outside Lagos?",
    description:
      "No. Now we are fully functioning in Lagos but looking at expanding to other states and countries soonest.",
  },
  {
    text: "How do I register on the app and setup a new schedule?",
    description:
      "Download the App from Playstore or Apple store, create an account using your Name, Phone Number and Password, verify your phone number inputting the OTP sent to the phone number used when creating the account, once you are verified login into App click on Schedule pickup button to request for a pickup when you have recyclable waste.",
  },
  {
    text: "What’s the least number of bags one can have before  requesting a pickup?",
    description: "One bag",
  },
  {
    text: "Minimum KG that can be picked?",
    description: "I KG",
  },
  {
    text: "How much do I need to have in my wallet to request a payout?",
    description: "#5000",
  },
  {
    text: "Prices of all recyclables per KG?",
    description:
      "Prices Varies based on Location and Recycler allocated for Pickup.",
  },
  {
    text: "What type of recyclable products do we pick up?",
    description:
      "Can, bottles, Tyres, Paper, Plastic, Pet Bottles, Nylon, rubber, Metals, Wood.        ",
  },
  {
    text: "Do we charge for pick-ups?",
    description: "No, pickup is free.",
  },
  {
    text: "Is it only Drink cans we pick up or all other types of cans?",
    description: "All cans that can be recycled.",
  },
  {
    text: "Do you accept waste like microwaves, washing machines and pumping machines?",
    description:
      "Those are E-waste, and we are working on collecting further information and this will be communicated.",
  },
  {
    text: "How do I register on the app and setup a new schedule?",
    description:
      "Download the App from Playstore or Apple store, create an account using your Name, Phone Number and Password, verify your phone number inputting the OTP sent to the phone number used when creating the account, once you are verified login into App click on Schedule pickup button to request for a pickup when you have recyclable waste.",
  },
  {
    text: "Can I bring my recyclable waste myself instead of waiting for pickup?",
    description:
      "Yes. We have a drop-off feature that allows you to choose the closest drop-off centre where you can weigh and drop your recycled waste..",
  },
];

export const solutions: Array<TechnologyModel> = [
  {
    isTitle: true,
    title: "Problems we are solving",
  },
  {
    isTitle: false,
    imgUrl: "/img/Waste sorting.png",
    title: "Disposal of Waste",
    text: "Reckless disposal of waste that clogs drainages causes flooding, transmit diseases, harm life on land, and below the sea. ",
  },
  {
    isTitle: false,
    imgUrl: "/img/SheetpaperTrash.png",
    title: "Delay in waste collection",
    text: "Delay in waste collection which leads to the overflow of their waste bin and comes with attendant health issues. ",
  },
  {
    isTitle: false,
    imgUrl: "/img/Payment failed.png",
    title: "Payment",
    text: "Payment & cost recovery challenge in waste management ecosystem ",
  },
  {
    isTitle: false,
    imgUrl: "/img/Inclusive Education.png",
    title: "Poor Inclusion",
    text: "Poor inclusion (gender, financial, technology, status)",
  },
  {
    isTitle: false,
    imgUrl: "/img/looking through resumes.png",
    title: "Unemployment",
    text: "Unemployement for youth and undergraduates",
  },
];

export const impact: Array<TechnologyModel> = [
  {
    imgUrl: "/img/footprint.png",
    text: "Reduce carbon footprint with use of tricycles and smart cart",
  },
  {
    imgUrl: "/img/Wind power.png",
    text: "Empowering communities by creating decent job above national minimum wage.",
  },
  {
    imgUrl: "/img/Proper disposal of garbage.png",
    text: "Diverting clean sorted materials from landfill & water bodies thus increasing post-consumer material value",
  },
  {
    imgUrl: "/img/Save our planet.png",
    text: "Empowering ecosystem business operators to strive even in the unavailability of resources.",
  },
  {
    imgUrl: "/img/SheetpaperTrash.png",
    text: "Securing constant post-consumer materials for aggregators. ",
  },
  {
    imgUrl: "/img/Savings.png",
    text: "Creating wealth for generating households and informal waste pickers.",
  },
];
export const SDGImageArray = [
  [
    {
      image: "/svg/no_poverty.svg",
      alt: "no_poverty",
    },
    {
      image: "/svg/reduced_inequalities.svg",
      alt: "reduced_inequalities",
    },
  ],
  [
    {
      image: "/svg/zero_hunger.svg",
      alt: "zero_hunger",
    },
    {
      image: "/svg/sustainable_cities.svg",
      alt: "sustainable_cities",
    },
  ],
  [
    {
      image: "/svg/good_health.svg",
      alt: "good_health",
    },
    {
      image: "/svg/climate_action.svg",
      alt: "climate_action",
    },
  ],
  [
    {
      image: "/svg/clean_water.svg",
      alt: "clean_water",
    },
    {
      image: "/svg/life_below.svg",
      alt: "life_below",
    },
  ],
  [
    {
      image: "/svg/decent_work.svg",
      alt: "decent_work",
    },
    {
      image: "/svg/life_on.svg",
      alt: "life_on",
    },
  ],
  [
    {
      image: "/svg/industry_innovation.svg",
      alt: "industry_innovation",
    },
    {
      image: "/svg/partnership.svg",
      alt: "partnership",
    },
  ],
];

export const SDGImageModalValue = {
  no_poverty: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553158/E_GIF_01_dn4czh.gif",
    title: "No Poverty",
    subtitle:
      "Pakam technology solution ensures low-income communities can earn a living and uplift their economic benefit by recycling.",
  },
  reduced_inequalities: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641552717/E_GIF_10_ed6s5s.gif",
    title: "Reduced Inequalities",
    subtitle:
      "Pakam is reducing gender inequalities through partnership with aggregators by ensuring that more women are in the process of sort and earning a living from waste processing and sorting. ",
  },
  zero_hunger: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553219/E_GIF_02_mudavg.gif",
    title: "Zero Hunger",
    subtitle:
      "Pakam technology is ensuring that anybody can feed by providing a cleaner environment.  ",
  },
  sustainable_cities: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641552780/E_GIF_11_fdrjva.gif",
    title: "Sustainable Cities & Communities",
    subtitle:
      "Pakam technology innovation and other collaborative solutions of recycling, composting, incineration, and bio-digester will change waste management forever and create a sustainable environment for all. ",
  },
  good_health: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553269/E_GIF_03_rcg1zj.gif    ",
    title: "Good Health & Well Being",
    subtitle:
      "Pakam technology solution contributes to good health by ensuring cleaner & healthier environment through proper disposal of waste from the comfort of homes & offices.",
  },
  climate_action: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641552872/E_GIF_13_ksrzyy.gif",
    title: "Climate Action",
    subtitle:
      "Pakam Smart city innovation is helping city officials and climate NGOs to create real-time action that protects the environment and reduces climate impact.",
  },
  clean_water: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553304/E_GIF_06_rdov8w.gif",
    title: "Clean Water & Sanitation",
    subtitle:
      "Pakam technology ensures environmental protection by reporting in real-time - indiscriminate dumping of waste in waters and drainages.",
  },
  life_below: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641552972/E_GIF_14_dxjgik.gif",
    title: "Life Below Water",
    subtitle:
      "Pakam aims to ensure waste collection from the source increases exponentially from 20% to 100% by eliminating material escape in water and oceans.",
  },
  decent_work: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641552972/E_GIF_14_dxjgik.gif",
    title: "Decent Work & Economic Growth",
    subtitle:
      "Pakam model is aimed to create jobs for the informal sector through technology innovation and collaborative incentives. The aim is to change public perception of waste pickers and waste collectors.",
  },
  life_on: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553071/E_GIF_15_imvwea.gif",
    title: "Life On Land",
    subtitle:
      "Pakam aims at reducing and eliminating illegal dumping of waste on roadsides and dump-site, thus reducing plant, animal, and human exposure to hazardous substances.",
  },
  industry_innovation: {
    modalalt: "",
    url: " https://res.cloudinary.com/codeinstd/image/upload/v1641552593/E_GIF_09_xz2dow.gif",
    title: "Industry, Innovation & Infrastructure",
    subtitle:
      "Adopting Zero waste solution with technology innovation and collaboration, Pakam is building a sustainable industry & infrastructure that will transform people’s live, sustain our planet and generate profit for stakeholders.",
  },
  partnership: {
    modalalt: "",
    url: "https://res.cloudinary.com/codeinstd/image/upload/v1641553139/E_GIF_17_ejuc36.gif",
    title: "Partnership For The Goals",
    subtitle:
      "Pakam's core value hinges on partnership and collaboration with local & international businesses.",
  },
};

export const values = [
  {
    imgUrl: ProblemSolvingTeam,
    text: "Collaboration.",
  },
  {
    imgUrl: OpenUp,
    text: "Openness.",
  },
  {
    imgUrl: MorphingGreen,
    text: "Ownership.",
  },
  {
    imgUrl: SocialNetwork,
    text: "Social Impact",
  },
  {
    imgUrl: Technology,
    text: "Innovation.",
  },
];

export const awards = [
  "/img/ITU.png",
  "/img/oxford.png",
  "/img/wamson.png",
  "/img/Waste_forum.png",
  "/img/fabe.png",
  "/img/nia.png",
  "/img/fmdo.png",
  "/img/Uplink.png",
];
export const featured = [
  "/img/Thecable.png",
  "/img/Eko_Hot.png",
  "/img/The_Guardian.png",
  "/img/Waste_forum.png",
  "/img/bhm.png",
  "/img/Western_Post.png",
  "/img/Vanguard.png",
];

interface NewsMediaModel {
  imgSrc: any;
  imgAlt: string;
  headline: string;
  subtext: string;
  link: string;
  info: { imgSrc: any; text: string }[];
  dates: { imgSrc: any; text: string }[];
  bg?: boolean;
  color?: boolean;
  decoration?: boolean;
}

export const NewsMediaArticles: Array<NewsMediaModel> = [
  {
    imgSrc: Image4,
    headline:
      "LAWMA to commence prosecution of resident without wastebin in october",
    subtext:
      " The Lagos State Waste Management Authority (LAWMA) has pledged to commence prosecution of households without waste bins in the state from October 1, 2022.  ",
    imgAlt: "Pakam",
    link: "https://guardian.ng/news/lawma-to-commence-prosecution-of-residents-without-waste-bin-in-october/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 20, 2022",
      },
    ],
  },

  {
    imgSrc: Image5,
    headline: "Lagos Without traffic pollution ",
    subtext:
      " Two hundred thousand tons of waste produced in Nigeria ends up in the ocean every year, according to estimates by the World Economic Forum.",
    imgAlt: "Pakam",
    link: "https://www.africarivista.it/lagos-senza-inquinamento-da-plastica/206849/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 14, 2022",
      },
    ],
  },

  {
    imgSrc: Image6,
    headline: '"Pakam" the mobile application for waste recycling in Lagos',
    subtext:
      'While plastic pollution affects the soil and water bodies in Nigeria, the government of this West African country is encouraging the start-up Pakam Technology whose mobile application "Pakam" has been contributing...',
    imgAlt: "Pakam",
    link: "https://www.afrik21.africa/en/nigeria-pakam-the-mobile-application-for-waste-recycling-in-lagos/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 13, 2022",
      },
    ],
  },

  {
    imgSrc: Image7,
    headline: "Waste managers in Nigeria meets, address recycling",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.youtube.com/watch?v=PJd7CL9i0o4",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 12, 2022",
      },
    ],
  },

  {
    imgSrc: Image8,
    headline:
      "LAWMA sets to make household ownership of wastebin mandatory by october 1st",
    subtext:
      "Lagos Waste Management Authority (LAWMA) has stated poise to ensure all households across the state own waste bins by October 1st as the agency celebrates the 3rd anniversary of the Lagos Recycle Initiative.",
    imgAlt: "Pakam",
    link: "https://nationaldailyng.com/lawma-set-to-make-households-ownership-of-waste-bin-mandatory-by-october-1st/?utm_source=rss&utm_medium=rss&utm_campaign=lawma-set-to-make-households-ownership-of-waste-bin-mandatory-by-october-1st",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 10, 2022",
      },
    ],
  },

  {
    imgSrc: Image9,
    headline: "LAWMA marks 3rd anniversary of recyclers initiative",
    subtext:
      "Lagos Waste Management Authority (LAWMA) has celebrated the 3rd anniversary of the Lagos Recycle Initiative, launched three years ago, to introduce waste sorting at source for recycling purposes, to tackle the challenge of plastic...",
    imgAlt: "Pakam",
    link: "https://thegeniusmedia.com.ng/2022/09/10/lawma-marks-3rd-anniversary-of-lagos-recycle-initiative/?utm_source=rss&utm_medium=rss&utm_campaign=lawma-marks-3rd-anniversary-of-lagos-recycle-initiative",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 10, 2022",
      },
    ],
  },

  {
    imgSrc: Image10,
    headline: "Lagos sets pace in turning trash to treasure",
    subtext:
      "The Lagos State Government has said it will alleviate poverty by using waste recycling processes to create jobs for women across the state",
    imgAlt: "Pakam",
    link: "https://businessday.ng/energy/article/lagos-sets-pace-in-turning-trash-to-treasure/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "June 21, 2022",
      },
    ],
  },

  {
    imgSrc: Image11,
    headline: "Waste recycling will create job for women",
    subtext:
      "From creating local equipment to aid waste disposal to forming partnerships with the private sector, Lagos State is setting up a winning model on how to formalise waste...",
    imgAlt: "Pakam",
    link: "https://www.thisdaylive.com/index.php/2021/11/12/dr-dolapo-fasawe-making-case-for-the-environment-at-cop26-through-lasepa/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "March 23, 2022",
      },
    ],
  },

  {
    imgSrc: Image12,
    headline: "From trash to cash",
    subtext:
      "“Many corporations have reengineered their operations to minimise their environmental impact... ",
    imgAlt: "Pakam",
    link: "https://thenationonlineng.net/from-trash-to-cash/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "November 16, 2021",
      },
    ],
  },

  {
    imgSrc: Image7,
    headline: "Recycling enthusiast avocate change in waste disposal",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.youtube.com/watch?v=iUyFA-aplgk",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "Oct 4, 2021",
      },
    ],
  },

  {
    imgSrc: Image13,
    headline:
      "Graduate of economics wins $3,500 Ekoclimation prize for innovation in fertiliser",
    subtext:
      "Adegoke Adewale, a graduate of Economics from the University of Ado Ekiti, and his team on Friday emerged the first position winner with $3,500 prize at the final contest...",
    imgAlt: "Pakam",
    link: "https://tribuneonlineng.com/graduate-of-economics-wins-3500-ekoclimathon-prize-for-innovation-in-fertiliser/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "September 13, 2022",
      },
    ],
  },

  {
    imgSrc: Image1,
    headline:
      "Dr. Dolapo Fasawe: Making Case for the Environment at COP2 6 through LASEPA",
    subtext:
      "With Dr. Dolapo Fasawe as the general manager, the agency has grown in leaps and bounds since she assumed office on August 19, 2019.",
    imgAlt: "Lasepa GM",
    link: "https://www.thisdaylive.com/index.php/2021/11/12/dr-dolapo-fasawe-making-case-for-the-environment-at-cop26-through-lasepa/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "August 19, 2021",
      },
    ],
  },

  {
    imgSrc: Image2,
    headline:
      "Sanwo-Olu moves to create 6,000 jobs as lagos adopts waste conversion",
    subtext:
      "Lagos State is transiting from traditional waste management to conversion of waste materials – an innovation that is projected to generate 6,000 jobs.",
    imgAlt: "Babajide Sanwo-olu",
    link: "https://lagosstate.gov.ng/blog/2021/04/29/sanwo-olu-moves-to-create-6000-jobs-as-lagos-adopts-waste-conversion/",

    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "August 19, 2021",
      },
    ],
  },

  {
    imgSrc: Image14,
    headline: "Lawma records, impressive to Lagos recycle initiative ",
    subtext:
      "Following the commencement of the Lagos Recycle Initiative, geared towards addressing the menace of plastic pollution in the state.",
    imgAlt: "Pakam",
    link: "hhttps://www.ekohotblog.com/2021/03/01/176149/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "August 17, 2021",
      },
    ],
  },

  {
    imgSrc: Image15,
    headline: "Lawma continues to improve on waste mangement strategy. ",
    subtext:
      "It is very important we move forward with the Lagos Recycle Initiative and continue to evolve our waste management...",
    imgAlt: "Pakam",
    link: "https://westernpost.ng/ ",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "August 15, 2021",
      },
    ],
  },

  {
    imgSrc: Image16,
    headline:
      "Lagos showcase 102 trucks, 100 locally assembled bins to tackle waste ",
    subtext:
      "“Worried by resurgence of refuse in Lagos, the State Government, yesterday, unveiled 102 new truck waste collectors and 100 bins to improve waste collection in the metropolis..",
    imgAlt: "Pakam",
    link: "https://www.thisdaylive.com/index.php/2021/11/12/dr-dolapo-fasawe-making-case-for-the-environment-at-cop26-through-lasepa/",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "August 5, 2021",
      },
    ],
  },
];

export const PressRelase: Array<NewsMediaModel> = [
  {
    imgSrc: Group,
    headline: "Lawma countinues to improve on waste mangement strategy.",
    subtext:
      " “It is very important we move forward with the Lagos Recycle Initiative and continue to evolve our waste management...",
    imgAlt: "Pakam",
    link: "",
    info: [
      {
        imgSrc: "/img/LightUser.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/LightDiscovery.png",
        text: "October,2021",
      },
    ],
    bg: true,
    color: true,
    decoration: true,
  },
];

export const InterviewData: Array<NewsMediaModel> = [
  {
    imgSrc: Interview1,
    headline:
      "Cleaning up Lagos: How a startup is turning waste into a scarce resources that you and i will beg for one day.",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.linkedin.com/pulse/cleaning-up-lagos-how-nigerian-startup-turning-waste-/?trackingId=3OGTtNddjUDMAKuE8%2BzXhw%3D%3D",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "October,2021",
      },
    ],
  },

  {
    imgSrc: Interview2,
    headline: "Recycle and Make Money",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.youtube.com/watch?v=5e8S_93xk1g",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "June 30,2021",
      },
    ],
  },
  {
    imgSrc: Interview3,
    headline: "LAWMA Rewards Recyclers, Encourages Others",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.youtube.com/watch?v=6BEYg3-g47I",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "May 30,2021",
      },
    ],
  },
];

export const PublicationData: Array<NewsMediaModel> = [
  {
    imgSrc: Pub2,
    headline: "Circularity in Nigeria",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83N2RhMzE2OC9wb2RjYXN0L3Jzcw/episode/NGRjMDQzM2QtN2M1MS00NDBhLWJlMjctOGFiZTRiNzA4YWE5?ep=14",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "July 20,2021",
      },
    ],
  },
  {
    imgSrc: Pub3,
    headline: "Plastic polution: Can recycling help save Lagos?",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.youtube.com/watch?v=nj0maJU-0vA",
    info: [
      {
        imgSrc: "/img/user.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/Discovery.png",
        text: "July 20,2021",
      },
    ],
  },
  {
    imgSrc: Pub1,
    headline: "Waste management in Lagos: The realities?",
    subtext: "",
    imgAlt: "Pakam",
    link: "https://www.thisdaylive.com/index.php/2021/11/12/dr-dolapo-fasawe-making-case-for-the-environment-at-cop26-through-lasepa/",
    info: [
      {
        imgSrc: "/img/LightUser.png",
        text: "Pakam",
      },
    ],
    dates: [
      {
        imgSrc: "/img/LightDiscovery.png",
        text: "October,2021",
      },
    ],
    // bg: true,
    // color: true,
    // decoration: false,
  },
];

export interface ReviewData {
  name: string;
  role: string;
  content: string;
}

export const Review: Array<ReviewData> = [
  {
    name: "Hodok Orok",
    role: "Household User",
    content:
      "I had these two bags of plastic waste in my backyard for quite a long, long time now hoping to get a local recycler to come and pick them up. Then i heard of @pakam-ng, an initiative of the Lagos State Govt. @moelagos @lawma-gov. I called Mr. T @adewole-taiwo who explained to me how the Pakam app works and last week, I requested a pick-up and the response was swift.",
  },

  {
    name: "Micheal Ogunleye",
    role: "Household User",
    content: "I recommend for every household",
  },

  {
    name: "Micheal Ogunleye",
    role: "Household User",
    content:
      "Once you schedule they will always find you to pickup. Very fast, efficient and reliable. I recommend for every household.",
  },

  {
    name: "Godwin Felix",
    role: "Household User",
    content: "Good App",
  },

  {
    name: "Taiwo Agbesin",
    role: "Household User",
    content: "Good App, it satifies my actions",
  },

  {
    name: "Jadesola Samuel",
    role: "Household User",
    content:
      "This is the best sustinable app I’ve ever seen. Quality services. Keep up the good work",
  },

  {
    name: "Godwin Felix",
    role: "Household User",
    content: "A very welcoming innovation",
  },

  {
    name: "Oluwatobi Asala",
    role: "Household User",
    content: "Superb",
  },
];

export const citizens = {
  id: "0",
  img: "/img/Group 626021.png",
  imgStart: "",
  header: "Citizens.",
  // title: "",
  text: "Pakam aims to improve citizens engagement in  waste management through waste on-demand solutions and incentivisation, allowing citizens the opportunity to make sense of their waste either through our Earn-as-You Waste (Pakam Recycling) or Pay-as-You Waste (Pakam Waste Disposal) eco-system application.    ",
};

export const businessOperators = {
  id: "1",
  img: "/img/Group 626067.png",
  imgStart: "start",
  title: "Business Operators.",
  text: "Pakam aims to enable the waste management ecosystem businesses by optimizing their collections and operations to ensure a seamless business transaction flow. We help business operators to monitor their assets, track material collection, connect waste materials from generators to collectors, pre-processor, processors, and treatment facilities, e.t.c. We also offer real-time business insight for businesses to operate in a better and competitive environment. Our solution allows businesses in the recycling eco-system to build a stable and sustainable material collection flow directly from source thus increasing value for materials across the value chain. Furthermore, we are creating value for businesses to ensure a seamless cash flow for materials transactions. Our solution has  created a unique  avenue for collectors within the ecosystem to get access to necessary support such as logistics, infrastures etc from investors, industry captains and the government.",
};
export const agencies = {
  id: "2",
  img: "/img/group-afro-americans-working-together 1.png",
  imgStart: "",
  header: "Agencies.",
  text: "Pakam is proffering solutions for the government and its agencies to build data for insight, track inclusion and build resilience through our smart enforcement and reporting platform. Through our analytic data insight, we are able to empower smart city solutions. Through Pakam, agencies are able to ensure proper guidance for optimum performance within the ecosystem. We are aimed at providing avenues for government agencies  to play an active role in smart city development with system driven innovations. ",
};

export const contact = [
  {
    title: "Send Us a message ",
    text: "We would love to talk about how we can work together ",
    link: "Contact Support",
  },
  {
    title: "Have Question? ",
    text: "Explore our help desk for quick answers to your question  ",
    link: "View help desk",
  },
  {
    title: "Media and Press ",
    text: "Get the lastest news and updates about our company and products   ",
    link: "View help desk",
  },
];
export const contact2 = [
  {
    title: "Office Addresss",
    text: "127E, Ogunlana drive, surulere, Lagos State ",
    // links: ["/img/facebook.png", "/img/instagram.png", "/img/twitter.png"],
  },
  {
    title: "Support Mail ",
    text: "info@pakam.ng",
    // links: ["/img/facebook.png", "/img/instagram.png", "/img/twitter.png"],
  },
  {
    title: "Phone Number",
    text: "+234 - 912 261 6778 \n +234 - 708 664 6637",
    // links: ["/img/facebook.png", "/img/instagram.png", "/img/twitter.png"],
  },
  {
    title: "Socials",
    links: [
      "/img/facebookGreen.png",
      "/img/instagramGreen.png",
      "/img/twitterGreen.png",
      "/img/whatsappGreen.png",
    ],
  },
];
