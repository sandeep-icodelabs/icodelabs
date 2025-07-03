import React from "react";
import MarketPlaceHeroSection from "../CommonComponents/MarketPlaceHeroSection/MarketPlaceHeroSection";
import ImgNFullImage, {
  CTASection,
  FeatureSectionGrid,
  GridCardWrapper,
  IconTable,
  ImageNcarousel,
  ImgNcontentHorizontal,
  ImgNcontentVertical,
} from "../CommonComponents/ImageNContentSection/ImageNContentSection";

export default function pages() {
  return (
    <div>
      {" "}
      <MarketPlaceHeroSection data={heroData} />
      <ImgNcontentVertical data={whatIsRental} />
      <CTASection data={ctaData} />
      <ImgNcontentHorizontal data={whoIsItFor} />
      <GridCardWrapper data={keyFeatureData} ctaRequired={true} />
      <IconTable data={iconTable} />
      <FeatureSectionGrid data={FeatureSectionGridData} />
      <ImageNcarousel data={ImageNcarouselData} />
      <ImgNFullImage data={ImgNFullImageData} />
    </div>
  );
}

const heroData = {
  title: "Power a Platform Where People Find, Book, and Trust Services",
  content: `From on-demand beauty professionals to local handymen and online coaching, we help you build modern service marketplaces that are intuitive, scalable, and AI-ready.`,
  btnLink: "",
  btnText: "Get a Quote",
};

const whatIsRental = {
  title: "What is a Service Marketplace?",
  para: `A service marketplace connects customers with professionals who offer services—either in person or online.`,
  // img: "/assests/img/whatisrentalMarketplace.png",
  // width: "1394",
  // height: "646",
};

const ctaData = {
  title: "We’ll Build a Custom Web & Mobile App Solution for You.",
  content:
    "A fashion and lifestyle rental marketplace allows individuals and businesses to rent out clothing, accessories, and lifestyle items",
  btnLink: "#",
};

const whoIsItFor = [
  {
    img: "/assests/img/blank.png",
    title: "Entrepreneurs launching gig platforms",
    content:
      "Our solutions boast intuitive interfaces, ensuring smooth browsing, booking, and management experiences, empowering users to effortlessly engage in renting and lending within the vibrant fashion industry.",
  },
  {
    img: "/assests/img/blank.png",
    title: "Startups building niche service apps",
    content:
      "Our solutions boast intuitive interfaces, ensuring smooth browsing, booking, and management experiences, empowering users to effortlessly engage in renting and lending within the vibrant fashion industry.",
  },
  {
    img: "/assests/img/blank.png",
    title: "Agencies digitizing services",
    content:
      "Our solutions boast intuitive interfaces, ensuring smooth browsing, booking, and management experiences, empowering users to effortlessly engage in renting and lending within the vibrant fashion industry.",
  },
  {
    img: "/assests/img/blank.png",
    title: "Peer-to-peer communities",
    content:
      "Our solutions boast intuitive interfaces, ensuring smooth browsing, booking, and management experiences, empowering users to effortlessly engage in renting and lending within the vibrant fashion industry.",
  },
];

const keyFeatureData = [
  {
    title: "Multi-step Service Creation",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Provider Profiles",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "blue",
    img: "/assests/img/blank.png",
  },
  {
    title: "Booking Calendar",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "green",
    img: "/assests/img/blank.png",
  },
  {
    title: "Dynamic Pricing",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "green",
    img: "/assests/img/blank.png",
  },
  {
    title: "Search & Filter",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "peach",
    img: "/assests/img/blank.png",
  },
  {
    title: "Split Payments",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "blue",
    img: "/assests/img/blank.png",
  },
  {
    title: "Cancellation Policies",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "blue",
    img: "/assests/img/blank.png",
  },
  {
    title: "Ratings & Reviews",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    color: "green",
    img: "/assests/img/blank.png",
  },
];

const iconTable = [
  {
    img: "",
    title: "Cronofy",
  },
  {
    img: "",
    title: "Agora",
  },
  {
    img: "/assests/logo/markeplaceIcons/stripe.svg",
    title: "Stripe Payments",
  },
  {
    img: "/assests/logo/markeplaceIcons/sendgrid.svg",
    title: "SendGrid",
  },
  {
    img: "/assests/logo/markeplaceIcons/onesignal.svg",
    title: "OneSignal",
  },
  {
    img: "/assests/logo/markeplaceIcons/Mixpanel.svg",
    title: "Mixpanel",
  },
  // {
  //   img: "/assests/logo/markeplaceIcons/Cloudinary.svg",
  //   title: "Cloudinary",
  // },
  {
    img: "/assests/logo/markeplaceIcons/algolia.svg",
    title: "Algolia",
  },
  {
    img: "",
    title: "Google Calendar",
  },
  {
    img: "",
    title: "Zoom",
  },
  {
    img: "",
    title: "PostHog",
  },
  {
    img: "",
    title: "ID Verification APIs",
  },
  {
    img: "",
    title: "Other",
  },
];

const FeatureSectionGridData = [
  {
    cardTwo: {
      title: "Smart Matching Engine",
      img: "",
    },

    cardThree: {
      title: "AI Reminder Bot",
      subHeading: (
        <>
          <span>Provides instant, intelligent </span>responses to user queries,
        </>
      ),
      img: "",
    },

    cardFour: {
      title: "AI Chatbot Support",
      img: "/assests/img/gradientRobot.svg",
    },

    cardFive: {
      title: "NLP Review Analysis",
      img: "/assests/img/reviewCardDumy.svg",
    },
  },
];

const ImageNcarouselData = [
  {
    img: "/assests/img/blank.png",
    Companyname: "KareenaCloset",
    review:
      "“Icodelabs brought our vision to life. From secure rentals to elegant design—everything just worked. Our users love the ease of finding and booking outfits.” — Neha P., Founder",
    name: "Neha P (KareenaCloset)",
    position: "Founder",
  },
  {
    img: "/assests/img/blank.png",
    Companyname: "QuickInvoice Pro",
    review:
      "“The platform they built transformed how we manage client billing. Seamless, fast, and incredibly intuitive. Support was top-notch too.” — Arjun M., CEO",
    name: "Arjun M (QuickInvoice Pro)",
    position: "Chief Executive Officer",
  },
  {
    img: "/assests/img/blank.png",
    Companyname: "HealthEase",
    review:
      "“Thanks to Icodelabs, our telehealth portal runs smoothly—even during traffic spikes. Their attention to UX and backend optimization really shows.” — Dr. Meera K., Co-founder",
    name: "Dr. Meera K (HealthEase)",
    position: "Co-founder",
  },
  {
    img: "/assests/img/blank.png",
    Companyname: "GoLocal Markets",
    review:
      "“They delivered a robust multi-vendor platform that helped us scale quickly. The UI is clean, responsive, and users love the experience.” — Ritesh S., Product Lead",
    name: "Ritesh S (GoLocal Markets)",
    position: "Product Lead",
  },
];

const ImgNFullImageData = {
  img: "",
  title: "We are ready to work and build on-demand solution for your business.",
  content: "We’ve built 50+ custom Web & Mobile marketplaces using Sharetribe ",
  btnLink: "#",
};
