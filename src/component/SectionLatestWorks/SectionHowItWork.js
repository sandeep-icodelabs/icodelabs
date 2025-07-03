"use client";

import React, { useState } from "react";
import ContentWidth from "../ContentWidth/ContentWidth";
import css from "./SectionHowItWork.module.css";
import IconCollection from "../IconCollection/IconCollection";

export default function SectionHowItWork() {
  const [show, setShow] = useState(1);

  const handleClick = (id) => {
    setShow(id);
  };

  return (
    <ContentWidth>
      <div className={css.SectionHowItWorkWrapper}>
        <div className={css.howItWorkSectionContent}>
          <span>OUR PROCESS</span>
          <h2>How It Works – Our Marketplace Development Process</h2>

          <p>
            Visually represent your step-by-step process using a timeline or
            icons
          </p>
        </div>

        <div className={css.accordionWrapper}>
          {howitworkContent.map((i, index) => {
            return (
              <>
                <div
                  className={`${css.accordionItem} ${
                    show == i.id ? css.activeHeight : ""
                  }`}
                >
                  {/* header part start here */}
                  <div
                    className={css.headerContainer}
                    onClick={() => handleClick(i.id)}
                  >
                    <div className={css.counting}>
                      <span>{i.step}</span>
                    </div>
                    <h6 className={css.accordionTitle}>{i.title}</h6>

                    {/* Show & Hide button */}

                    <button
                      className={`${css.showBtn} ${
                        show !== i.id ? "" : css.activeArrow
                      } `}
                    >
                      <IconCollection name="accordionBtn" />
                    </button>
                  </div>
                  {/* header End here */}

                  {/* content start here */}
                  <div
                    className={`${css.accordionContent} ${
                      show === i.id ? css.accordionContentShow : ""
                    }`}
                  >
                    <p className={css.description}>{i.description}</p>

                    {Array.isArray(i.points) && (
                      <ul>
                        {i.points.map((value, index) => (
                          <li key={index}>
                            <IconCollection name="accordionCheck" />
                            <p className={css.pointTitle}>
                              {value.title}
                              <span>{i.description}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* content end here */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </ContentWidth>
  );
}

const howitworkContent = [
  {
    id: 1,
    step: "01",
    title: "Consultation & Ideation",
    description:
      "Understanding Your Vision & Business Goals. Every successful marketplace starts with a strong foundation. During this phase:",
    points: [
      {
        id: 1,
        title: "Analyze your business model",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    title: "Wireframing & UX/UI Design",
    description:
      "Understanding Your Vision & Business Goals. Every successful marketplace starts with a strong foundation. During this phase:",
    points: [
      {
        id: 1,
        title: "Analyze your business model",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    title: "Development & Testing",
    description:
      "Understanding Your Vision & Business Goals. Every successful marketplace starts with a strong foundation. During this phase:",
    points: [
      {
        id: 1,
        title: "Analyze your business model",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    title: "MVP Launch & Scaling",
    description:
      "Understanding Your Vision & Business Goals. Every successful marketplace starts with a strong foundation. During this phase:",
    points: [
      {
        id: 1,
        title: "Analyze your business model",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    title: "Ongoing Support & Optimization",
    description:
      "Understanding Your Vision & Business Goals. Every successful marketplace starts with a strong foundation. During this phase:",
    points: [
      {
        id: 1,
        title: "Analyze your business model",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
];
