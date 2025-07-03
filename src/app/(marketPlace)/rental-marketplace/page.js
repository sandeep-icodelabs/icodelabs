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

export default function page() {
  return (
    <div>
      <MarketPlaceHeroSection data={heroData} />
      <ImgNcontentVertical data={whatIsRental} />
      <CTASection data={ctaData} />
      <ImgNcontentHorizontal data={whoIsItFor} />
      <GridCardWrapper data={keyFeatureData} ctaRequired={false} />
      <IconTable data={iconTable} />
      <FeatureSectionGrid data={FeatureSectionGridData} />
      <ImageNcarousel data={ImageNcarouselData} />
      <ImgNFullImage data={ImgNFullImageData} />
    </div>
  );
}

const heroData = {
  title: "Launch Your Scalable Rental Marketplace with Confidence",
  content: `Build a powerful, feature-rich rental platform for physical or
            digital goods. Whether you're enabling peer-to-peer rentals,
            managing equipment inventory, or launching the next fashion rental
            startup, we’ve got your back—with speed, flexibility, and AI-powered
            enhancements.`,
  btnLink: "",
  btnText: "Get a Quote",
};

const whatIsRental = {
  title: "What is a Rental Marketplace?",
  para: `A rental marketplace allows users to lend or lease items for a fixed
          duration—ranging from a few hours to several weeks. These platforms
          optimize asset usage and create recurring revenue opportunities
          through efficient short-term access.`,
  img: "/assests/img/whatisrentalMarketplace.png",
  width: "1394",
  height: "646",
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
    title: "Time-Based Pricing",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Availability Calendar",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Security Deposit Handling",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Damage Fee Support",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Booking Dashboard",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "ID Verification",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Auto-Cancellation",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Geo-based Search",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
  {
    title: "Mobile-First Design",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which",
    img: "/assests/img/blank.png",
  },
];

const FeatureSectionGridData = [
  {
    cardTwo: {
      title: "Predictive Return Investment",
      img: "",
    },

    cardThree: {
      title: "Smart Suggestions",
      subHeading: (
        <>
          <span>Provides instant, intelligent </span>responses to user queries,
        </>
      ),
      img: "",
    },

    cardFour: {
      title: "AI Chat Assistant",
      img: "/assests/img/gradientRobot.svg",
    },

    cardFive: {
      title: "Intelligent Review Moderation",
      img: "/assests/img/reviewCardDumy.svg",
    },
  },
];

const iconTable = [
  {
    img: "/assests/logo/markeplaceIcons/stripe.svg",
    title: "Stripe Payments",
  },
  {
    img: "/assests/logo/markeplaceIcons/Cloudinary.svg",
    title: "Cloudinary",
  },
  {
    img: "/assests/logo/markeplaceIcons/algolia.svg",
    title: "Algolia",
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
