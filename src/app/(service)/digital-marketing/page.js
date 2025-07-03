import React from "react";
import ReactHeroSection from "../react-native/Components/ReactHeroSection/ReactHeroSection";
import ImgNcontentSection, {
  AllInOneSolnSection,
  BlankSection,
  EmpowerYourBusiness,
  SmartChoice,
  WeBuildForToday,
} from "./Components/ImgNcontentSection/ImgNcontentSection";
import FAQSection from "../react-native/Components/FAQSection/FAQSection";

export default function page() {
  return (
    <>
      <ReactHeroSection
        title="Enhance Your Online Ranking & Web Presence"
        content="Our data-driven digital marketing services are designed to grow your client base and fuel business growth."
        btnLink="#"
        btnText="Let’s Discuss your project"
        secBtnText="Explore Plans"
        secBtnTextLink="#"
      />
      <ImgNcontentSection />
      <EmpowerYourBusiness />
      <AllInOneSolnSection />
      <BlankSection />
      <SmartChoice />
      <WeBuildForToday />
      <FAQSection data={faqData} />
      <div className="paddingExtra" />
    </>
  );
}

const faqData = [
  {
    question: "What does a digital marketing agency do?",
    answer: "",
  },
  {
    question: "What are digital marketing services?",
    answer: "",
  },
  {
    question: "How much does digital marketing charge?",
    answer: "",
  },
  {
    question: "What are SEO services?",
    answer: "",
  },
  {
    question: "Why SEO is important for business?",
    answer: "",
  },
  {
    question: "How much does SEO cost per month?",
    answer: "",
  },
  {
    question: "What are technical SEO services?",
    answer: "",
  },
  {
    question: "What are social media marketing services?",
    answer: "",
  },

  {
    question: "What is a PPC service?",
    answer: "",
  },

  {
    question: "What are eCommerce SEO, PPC, and shopping ads?",
    answer: "",
  },
];
