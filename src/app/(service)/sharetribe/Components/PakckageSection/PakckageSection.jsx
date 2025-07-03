"use client";
import React, { useState } from "react";
import css from "./PakckageSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import c1 from "../../../../../assets/imgs/images/clientImgs/c1.png";
import c2 from "../../../../../assets/imgs/images/clientImgs/c2.png";
import Image from "next/image";

export default function PakckageSection() {
  const screenWidth = typeof window !== "undefined" && window.innerWidth;

  return (
    <div>
      <ContentWidth className={css.packageContainer}>
        <div className={css.contentContainer}>
          <h2>Choose the Right Start for Your Marketplace</h2>
          <p>
            Flexible plans built for all your marketplace designs needs. Pay as
            you grow.
          </p>
        </div>

        <div className={css.packageCardCarousel}>
          <Swiper
            slidesPerView={1.4}
            spaceBetween={20}
            initialSlide={1}
            loop={false}
            // centeredSlides={true}
            centeredSlides={screenWidth <= 992 ? true : false}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 16 },
              600: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
              992: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            <SwiperSlide>
              {/* First Card */}
              <div className={css.cardLeft}>
                <h5>{firstCardData.title}</h5>
                <span className="subTitle">{firstCardData.subText}</span>
                <h4>{firstCardData.price}</h4>
                <a href={firstCardData.btnLink}>
                  Get Started
                  <IconCollection name="rightArrowTopDark" />
                </a>
                <p className={css.cnclTxt}>{firstCardData.statment}</p>

                <div className={css.bar} />

                <div className={css.keyPointsWrapper}>
                  <span className="subTitle">Startup Plan Features:</span>

                  {firstCardData?.featureHeadings.map((item, index) => {
                    return (
                      <div key={index} className={css.keyPoints}>
                        <IconCollection name="blueTick" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              {/* Second Card */}
              <div className={css.cardMiddle}>
                <div className={css.topBar}>MOST POPULAR</div>
                <div className={css.cardContentWrapper}>
                  <h5>{middleCardData.title}</h5>
                  <span className="subTitle">{middleCardData.subText}</span>
                  <h4>{middleCardData.price}</h4>
                  <a href={middleCardData.btnLink}>
                    Get Started
                    <IconCollection name="rightArrowTopDark" />
                  </a>
                  <p className={css.cnclTxt}>{middleCardData.statment}</p>

                  <div className={css.bar} />

                  <div className={css.keyPointsWrapper}>
                    <p className="subTitle">Startup Plan Features:</p>
                    {middleCardData?.featureHeadings.map((item, index) => {
                      return (
                        <div key={index} className={css.keyPoints}>
                          <IconCollection name="blueTick" />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Third Card */}
              <div className={css.cardRight}>
                <h5>{thidCardData.title}</h5>
                <span className="subTitle">{thidCardData.subText}</span>
                <h4>{thidCardData.price}</h4>
                <a href={thidCardData.btnLink}>
                  Get Started
                  <IconCollection name="rightArrowTopDark" />
                </a>
                <p className={css.cnclTxt}>{thidCardData.statment}</p>

                <div className={css.bar} />

                <div className={css.keyPointsWrapper}>
                  <span className="subTitle">Startup Plan Features:</span>

                  {thidCardData?.featureHeadings.map((item, index) => {
                    return (
                      <div key={index} className={css.keyPoints}>
                        <IconCollection name="blueTick" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={css.bottomBar}>
          <h5>
            Ready to Launch? Find Your Perfect Package
            <div className={css.darkBox}>
              Talk to Our Sharetribe Team
              <div className={css.imgContainer}>
                <Image src={c1} width={25} height={25} alt="c1" />
                <Image src={c2} width={25} height={25} alt="c2" />
              </div>
            </div>
          </h5>
        </div>
      </ContentWidth>
    </div>
  );
}

const firstCardData = {
  title: "Startup",
  subText: `Ideal for MVPs or simple marketplaces`,
  price: "$3,000",
  btnLink: "#",
  statment: "Pause Or Cancel Anytime",
  featuretitle: "Startup Plan Features:",
  featureHeadings: [
    "Sharetribe setup & branding",
    "Web Or Mobile apps",
    "Listing types, categories, filters",
    "Payment flow customization",
    "Basic email + UI changes",
    "Launch-ready in ~3 weeks",
    "Maintenance & support service free for 3 months",
  ],
};

const middleCardData = {
  title: "Growth",
  subText: `For platforms needing extended flows and deeper integrations`,
  price: "$4,000",
  btnLink: "#",
  statment: "Pause Or Cancel Anytime",
  featuretitle: "Everything in Growth Plan, Plus",
  featureHeadings: [
    `Everything in Starter`,
    `Web Or Mobile apps`,
    `Calendar/booking logic`,
    `Discount codes`,
    `Custom onboarding`,
    `Launch-ready in ~6 weeks`,
    `Limited 3rd-party integrations (e.g., Algolia, Stripe extensions)`,
    `Digital marketing Analysis & plan free`,
    `Maintenance & support service free for 3 months`,
  ],
};

const thidCardData = {
  title: "Enterprise",
  subText: `For custom workflows, integrations, and AI-powered features`,
  price: "$10,000+",
  btnLink: "#",
  statment: "Pause Or Cancel Anytime",
  featuretitle: "Everything in Enterprise Plan, Plus",
  featureHeadings: [
    `Everything in Growth`,
    `Web & Mobile apps`,
    `Custom transaction logic`,
    "Multi-tier pricing or subscriptions",
    `AI assistants, chatbots, or auto listing generators`,
    `Complex APIs + 3rd-party integrations`,
    `Scalable backend adjustments`,
    `Launch-ready in ~3 months`,
    `Digital marketing free for first 3 months`,
    `Maintenance & support service free for 6 months`,
  ],
};
