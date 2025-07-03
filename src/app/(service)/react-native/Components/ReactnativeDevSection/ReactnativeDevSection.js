"use client";
import React from "react";
import css from "./ReactnativeDevSection.module.css";
import bottomGradient from "../../../../../assets/imgs/images/aiDevBottomGradient.svg";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function ReactnativeDevSection() {
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
              <h2>React Native App Development Services</h2>
              <p>
                Unlock the full potential of your business with our custom
                mobile app development services. We specialize in creating
                intuitive, scalable, and high-performing mobile applications
                tailored to your unique needs.
              </p>

              <div className={css.aiDevCardWrapper}>
                <IconCollection name="logoFavicon" />

                <h4>Focus on Growth While We Drive Your Tech Innovation.</h4>
                <p>Is Tech Troubles Holding You Back?</p>

                <a href="" className="primaryBtn">
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
                        <div className={css.iconContainer}>
                          <IconCollection name={i.icons} />
                        </div>

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
    title: "React Native App Ideation & Consulting",
    description:
      "React Native application development offers numerous advantages for both SMEs and Enterprises. However, it may not always be the perfect fit for every development scenario.",
    icons: "ideation",
  },
  {
    title: "React Native for MVP Development",
    description:
      "When it comes to verifying your app idea and validating its feasibility, React Native serves as an ideal and cost-effective choice. Our skilled React Native app development team can efficiently.",
    icons: "MVP",
  },
  {
    title: "App Development With React Native",
    description:
      "Our end-to-end React Native mobile app development process is tailored to cater to all your development needs. From initial design and development to comprehensive testing and deployment.",
    icons: "appDev",
  },
  {
    title: "React Native Migration",
    description:
      "If you already have an existing iOS or Android application, we can assist you in smoothly migrating it to a React Native application with our migration expertise.",
    icons: "react-migration",
  },
  {
    title: "React Native Game Development",
    description:
      "With our vast experience in fulfilling diverse game development requirements, our team of React Native experts can turn your pivotal game project into a seamless experience.",
    icons: "gameDev",
  },
  {
    title: "React Native Support & Maintenance",
    description:
      "Developing an app using React Native is an ongoing process. As new operating system versions and design upgrades emerge, your application will require continuous upgrades. ",
    icons: "supportNmain",
  },
];
