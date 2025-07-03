"use client";

import React from "react";
import css from "./HeroSectionCareer.module.css";
import Image from "next/image";
import HeroImg1 from "../../../assets/imgs/images/career.png";
import IconCollection from "../../IconCollection/IconCollection";
import ContentWidth from "../../ContentWidth/ContentWidth";
import Link from "next/link";

const HeroSectionCareer = () => {
  return (
    <section className={css.heroBannerWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth>
        <div className={css.imgNcontentWrapper}>
          <div className={css.LeftContent}>
            <span className="subTitle">Careers</span>
            <h1>Do Meaningful</h1>
          </div>

          {/* imgsection */}
          <div className={css.imgContainer}>
            <Image src={HeroImg1} width={855} height={406} alt="career" />
          </div>

          <div className={css.RightContent}>
            <h1>Work Every Day.</h1>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default HeroSectionCareer;
