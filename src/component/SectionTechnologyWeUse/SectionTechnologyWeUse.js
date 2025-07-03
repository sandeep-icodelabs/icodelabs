// app/page.tsx or pages/index.tsx
"use client";

import React, { useState } from "react";
import css from "./SectionTechnologyWeUse.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SectionTechnologyWeUse = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (idCheck) => {
    setActiveTab(idCheck);
  };

  return (
    <div className={css.tecnocontainer}>
      <ContentWidth>
        <h2>Technologies We Use</h2>
        <p>
          We leverage the latest technologies to enhance efficiency,
          scalability, and innovation. Our tools and platforms ensure seamless
          performance, security, and a superior user experience.
        </p>

        {/* --------------- */}
        <div className={css.technoWrapper}>
          <div className={css.accordionMenu}>
            {tabData.map((i, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`${css.tabContent} ${
                      activeTab === i.id ? css.activeTab : ""
                    }`}
                    onClick={() => handleClick(i.id)}
                  >
                    <h5>{i.category}</h5>

                    <IconCollection name="rightArrowTop" />
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className={css.accordionContent}>
            {tabData[activeTab].contents.length > 0
              ? tabData[activeTab].contents.map((i, index) => {
                  return (
                    <React.Fragment>
                      <div className={css.AccordionContentPointWrapper}>
                        <IconCollection name="technoList" />
                        <div>
                          <h6>{i.title}</h6>
                          <p>{i.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              : "No Content Present"}
          </div>
        </div>
      </ContentWidth>
      <div className={css.tabCarouselWrapper}>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={10}
          className="technoCarousel"
        >
          {tabData.map((tab) => (
            <SwiperSlide key={tab.id} className={css.tabSlide}>
              <div className={css.tabCard}>
                <div className={css.tabHeader}>{tab.category}</div>
                <div className={css.tabContent}>
                  {tab.contents.map((item, idx) => (
                    <div key={idx} className={css.tabItem}>
                      <div className={css.checkIcon}>
                        <IconCollection name="technoList" />
                      </div>
                      <div className={css.itemInfo}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionTechnologyWeUse;

const tabData = [
  {
    id: 0,
    category: "Marketplace & Platform Frameworks",
    contents: [
      {
        title: "Stripe / Stripe Connect",
        description: "Payments, split payouts, and subscriptions",
      },
      {
        title: "Sharetribe Web Template",
        description: "Customizable React frontend for Sharetribe",
      },
      {
        title: "Sharetribe- Icodelabs Mobile App Template",
        description:
          "Customizable ReactNative based frontend for Sharetribe based mobile apps",
      },
      {
        title: "Custom Stack",
        description: "Built with Node.js, Nextjs, React, MongoDB, and more",
      },
    ],
  },
  {
    id: 1,
    category: "AI & Machine Learning",
    contents: [
      {
        title: "tab2",
        description: "working",
      },
    ],
  },
  {
    id: 2,
    category: "Mobile App Development",
    contents: [
      {
        title: "tab3",
        description: "working",
      },
    ],
  },
  {
    id: 3,
    category: "Integrations, APIs & Workflow Automation",
    contents: [
      {
        title: "tab4",
        description: "working",
      },
    ],
  },
  {
    id: 4,
    category: "Backend, Infrastructure & Serverless",
    contents: [
      {
        title: "tab5",
        description: "working",
      },
    ],
  },
  {
    id: 5,
    category: "JAMstack & Frontend Technologies",
    contents: [
      {
        title: "tab6",
        description: "working",
      },
    ],
  },
];
