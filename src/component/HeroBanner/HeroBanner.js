"use client";

import React from "react";
import css from "./HeroBanner.module.css";
import Image from "next/image";
import HeroImg1 from "../../assets/imgs/images/hero_img.svg";
import IconCollection from "../IconCollection/IconCollection";
// import { Inconsolata } from "next/font/google";
import ContentWidth from "../ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className={css.heroBannerWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth>
        <Swiper
          className="heroBannerCarousel customPagination"
          modules={[Pagination]}
          pagination={true}
        >
          {heroSectionData.map((i, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={css.heroBannerContainer}>
                    {/* content Container is here */}
                    <div className={css.contentContainer}>
                      <span className="subTitle">{i.topText}</span>

                      <h1>{i.title}</h1>

                      <h6>{i.subText}</h6>

                      <Link href={i.btnRoute} className="primaryBtn">
                        {i.btnText}

                        {i.Arrow === true ? (
                          <IconCollection
                            name="rightArrowTop"
                            className={css.arrowIcon}
                          />
                        ) : (
                          <span>{i.emoji}</span>
                        )}
                      </Link>

                      <div className={css.pointContainer}>
                        {i?.features?.map((point, index) => (
                          <React.Fragment>
                            <p key={index}>
                              <IconCollection
                                name="check"
                                className={css.checkIcon}
                              />
                              {point}
                            </p>

                            <span className={css.bar}></span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Image
                        src={i.img}
                        alt="Hero Image"
                        className={css.heroBannerImg}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </ContentWidth>
    </section>
  );
};

export default HeroBanner;

const heroSectionData = [
  {
    topText: "Custom Marketplace Solutions",
    title: "Trusted By Founders & Agencies Across The Globe",
    subText: `Connect with Icodelabs for Sharetribe excellence and top-notch solutions today!`,
    btnText: `Get Started`,
    btnRoute: "https://calendly.com/jaytiwary",
    Arrow: true,
    features: [
      // "50+ marketplaces delivered",
      // "AI-driven dev team",
      // "Sharetribe-certified",
    ],
    img: HeroImg1,
  },

  {
    topText: "",
    title: "Launch Your Marketplace 10x Faster with Sharetribe Experts",
    subText: `We’ve built 50+ custom web & mobile marketplaces using Sharetribe — from tailored booking flows to seamless payments and rich user profiles.`,
    btnText: `Start with Sharetribe`,
    emoji: "",
    Arrow: true,
    btnRoute: "/sharetribe",

    features: ["50+ AI Text", "AI-driven dev team", "AI Task Force"],
    img: HeroImg1,
  },
  // {
  //   topText: "AI-Enabled Marketplaces",
  //   title: "Smarter Marketplaces Start Here Powered by AI",
  //   subText: `Add AI superpowers to your platform — GPT-based listing assistants, personalized recommendations, smart search, and more, all built into your marketplace.`,
  //   btnText: `Talk to an AI Strategist`,
  //   emoji: "👋",
  //   Arrow: true,
  //   btnRoute: "/ai-based-development",

  //   features: ["50+ AI Text", "AI-driven dev team", "AI Task Force"],
  //   img: HeroImg1,
  // },
];
