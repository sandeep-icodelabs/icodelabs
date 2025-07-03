import React from "react";
import css from "./SectionDrivingtheNextWave.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";

const DrivingtheNextWave = ({ expProcess }) => {
  //   const { data = [] } = props.expProcesse || {};
  return (
    <section className={css.container}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />

      <ContentWidth>
        <div className={css.digitalWrapper}>
          <div className={css.digitalInnerWrapper}>
            {/* left section */}
            <div className={css.digitalLeftWrapper}>
              <h2>Driving the Next Wave of Digital Transformation with AI</h2>
              <h6>
                The future of digital platforms isn't just code — it's
                intelligence.
              </h6>
              <p>
                We help startups, scale-ups, and enterprises modernize their
                platforms by integrating AI across every layer — from workflows
                and user experience to decision-making and automation. Whether
                you're building a new marketplace, upgrading an existing
                product, or reimagining how your team works — we're your AI
                transformation team.
              </p>
            </div>

            {/* right section */}
            <div className={css.digitalRightWrapper}>
              {data.map((value, index) => {
                return (
          
                    <div key={index} className={css.digitalCardContainer}>
                      <div className={css.digitalCircle}>
                        <IconCollection name="AiIcon" />
                      </div>

                      <div className={css.strategyWrapper}>
                        <h5>{value?.strategyHeading}</h5>
                        <p
                          className={` contentText ${css.strategyDescriptionBox}`}
                        >
                          {value?.strategyDescription}
                        </p>

                        <p className={`contentText ${css.strategyDescription}`}>
                          {value?.strategyDescriptionSecond}
                        </p>
                      </div>
                    </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default DrivingtheNextWave;

const data = [
  {
    // icon: "",
    strategyHeading: "AI Strategy & Product Thinking",
    strategyDescription:
      "We guide your team through the AI landscape — helping identify practical use cases, choose the right tools, and design scalable, human-centered AI systems.",
    strategyDescriptionSecond:
      "Prompt design, use case validation, and rapid prototyping.",
  },
  {
    // icon: "",
    strategyHeading: "AI-Augmented Development",
    strategyDescription:
      "We embed generative AI and automation directly into your platform — using GPT, vector search, OpenAI APIs, and more.",
    strategyDescriptionSecond:
      "Think smarter platforms, not just smarter chatbots.",
  },
  {
    // icon: "",
    strategyHeading: "Workflow & Ops Automation",
    strategyDescription:
      "Reimagine your internal operations using AI — auto-responses, content generation, report summarization, internal tools, and more.",
    strategyDescriptionSecond:
      "Save time. Reduce manual work. Increase team efficiency.",
  },
  {
    // icon: "",
    strategyHeading: "AI Analytics & Insights",
    strategyDescription:
      "We help you extract actionable insights using AI — from auto-generated dashboards to personalized trend reporting and performance summaries.",
    strategyDescriptionSecond: "Let AI turn your data into decisions.",
  },
];
