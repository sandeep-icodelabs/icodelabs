import React from "react";
import css from "./Flutter.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const WhyChooseForAppDevelopment = () => {
  const benefits = [
    {
      icon: "team",
      title: "Expert Team",
      description: "Skilled Developers With Extensive Experience In Flutter App Development."
    },
    {
      icon: "tech",
      title: "Cutting-Edge Technology",
      description: "Utilizing The Latest Tools And Frameworks To Build Future-Ready Applications."
    },
    {
      icon: "client",
      title: "Client-Centric Approach",
      description: "We Prioritize Your Business Objectives And User Needs"
    },
    {
      icon: "agile",
      title: "Agile Development Process",
      description: "Ensuring Timely Delivery And Seamless Collaboration."
    }
  ];

  return (
    <div className={css.whyChooseForAppDevelopmentContainer}>
      <div className={css.whyChooseContent}>
        <h2 className={css.whyChooseAppTitle}>
          Why Choose Icodelabs For Flutter
          <br />
          App Development?
        </h2>

        <div className={css.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={css.benefitCard}>
              <div className={css.benefitIconWrapper}>
                <IconCollection name={benefit.icon} />
              </div>
              <h3 className={css.benefitTitle}>{benefit.title}</h3>
              <p className={css.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseForAppDevelopment;