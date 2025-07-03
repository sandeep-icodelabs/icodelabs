import React from "react";
import HeroSectionShareTribe from "./Components/HeroSectionShareTribe/HeroSectionShareTribe";
import MarketPlaceSection from "./Components/MarketPlaceSection/MarketPlaceSection";
import PakckageSection from "./Components/PakckageSection/PakckageSection";
import HowIcodeWorkSection from "./Components/HowIcodeWorkSection/HowIcodeWorkSection";
import ShareTribeReviewCrousel from "./Components/ShareTribeReviewCrousel/ShareTribeReviewCrousel";
import OthervsIcodeSection from "./Components/OthervsIcodeSection/OthervsIcodeSection";
import ShareTribeAccordionSection from "./Components/ShareTribeAccordionSection/ShareTribeAccordionSection";
import ImgNcontentFullWIdthSection from "./Components/ImgNcontentFullWIdthSection/ImgNcontentFullWIdthSection";

export default function page() {
  return (
    <>
      <HeroSectionShareTribe />
      <MarketPlaceSection />
      <PakckageSection />
      <HowIcodeWorkSection />
      <ShareTribeReviewCrousel />
      <OthervsIcodeSection />
      <ShareTribeAccordionSection />
      <ImgNcontentFullWIdthSection />
    </>
  );
}
