import React from "react";
import ReactHeroSection from "./Components/ReactHeroSection/ReactHeroSection";
import ImageNcontentSection, {
  TextnImageSection,
} from "./Components/ImageNcontentSection/ImageNcontentSection";
import ReactnativeDevSection from "./Components/ReactnativeDevSection/ReactnativeDevSection";
import DevToolSection from "./Components/DevToolSection/DevToolSection";
import CarouselNwhyChooseSection from "./Components/CarouselNwhyChooseSection/CarouselNwhyChooseSection";
import OthervsIcodeSection from "../sharetribe/Components/OthervsIcodeSection/OthervsIcodeSection";
import FAQSection from "./Components/FAQSection/FAQSection";
import SectionResources from "@/component/SectionResources/SectionResources";

export default function page() {
  return (
    <>
      <ReactHeroSection
        title="React Native App Development Compnay"
        content="Best React Native development company proficient in building
              mobile applications by leveraging the skills of the best React
              Native app developers
"
        btnLink="#"
        bgIcon="true"
        btnText="Talk to Our Experts"
      />
      <ImageNcontentSection />
      <ReactnativeDevSection />
      <DevToolSection />
      <CarouselNwhyChooseSection />
      <TextnImageSection />
      <OthervsIcodeSection />
      <FAQSection data={faqData} />
      <SectionResources usedInBlog="true" />
    </>
  );
}

const faqData = [
  {
    question: "What is React Native app development?",
    answer:
      "React Native app development is a method of building mobile applications for iOS and Android using JavaScript and React, a popular JavaScript library for building user interfaces. ",
  },
  {
    question: "Can React Native be used for both web and mobile?",
    answer: "",
  },
  {
    question: "How long does it take to build a React Native App?",
    answer: "",
  },
  {
    question: "Why Choose React Native for Mobile App Development?",
    answer: "",
  },
  {
    question: "Is React Native good for mobile apps?",
    answer: "",
  },
  {
    question: "Is React Native frontend or backend?",
    answer: "",
  },
  {
    question: "Why should you hire a React Native developer?",
    answer: "",
  },
  {
    question: "How much does it cost to hire a React Native developer?",
    answer: "",
  },
];
