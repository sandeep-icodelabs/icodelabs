"use client"
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import SectionFaq from "@/component/SectionFaq/SectionFaq";
import BusinessColumn from "../BusinessColumn";
import BusinessFeature from "../BusinessFeature";
import ContactNowBanner from "../ContactNowBanner";
import WhyChooseSection from "../WhyChooseSection";
import css from "../service.module.css";

const Service = async ({ params }) => {
  const { id } = params;
  const data = await fetch(
    `https://api.icodestaging.in/api/service-details/${id}?populate[Titleservice][populate][TImage]=*&populate[ToolService][populate]=*&populate[EnhanceService][populate]=*&populate[ExpertiseImage][populate]=*&populate[ServiceImage][populate]=*&populate[FAQ][populate]=*&populate[TopImage][populate]=*`
    // `https://api.icodestaging.in/api/service-details/${id}?populate[Titleservice][populate][Titleservice][populate]=*&populate[ToolService][populate]=*&populate[EnhanceService][populate]=*&populate[ExpertiseImage][populate]=*&populate[ServiceImage][populate]=*&populate[FAQ][populate]=*`
  );
  const res = await data.json();
  const { attributes } = res.data;  

// Now you can render or process the sorted services
// console.log(sortedServices); 
  return (
    <div>
      <div className={css.bannerMain}>
        <ContentWidth className={css.bannerContent}>
          <div className={css.leftContent}>
            <h1 className={css.bannerTitle}>{attributes?.Title}</h1>
            <p className={css.bannerDescription}>{attributes?.Description}</p>
            <button className={css.bannerButton}><span className="rippleBlueEffect">&nbsp;</span>Get started</button>
          </div>
          <div className={css.rightContent}>
            <img src={attributes?.TopImage?.data[0].attributes?.url} alt='service Image'/> 
          </div>
        </ContentWidth>
      </div>
      <BusinessColumn services={attributes?.Titleservice} devlopmentTitle={attributes?.DevlopmentTitle} developmentDescription={attributes?.DevelopmentDescription}/>
      <BusinessFeature tools={attributes?.ToolService} toolsTitle={attributes?.ToolsTitle} toolsDescription={attributes?.ToolsDescription}  expertiseImage={attributes?.ExpertiseImage}/>
      <WhyChooseSection 
        features={attributes?.EnhanceService}
        enhanceTitle={attributes?.EnhanceTitle}
        enhanceDesc={attributes?.EnhanceDescription}
      />
      <ContactNowBanner ctaTitle={attributes?.CTATitlte} ctaDescription={attributes.CTADescription}/>
      <SectionFaq faqData={attributes?.FAQ} />
    </div>
  );
};

export default Service;
