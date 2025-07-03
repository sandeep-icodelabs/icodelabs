"use client";
import React, { useState, useRef } from "react";
import css from "./ShareTribeAccordionSection.module.css";
// import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function ShareTribeAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse if same index
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={css.bgWrapper}>
      <div className={css.glowbgLeft} /> <div className={css.glowbgRight} />
      <ContentWidth>
        {/* ...glow bg and contentHeader */}
        <div className={css.contentWrapper}>
          <h2>Powerful Add-ons & Integrations for Your Sharetribe Platform</h2>
          <p>
            Every business is different. That’s why we offer a wide range of
            optional modules to make your marketplace smarter, faster, and
            easier to manage.
          </p>
        </div>
        <div className={css.accordionWrapper}>
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${css.accordionBox} ${
                  isOpen ? css.openAccordionBox : ""
                }`}
              >
                <div
                  className={css.titleNbtn}
                  onClick={() => handleToggle(index)}
                >
                  <h5>{item.heading}</h5>
                  <IconCollection
                    name={isOpen ? "closeBtnBlue" : "openBtnBlue"}
                  />
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`${css.contentBox} ${
                    isOpen ? css.contentBoxShow : ""
                  }`}
                >
                  <h5>{item.title}</h5>
                  <div>
                    <span className="subTitle">{item.ptTitle}</span>
                    <ul>
                      {item.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentWidth>
    </div>
  );
}

const accordionData = [
  {
    heading: "AI-Enabled Marketplace",
    title:
      "Integrate GPT-powered assistants for onboarding, listing creation, or smart support.",
    ptTitle: "What do you get as the result?",

    points: [
      "Everything works as it should",
      "Easy website maintenance and scalability due to Best Practice",
      "Overcome Webflow limitations by using custom code",
      "Convenient CMS, allowing you to manage content on your own.",
      "Eye-catching social links set up using Open Graph",
    ],
  },
  {
    heading: "Custom Multiple-Tier Pricing",
    title: "",
    ptTitle: "",
    points: ["", "", "", ""],
  },
  {
    heading: "Shopify/Woocommerce product sync",
    title: "",
    ptTitle: "",
    points: ["", "", "", ""],
  },
  {
    heading: "Subscription Payments",
    title: "",
    ptTitle: "",
    points: ["", "", "", ""],
  },
  {
    heading: "Discount Codes (Basic)",
    title: "",
    ptTitle: "",
    points: ["", "", "", ""],
  },
];
