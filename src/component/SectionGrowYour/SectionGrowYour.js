import React from "react";
import css from "./SectionGrowYour.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import GrowthImg from "../../assets/imgs/images/growth.svg";
import Image from "next/image";

export default function SectionGrowYour() {
  return (
    <div className={css.growYourSectionWrapper}>
      <div className={css.eclipseLeft} />
      <div className={css.eclipseRight} />
      <ContentWidth>
        <div className={css.contentNimgWrapper}>
          <div className={css.contentWrapper}>
            <h2>
              Grow Your Business With The Help Of <span>Icode</span>labs
            </h2>
            <p>
              Our comprehensive services range from strategic planning and
              market research to operational optimization and digital
              transformation.
            </p>

            <a href="https://calendly.com/jaytiwary" className="primaryBtn">
              Let’s Discuss with us! <span>👋</span>
            </a>
          </div>

          <div className={css.imgContainer}>
            <Image
              alt="..."
              src={GrowthImg}
              quality={100}
              width={631.26}
              height={370.32}
            />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
