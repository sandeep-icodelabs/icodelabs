import React from "react";
import css from "./Flutter.module.css";
import Image from "next/image";
import processImage from "@/assets/images/Flutter/developmentProcess.png";

const FlutterAppDevelopmentProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "We begin with in-depth discussions to understand your business goals, target audience, and feature requirements for a seamless Flutter App Development process."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our expert designers create wireframes and interactive prototypes using Material Design principles, ensuring an intuitive and engaging user experience."
    },
    {
      number: "03",
      title: "Development & Coding",
      description: "Our skilled developers leverage Flutter & Dart to build a robust and high-performance app while maintaining a single codebase for iOS and Android."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "We conduct rigorous testing, including functional, performance, and security testing, to deliver a bug-free and optimized Flutter app."
    },
    {
      number: "05",
      title: "Testing & Quality Assurance",
      description: "After thorough testing, we deploy the app to the App Store and Google Play Store, ensuring a smooth release and compliance with all platform guidelines."
    },
    {
      number: "06",
      title: "Post-Launch Support & Maintenance",
      description: "We provide continuous updates, improvements, and technical support to keep your Flutter application running seamlessly."
    }
  ];

  return (
    <div className={css.developmentProcess}>
      <div className={css.processHeader}>
        <h2 className={css.processTitle}>
          Our Flutter App Development Process
        </h2>
        <p className={css.processSubtitle}>
          At icodelabs, we follow a structured and agile approach to Flutter App
          Development to ensure efficiency, quality, and timely delivery.
        </p>
      </div>

      <div className={css.processContent}>
        <div className={css.processSteps1}>
          {processSteps.slice(0, 3).map((step, index) => (
            <div key={index} className={css.processStep}>
              <div className={css.stepNumber}>{step.number}</div>
              <div className={css.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={css.processImage}>
          <Image 
            src={processImage} 
            alt="Flutter Development Process"
         
            objectFit="cover"
          />
        </div>

        <div className={css.processSteps2}>
          {processSteps.slice(3).map((step, index) => (
            <div key={index} className={css.processStep}>
              <div className={css.stepNumber}>{step.number}</div>
              <div className={css.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlutterAppDevelopmentProcess;