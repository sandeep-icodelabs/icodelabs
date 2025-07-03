"use client"
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import React from "react";
import css from "./service.module.css";

const BusinessFeature = (props) => {
  const { tools,toolsTitle, toolsDescription,expertiseImage } = props; 
  return (
    <div className={css.businessFeature}>
      <ContentWidth>
        <h1 className={css.heading}>
         {toolsTitle}
        </h1>
        <p className={css.description}>
          {toolsDescription}
        </p>
        <div className={css.mainContent}>
          <div className={css.leftImage}>
            <img src={expertiseImage?.data?.attributes?.url} alt='image'/> 
          </div>
          <div className={css.grid}>
            {tools.map((tool, index) => (
              <div key={index} className={css.card}>
                <div className={css.cardTitle}>{tool.toolsTitle}</div>
                <p className={css.cardDescription}>{tool.toolsDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default BusinessFeature;
