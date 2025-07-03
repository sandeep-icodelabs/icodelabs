import React from "react";
import css from "./Flutter.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const WhyChooseFlutter = () => {
  const features = [
    {
      icon: "codebase",
      title: "Single Codebase, Multiple Platforms",
      description:
        "Develop for both iOS and Android with a single codebase, saving time and cost.",
    },
    {
      icon: "rocket-2",
      title: "Faster Development & Deployment",
      description:
        "With hot reload, developers can instantly see changes, speeding up the development process.",
    },
    {
      icon: "performance",
      title: "High Performance",
      description:
        "Flutter apps run smoothly with native-like speed and responsiveness.",
    },
    {
      icon: "design",
      title: "Beautiful & Custom UI",
      description:
        "Pre-built rich widgets enable stunning, consistent designs across all devices.",
    },
    {
      icon: "clock-2",
      title: "Reduced Time to Market",
      description:
        "Streamlined development and fewer bugs ensure quicker app launches.",
    },
  ];

  return (
    <div className={css.whyChooseFlutter}>
      <div className={css.whyChooseHeader}>
        <h2 className={css.whyChooseTitle}>
          Why Choose Flutter for Your App Development?
        </h2>
        <p className={css.whyChooseSubtitle}>
          Flutter, powered by Google, is a leading cross-platform framework that
          offers
        </p>
      </div>

      <div className={css.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={css.featureCard}>
            <div className={css.featureIcon}>
              <IconCollection name={feature.icon} />
            </div>
            <h3 className={css.featureTitle}>{feature.title}</h3>
            <p className={css.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseFlutter;
