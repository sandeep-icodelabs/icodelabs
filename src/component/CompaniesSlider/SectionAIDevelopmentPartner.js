"use client";
import React from "react";
import css from "./SectionAIDevelopmentPartner.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import bottomGradient from "../../assets/imgs/images/aiDevBottomGradient.svg";
import Image from "next/image";

export default function AIDevelopmentPartner() {
  return (
    <>
      <div className={css.SectionAIDevelopmentPartnerWrapper}>
        <Image
          src={bottomGradient}
          width={1200}
          height={400}
          className={css.gradientBottom}
          alt="..."
        />

        <ContentWidth>
          <div className={css.leftNrightContainer}>
            <div className={css.leftContentContainer}>
              <h2>Your AI Development Partner</h2>
              <p>
                At icodelabs, we are passionate about creating custom mobile and
                web applications that solve real-world problems.{" "}
              </p>

              <div className={css.aiDevCardWrapper}>
                <IconCollection name="logoFavicon" />

                <h4>Focus on Growth While We Drive Your Tech Innovation.</h4>
                <p>Is Tech Troubles Holding You Back?</p> 
                <a href="https://calendly.com/jaytiwary" className="primaryBtn">
                  Innovate With Us
                  <IconCollection name="rightArrowTop" />
                </a>
              </div>
            </div>

            <div className={css.rightContentWrapper}>
              <div className={css.cardWrapper}>
                {aiDevContent.map((i, index) => {
                  return (
                    <>
                      <div className={css.cardContainer}>
                        <IconCollection name="aidevCheck" />

                        <div>
                          <h6>{i.title}</h6>
                          <p>{i.description}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={css.leftContentContainerMobile}>
              <div className={css.aiDevCardWrappermobile}>
                <IconCollection name="logoFavicon" />

                <h4>Focus on Growth While We Drive Your Tech Innovation.</h4>
                <p>Is Tech Troubles Holding You Back?</p>

                <a href="" className="primaryBtn">
                  Innovate With Us
                  <IconCollection name="rightArrowTop" />
                </a>
              </div>
            </div>
          </div>
        </ContentWidth>
      </div>
    </>
  );
}

const aiDevContent = [
  {
    title: "AI Strategy & Consulting",
    description:
      "Ready-to-use tech solutions for specific business use cases to launch quickly, without coding.",
  },
  {
    title: "AI-Software Development",
    description:
      "Ready-to-use tech solutions for specific business use cases to launch quickly, without coding.",
  },
  {
    title: "Generative AI",
    description:
      "Ready-to-use tech solutions for specific business use cases to launch quickly, without coding.",
  },
  {
    title: "Machine Learning",
    description:
      "Ready-to-use tech solutions for specific business use cases to launch quickly, without coding.",
  },
  {
    title: "AI Agent & Chatbot",
    description:
      "Ready-to-use tech solutions for specific business use cases to launch quickly, without coding.",
  },
];
