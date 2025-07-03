import HeroBanner from "@/component/HeroBanner/HeroBanner";
import MarketplaceSection from "@/component/MarketplaceSection/MarketplaceSection";
import SectionContactUs from "@/component/SectionContactUs/SectionContactUs";
import SectionResources from "@/component/SectionResources/SectionResources";
import SectionTechnologyWeUse from "@/component/SectionTechnologyWeUse/SectionTechnologyWeUse";
import SectionTestimonials from "@/component/SectionTestimonials/SectionTestimonials";
import DrivingtheNextWave from "@/component/SectionDrivingtheNextWave/SectionDrivingtheNextWave";
import {
  blogDetail,
  companyLogoDetails,
  expProcesses,
  serviceDetails,
} from "@/services/service";
import css from "./LandingPage.module.css";
import Loader from "@/component/Loader/Loader";
import DoBusinessBetter from "@/component/DoBusinessBetter/DoBusinessBetter";
import HowWeDriveSuccessful from "@/component/HowWeDriveSuccessful /HowWeDriveSuccessful";
import SectionCaseStudy from "@/component/SectionCaseStudy/SectionCaseStudy";
import WhyChooseUs from "@/component/SectionWhyChooseUs/SectionWhyChooseUs";
import SectionHowItWork from "@/component/SectionLatestWorks/SectionHowItWork";
import SectionGrowYour from "@/component/SectionGrowYour/SectionGrowYour";
import StartupsToEnterprises from "@/component/SectionStartup/StartupsToEnterprises";
import AIDevelopmentPartner from "@/component/CompaniesSlider/SectionAIDevelopmentPartner";

export default async function Home() {
  try {
    const [blogDetailData, companyLogo] = await Promise.all([
      blogDetail(),
      companyLogoDetails(),
    ]);
    const sortedBlogDetail = blogDetailData?.data?.data?.sort(
      (a, b) => b.id - a.id
    );
    console.log('sortedBlogDetail', sortedBlogDetail);
    console.log('companyLogo', companyLogo);
    return (
      <div className={css.landingContainer}>
        <HeroBanner />
        <MarketplaceSection />
        <DrivingtheNextWave />
        <DoBusinessBetter />
        <SectionCaseStudy />
        <HowWeDriveSuccessful />
        <WhyChooseUs />
        <SectionTechnologyWeUse />
        <SectionHowItWork />
        <SectionGrowYour />
        <SectionTestimonials />
        <StartupsToEnterprises companyLogo={companyLogo?.data?.data} />
        <AIDevelopmentPartner />
        <SectionResources
          usedInBlog="false"
          bg="#fff"
          blog={sortedBlogDetail}
        />
        <SectionContactUs />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return (
      <div className={css.landingContainer}>
        <Loader />
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }
}
