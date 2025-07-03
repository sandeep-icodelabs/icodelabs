import React from "react";
import css from "./service.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Markdown from "react-markdown";

const WhyChooseSection = (props) => {
  const { features, enhanceTitle, enhanceDesc } = props;
  return (
    <div className={css.whyChooseContainer}>
      <ContentWidth>
        <h1 className={css.title}>{enhanceTitle}</h1>
        <Markdown className={css.description}>{enhanceDesc}</Markdown>
        <div className={css.cardGrid}>
          {features.map((feature, index) => (
            <div className={css.card} key={index}>
              <div className={css.cardContent}>
                <div className={css.cardIcon}>
                  <img
                    src={feature?.EImage?.data[0].attributes?.url}
                    alt="Feature Image"
                  />
                </div>
                <h3 className={css.cardTitle}>{feature.ETitle}</h3>
              </div>
              <p className={css.cardDescription}>{feature.EDescription}</p>
            </div>
          ))}
        </div>
      </ContentWidth>
    </div>
  );
};

export default WhyChooseSection;
