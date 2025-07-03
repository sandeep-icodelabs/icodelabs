import React from "react";
import css from "../our-approach/OurApproach.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import SectionExploreAnalyze from "@/component/SectionExploreAnalyze/SectionExploreAnalyze";
import ScetionClientCollaboration from "@/component/SectionClientCollaboration/SectionClientCollaboration";
import SectionUseStrategically from "@/component/SectionUseStrategically/SectionUseStrategically";
import SectionSuccessStories from "@/component/SectionSuccessStories/SectionSuccessStories";
// import icodeLabIcon from "../../assets/images/icodeLabIcon.svg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className={css.ourApproachWrapper}>
        <div className={css.glowbgLeft} />
        <div className={css.glowbgRight} />

        <ContentWidth>
          <div className={css.ourApproachContainer}>
            <div className={css.ourApproachLeftContainer}>
              <h1 className={css.ourApproachHeading}>
                Our project management & development strategy. Agile,
                transparent & customer-centric
              </h1>

              <p>
                Our absolute focus is on your product and to bring the best we
                ensure the culture of communication, collaboration &
                transparency.
              </p>

              <div className={css.approachButtonWrapper}>
                <button className={`${css.approachButtons} primaryBtn`}>
                  Book a Free Consultation
                  <IconCollection
                    name="rightArrowTop"
                    className={css.arrowIcon}
                  />
                </button>

                <button className={css.hireButton}>
                   Hire developer
                  <IconCollection
                    name="rightArrowTop"
                    className={css.arrowIcon}
                  />
                </button>
              </div>
            </div>

            <div className={css.ourApproachRightContainer}></div>
          </div>
        </ContentWidth>
      </div>

      <SectionExploreAnalyze />
      <ScetionClientCollaboration />
      <SectionUseStrategically />
      <SectionSuccessStories />

      {/* next section */}
      <ContentWidth>
        <div className={css.powerMainContainer}>
          <div className={css.powerWrapper}>
            <div className={css.leftPowerContainer}>
              {/* <Image src={icodeLabIcon} alt="icodelab-icon" /> */}
              <div className={css.powerBox}>
                <IconCollection name="icodeLogo" />

                <div>
                  <h1 className={css.powerHeading}>Want results like these?</h1>
                  <p className={css.powerDescription}>
                    Power your team with Icodelabs
                  </p>
                </div>
              </div>
            </div>

            <div className={css.rightPowerContainer}>
              <p className={css.rightPowerDescription}>
                We believe that designing products and services in close
                partnership with our clients is the only way to have a real
                impact on their business.
              </p>
            </div>
          </div>

          <div className={css.exploreButtonwrapper}>
            <button className="primaryBtn">Explore More Case Studies 👋</button>
          </div>
        </div>
      </ContentWidth>
    </>
  );
};

export default page;
