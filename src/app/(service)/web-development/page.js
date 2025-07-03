import React from "react";
import ReactHeroSection from "../react-native/Components/ReactHeroSection/ReactHeroSection";
import ImgNTextSection, {
  DeliveryWebSolnSection,
  GradientImgNText,
  OurProficiency,
  YourSrcForWebDevSection,
} from "./Components/ImgNTextSection/ImgNTextSection";
import ExploreCarousel from "./Components/ExploreCarousel/ExploreCarousel";
import ShareTribeReviewCrousel from "../sharetribe/Components/ShareTribeReviewCrousel/ShareTribeReviewCrousel";
import FAQSection from "../react-native/Components/FAQSection/FAQSection";
import SectionResources from "@/component/SectionResources/SectionResources";
import StartupsToEnterprises from "@/component/SectionStartup/StartupsToEnterprises";
import { blogDetail, companyLogoDetails } from "@/services/service";
import Loader from "@/component/Loader";

export default async function page() {
  try {
    const [blogDetailData, companyLogo] = await Promise.all([
      blogDetail(),

      companyLogoDetails(),
    ]);
    const sortedBlogDetail = blogDetailData?.data?.data?.sort(
      (a, b) => b.id - a.id
    );
    return (
      <>
        <ReactHeroSection
          title="Deliver Web Solutions With A Team Icodelabs"
          content="Complete the project on time with a web development team that mastered technologies like React, Node.js, TypeScript, PHP, and AWS. Kickoff work on your web app in just 2-4 weeks."
          btnLink="#"
          btnText="Talk to Our Experts"
        />
        <ImgNTextSection />
        <DeliveryWebSolnSection />
        <ExploreCarousel />
        <OurProficiency />
        <GradientImgNText />
        <ShareTribeReviewCrousel />
        <YourSrcForWebDevSection />
        <StartupsToEnterprises
          hide="true"
          companyLogo={companyLogo?.data?.data}
        />
        <FAQSection data={faqData} />
        <SectionResources blog={sortedBlogDetail} usedInBlog="true" />=
      </>
    );
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return (
      <div className={"landingContainer"}>
        <Loader />
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }
}

const faqData = [
  {
    question: "Can React Native be used for both web and mobile?",
    answer:
      "Yes, with frameworks like Expo for Web or React Native Web, you can build for both platforms.",
  },
  {
    question: "How long does it take to build a React Native App?",
    answer:
      "It depends on complexity. Simple apps may take 4–6 weeks, complex ones several months.",
  },
  {
    question: "Why Choose React Native for Mobile App Development?",
    answer:
      "React Native offers faster development, code sharing, and a rich ecosystem.",
  },
  {
    question: "Is React Native good for mobile apps?",
    answer:
      "Yes, it's great for cross-platform apps and is used by companies like Facebook and Shopify.",
  },
  {
    question: "Is React Native frontend or backend?",
    answer:
      "React Native is a frontend framework used to build UI components in JavaScript.",
  },
  {
    question: "Why should you hire a React Native developer?",
    answer:
      "They help create performant apps with shared codebases, reducing costs and time.",
  },
  {
    question: "How much does it cost to hire a React Native developer?",
    answer:
      "Rates vary. Freelancers may cost $25–$100/hr. Agencies typically charge more.",
  },
];
