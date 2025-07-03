"use client";
import React from "react";
import css from "./SectionFaq.module.css";
import Collapsible from "react-collapsible";
import ContentWidth from "../ContentWidth/ContentWidth";

const SectionFaq = ({ faqData = [], className }) => {
  return (
    <ContentWidth className={className}>
              <h1 className={css.title}>Frequently Asked Questions</h1>
      <section className={css.faqContent}>

        {faqData.map((faq, index) => (
          <div key={index} className={css.faqText}>
            <Collapsible trigger={faq.Question}>{faq?.Answer}</Collapsible>
          </div>
        ))}
      </section>
    </ContentWidth>
  );
};

export default SectionFaq;
