"use client";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React from "react";
import css from "./service.module.css";

const BusinessColumn = (props) => {
  const { services,devlopmentTitle,developmentDescription } = props; 
  return (
    <ContentWidth>
      <div className={css.businessColumn}>
        <h1 className={css.heading}>{devlopmentTitle}</h1>
        <p className={css.description}>{developmentDescription}</p>
        <div className={css.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={css.serviceCard}>
              <div className={css.serviceIcon}>
                <img
                  src={service?.TImage?.data[0]?.attributes.url}
                  alt="Feature Image"
                /> 
              </div>
              <div className={css.serviceTitle}>{service.Servicetitle}</div>
              <p className={css.serviceDescription}>
                {service.ServiceDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContentWidth>
  );
};

export default BusinessColumn;
