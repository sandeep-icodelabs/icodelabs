import React from "react";
import css from "./HeroSectionShareTribe.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";
import Image from "next/image";
import shareTribeWebsiteImg from "../../../../../assets/imgs/images/sharetribewebsite.png";
import leftimg1 from "../../../../../assets/imgs/images/sharetribe/herobanner1.png";
import leftimg2 from "../../../../../assets/imgs/images/sharetribe/herobanner2.png";
import leftimg3 from "../../../../../assets/imgs/images/sharetribe/herobanner3.png";
import home1 from "../../../../../assets/imgs/images/sharetribe/imgs/1.png";
import home2 from "../../../../../assets/imgs/images/sharetribe/imgs/2.png";
import home3 from "../../../../../assets/imgs/images/sharetribe/imgs/3.png";
import home4 from "../../../../../assets/imgs/images/sharetribe/imgs/4.png";
import home5 from "../../../../../assets/imgs/images/sharetribe/imgs/5.png";

export default function HeroSectionShareTribe() {
  return (
    <div className={css.outterWrapper}>
      <section className={css.heroBannerWrapper}>
        <div className={css.glowbgLeft} />
        <div className={css.glowbgRight} />
        <ContentWidth>
          <div className={css.heroBannerContainer}>
            <div className={css.contentContainer}>
              <span className={css.badge}>
                Build and Launch Custom Sharetribe Marketplaces Fast
              </span>
              <h1>Launch Custom Sharetribe Marketplaces in Record Time </h1>
              <p>
                We specialize in building fully tailored Sharetribe-based
                applications — from MVPs to full-scale platforms — with
                lightning-fast delivery, powerful integrations, and scalable
                architecture.
              </p>

              <Link href="#" className="primaryGradientBtn">
                Book a Free Sharetribe Consultation{" "}
                <IconCollection name="rightArrowTop" />
              </Link>

              <div className={css.pointContainer}>
                {points.map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p>
                        <IconCollection
                          name="check"
                          className={css.checkIcon}
                        />
                        {i.text}
                      </p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </ContentWidth>
      </section>

      {/* imagesection */}
      <div className={css.imgsWrapper}>
        <Image
          src="/assests/img/shareTribe.png"
          width={1265}
          height={525.7}
          quality={100}
          alt="Sharetribe Website"
        />
      </div>

      {/* lower section */}
      <div className={css.homerLocationSectionWrapper}>
        <h6 className="">Explore new Home locations in Finland</h6>
        <div className={css.imgGridContainer}>
          <Image
            src="/assests/img/shareTribeExplore.png"
            alt="home"
            width={1024.91}
            height={292.28}
            className={css.homeImg}
          />
        </div>
      </div>
    </div>
  );
}

const points = [
  {
    Highlight: "50+ ",
    text: "50+ marketplaces delivered",
  },
  {
    Highlight: "AI",
    text: "AI-driven dev team",
  },
  {
    text: "Sharetribe-certified",
  },
];
