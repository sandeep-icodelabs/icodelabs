// app/flutter/page.js

import CompaniesSlider from "@/component/CompaniesSlider/SectionAIDevelopmentPartner";
import { companyLogoDetails } from "@/services/service";
import Faq from "./faq";
import FlutterAppDevelopment from "./flutterAppDevelopment";
import FlutterAppDevelopmentProcess from "./flutterAppDevelopmentProcess";
import Hero from "./hero";
import RecentWork from "./recentWork";
import BottomCta from "./successBanner";
import Testimonial from "./testimonial";
import ToolsAndTech from "./toolsAndTech";
import WhyChooseFlutter from "./whyChooseFlutter";
import WhyChooseForAppDevelopment from "./whyChooseForAppDevelopment";

// Data fetching in a Server Component (async/await pattern)
const Page = async () => {
  // Fetch data server-side

  const companyLogo = await companyLogoDetails();

  // Render the page with the fetched data
  return (
    <div>
      <Hero />
      <CompaniesSlider companyLogo={companyLogo?.data?.data} />
      <WhyChooseFlutter />
      <FlutterAppDevelopment />
      <FlutterAppDevelopmentProcess />
      <RecentWork />
      <ToolsAndTech />
      <WhyChooseForAppDevelopment />
      <Testimonial />
      <Faq />
      <BottomCta />
    </div>
  );
};

export default Page;
