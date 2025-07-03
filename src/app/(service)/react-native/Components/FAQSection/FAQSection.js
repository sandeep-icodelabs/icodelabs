"use client";
import React, { useState } from "react";
import css from "./FAQSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function FAQSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <ContentWidth>
        <div className={css.contentContainer}>
          <span className="subTitle">🚀 FAQs </span>
          <h2>You Ask, We Answer</h2>
        </div>

        <div className={css.faqContainer}>
          {data?.map((item, index) => (
            <div key={index} className={css.item}>
              <div className={css.question} onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className={css.icon}>
                  <IconCollection
                    name={activeIndex !== index ? "circlePlus" : "circleMinus"}
                  />
                </span>
              </div>
              {activeIndex === index && (
                <p className={css.answer}>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </ContentWidth>
    </>
  );
}
