"use client";
import React, { useState } from "react";
import css from "./SectionWhyChooseUs.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import Link from "next/link";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <div className={css.WhyChooseUsContainer}>
        <ContentWidth>
          <div className={css.whyCHooseTab}>
            Why <span>Icode</span>labs?
          </div>
          <h2>Why You Should Choose Us</h2>
          <p>
            At icodelabs, we are passionate about creating custom mobile and web
            applications that solve real-world problems. With a team of skilled
            developers, designers, and digital strategists.
          </p>

          <div className={css.contentGridWrapper}>
            {whyChooseUsContent.map((i, index) => {
              return (
                <>
                  <div className={css.boxContent}>
                    <h6 className={css.heading}>{i.title}</h6>

                    <div className={css.contentWrapper}>
                      <p className={css.description}>{i.description}</p>

                      <ul className={css.points}>
                        {i.points.map((value, index) => {
                          return (
                            <>
                              <li key={index}>{value}</li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className={css.whyChooseAccordionWrapper}>
            {whyChooseUsContent.map((item, index) => (
              <div
                key={index}
                className={`${css.accordionItem} ${
                  css[`accordionItem${String(index + 1).padStart(2, "0")}`]
                }`}
              >
                <button
                  className={css.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className={css.dropDownIcons}>
                    {activeIndex !== index ? (
                      <IconCollection name="dropdown" />
                    ) : (
                      <IconCollection name="dropdownUP" />
                    )}
                  </span>
                </button>

                <div
                  className={`${css.accordionBody} ${
                    activeIndex === index ? css.open : ""
                  }`}
                >
                  <div className={css.accordionContent}>
                    <p>{item.description}</p>
                    <ul>
                      {item.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={css.infoCardWrapper}>
            <div className={css.smallbadge}>
              <IconCollection name="whiteMsg" />
            </div>

            <h5>
              Cheers to the work that comes from trusted service providers in
              time.
            </h5>

            <Link className="primaryBtn" href="https://calendly.com/jaytiwary">
              Schedule a Free Strategy Call <span>👋</span>
            </Link>
          </div>
        </ContentWidth>
      </div>
    </>
  );
}

const whyChooseUsContent = [
  {
    title: "Expert in Sharetribe, React, & Custom Marketplaces",
    description:
      "At Icodelabs, we are experts in Sharetribe development, whether it is using Sharetribe flakes for high adaptation or Sharetribe go for a quick launch.",
    points: [
      "Launch faster with Sharetribe, serve solutions with Sharetribe Flex - we handle it with accuracy.",
      "Our React-powered UIs are sharp, responsible and visually striking—providing spontaneous user trips on every device.",
    ],
  },
  {
    title: "End-to-End Development (Design, Development, Deployment)",
    description:
      "We ensure all platforms are designed with mobile users in mind, optimizing for speed, accessibility, and usability across:",
    points: [
      "Design: User travel mapping for viprhruming, UI/UX design, and seamless experiences.",
      "Development: Front-end, back-end, and database solutions, ensuring smooth performance.",
      "Deployment: Customized hosting, cloud integration, and post-launch maintenance.",
    ],
  },
  {
    title: "AI-operated and data-operated solutions",
    description:
      "Integrate AI and data analytics to increase user experience and business growth.",
    points: [
      "AI Chatbots and Customer Assistance Automation",
      "Individual product recommendations",
      "Data-Powered Insights and Reporting Dashboard",
    ],
  },
  {
    title: "Scalable and Secure Architecture",
    description:
      "We design marketplaces, web and mobile apps that can handle thousands of users without experiencing issues. Our approach includes:",
    points: [
      "Modular architecture for easy facility expansion.",
      "Serverless and Cloud Solutions (AWS, Firebase, Digitalocean) for high availability.",
      "Strong safety measures (SSL, encryption, role-based access control).",
    ],
  },
  {
    title: "Mobile-First & Responsive Design",
    description:
      "We ensure that all platforms are designed keeping in mind mobile users, adaptation for speed, access, and purpose.",
    points: [
      "iOS & Android apps (Native & Cross-platform: Flutter, React Native).",
      "Progressive Web Apps (PWA) for app-like web experiences.",
      "Adaptive UI components for all screen sizes.",
    ],
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "We offer continuous monitoring, updates, and performance adaptations to run platforms smoothly.",
    points: [
      "Bug fix and safety patch",
      "User reaction based on facility enhancement",
      "Performance and Server Scaling Solutions",
    ],
  },
];
