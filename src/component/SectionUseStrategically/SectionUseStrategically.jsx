import React from "react";
import css from "./SectionUseStrategically.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import teamButtonImg from "../../assets/images/ourApproach/teamButtonImg.svg";
import teamButtonImg1 from "../../assets/images/ourApproach/teambackgroundImg1.svg";
import teamButtonImg2 from "../../assets/images/ourApproach/teamBackground2.svg";
import teamButtonImg3 from "../../assets/images/ourApproach/teamBackground3.svg";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";

const SectionUseStrategically = () => {
  const purposeOptions = [
    {
      heading: "When to Use Sharetribe",
      description:
        "Speed, structure, and simplicity — ideal for MVPs or early-stage marketplaces with limited backend needs.",
    },
    {
      heading: "When to Go Custom (React, Node.js, Supabase)",
      description:
        "When flexibility, deep integrations, or non-standard workflows are critical.",
    },
    {
      heading: " When to Layer AI",
      description:
        "To automate content, guide users, or personalize experiences — we integrate GPT and vector search where it makes real impact.",
    },
    {
      heading: "When to Think Serverless",
      description:
        "For event-driven apps or cost-efficient scaling, AWS Lambda and Vercel functions help you pay for what you use.",
    },
  ];
  return (
    <ContentWidth>
      <div className={css.strategicallyWrapper}>
        <h1 className={css.strategicallyHeading}>
          We Don’t Just Use Tech — We Use It Strategically
        </h1>

        <div className={`${css.desktopHide} ${css.rightStrategically}`}></div>

        <div className={css.strategicallyContainer}>
          {/* left section */}
          <div className={css.leftStrategically}>
            <h2 className={css.leftStrategicallyHeading}>
              Tech With a Purpose
            </h2>
            <p className={css.leftStrategicallyDescription}>
              We don’t choose tools because they’re trendy. We choose them
              because they serve your product goals better — whether it’s
              getting to market faster, scaling seamlessly, or integrating
              smarter AI flows. Instead of listing tools again, briefly explain
              why you use them in different scenarios:
            </p>

            {/* listing data */}
            <ul className={css.techPurposeBox}>
              {purposeOptions.map((item, index) => {
                return (
                  <li className={css.techPurposeContainer} key={index}>
                    <IconCollection name="technoList" />
                    <div className={css.purposeWrapper}>
                      <h2 className={css.purposeheading}>{item.heading}</h2>
                      <p className={css.purposeDescription}>
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={css.borderLine}></div>

            <div className={css.ourTeamContainer}>
              <div className={css.ourTeamBox}>
                <h1 className={css.ourTeamHeading}>
                  Need help choosing the right tech path?
                </h1>
              </div>
              <div className={css.outTeamButtonWrapper}>
                <button className={css.ourTeamButton}>
                  Talk to Our Team
                  <div className={css.teamButtonImgWrapper}>
                    <Image src={teamButtonImg} alt="img" />
                    <Image src={teamButtonImg1} alt="img" />
                    <Image src={teamButtonImg2} alt="img" />
                    <Image src={teamButtonImg3} alt="img" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className={`${css.mobileHide} ${css.rightStrategically}`}></div>
        </div>
      </div>
    </ContentWidth>
  );
};

export default SectionUseStrategically;
