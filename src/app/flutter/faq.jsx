"use client";
import React, { useState } from "react";
import css from "./Flutter.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is a Flutter app development company?",
      answer: "A Flutter app development company specializes in creating mobile applications using Google's Flutter framework. These companies have expertise in developing cross-platform applications that can run on both iOS and Android platforms using a single codebase."
    },
    {
      question: "How many hours does it take to build a Flutter app?",
      answer: "The development time for a Flutter app varies depending on complexity, features, and requirements. A simple app might take 200-300 hours, while complex applications can take 600+ hours. We provide detailed time estimates after understanding your specific project needs."
    },
    {
      question: "Can I use Flutter inside of my existing native app?",
      answer: "Yes, Flutter can be integrated into existing native applications through Flutter modules. This approach, known as Add-to-App, allows you to add Flutter features to your existing iOS or Android application gradually."
    },
    {
      question: "How much does it cost to develop a Flutter app?",
      answer: "The cost of developing a Flutter app depends on various factors including complexity, features, design requirements, and development time. We provide customized quotes based on your specific project requirements and goals."
    },
    {
      question: "Can you convert my existing app into Flutter?",
      answer: "Yes, we can help migrate your existing application to Flutter. Our team has experience in converting native apps to Flutter while maintaining functionality and improving performance."
    },
    {
      question: "How much does it cost to hire a Flutter developer?",
      answer: "The cost of hiring a Flutter developer varies based on experience level, location, and project requirements. We offer flexible engagement models including dedicated developers, project-based hiring, and team augmentation."
    },
    {
      question: "Can we use Flutter for Web development?",
      answer: "Yes, Flutter supports web development. You can create responsive web applications using the same codebase as your mobile app, ensuring consistent user experience across platforms."
    },
    {
      question: "What are Flutter app development services?",
      answer: "Flutter app development services include custom app development, UI/UX design, app testing, deployment, maintenance, and support. We provide end-to-end solutions for businesses looking to build cross-platform applications."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={css.faqSection}>
      <h2 className={css.faqTitle}>FREQUENTLY ASKED QUESTIONS</h2>
      
      <div className={css.faqContainer}>
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`${css.faqItem} ${activeIndex === index ? css.active : ''}`}
          >
            <button 
              className={css.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <div className={css.faqIcon}>
                <IconCollection name={activeIndex === index ? "arrow_down" : "arrow_down"} />
              </div>
            </button>
            
            <div className={css.faqAnswer} style={{
              maxHeight: activeIndex === index ? '1000px' : '0'
            }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;