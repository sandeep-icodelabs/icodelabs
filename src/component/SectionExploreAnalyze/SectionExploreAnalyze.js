"use client";
import React, { useState } from "react";
import css from "./SectionExploreAnalyze.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";

const SectionExploreAnalyze = () => {
  const [activeTab, setActiveTab] = useState(0);

  const buttons = [
    { text: "Explore & Analyze Design" },
    { text: "Design" },
    { text: "Engineer" },
    { text: "Validate & Release" },
    { text: "Iterate & Scale" },
    { text: "Go Live Maintain" },
  ];

  // listing data
  const exploreAnalyzeData = [
    {
      heading: "Explore & Analyze",
      description:
        "It starts with idea exploration with the stakeholders leading to deep dive into the requirements. The project manager leading the team collaborates with the stakeholder and team members to refine and prioritise the product backlog. The key take away from this are:",
      labels: [
        "Scope definitions",
        "High level user stories",
        "Scrum team and sprints defined",
        "Setting up priorities (MoSCoW)",
        "Validation of assumptions",
      ],
    },
    {
      heading: "Design",
      description:
        "User interface design along with the branding guidelines, crafting the elements, and integrating them into a click-through prototype with a clear focus on user experience. Stakeholders reviews & gives acceptance screen by screen. The key take away from this are:",
      labels: [
        "Click through prototype",
        "User interface design",
        "Team & stakeholders have validated the design",
        "Branding / Interface design documents",
      ],
    },
    {
      heading: "Engineer",
      description:
        "Starting with the system design and architectural setup, the team starts coding and delivering the sprint backlog. The scrum team collaborates within the sprint and runs the design, code, and test cycle within the sprint. Sprint plan meetings, Daily standup's & review meetings are done as part of the process. The key take away from this are:",
      labels: [
        "System design document",
        "Deliverable product",
        "Refined product backlog",
        "Sprint delivery report",
        "Source Code Repository",
        "API documentations",
      ],
    },
    {
      heading: "Validate & Release",
      description:
        "Inspect and Adapt are the two key focus at this stage. User acceptance testing and validation of acceptance tests with stakeholders to release the sprint deliverables. The key takeaway are:",
      labels: [
        "Update the product backlog",
        "Refined product backlog",
        "Validated product release",
      ],
    },
    {
      heading: "Iterate & Scale",
      description:
        "Once all the sprint iterations are completed and the expected product is released. The support system starts with agreed SLA. The system is ready to go live, the takeaways are:",
      labels: [
        "Refined product backlog",
        "Validated product release",
        "Refined product backlog",
        "Validated product release",
      ],
    },
    {
      heading: "Go Live Maintain",
      description:
        "Go live and maintain the system post-release ensuring smooth deployment, performance monitoring, and handling any critical issues. The takeaways are:",
      labels: [
        "Deployment successful",
        "Monitoring & logs active",
        "SLA maintenance started",
      ],
    },
  ];

  const activeData = exploreAnalyzeData[activeTab];

  return (
    <ContentWidth>
      <div className={css.exploreAnalyzeWrapper}>

        <h2 className={css.exploreHeading}>
          Transparency, Inspection & Adaptation
        </h2>
        
        <p className={css.exploreDescription}>
          Our absolute focus is on your product and to bring the best we ensure
          the culture of communication, collaboration & transparency.
        </p>

        <div className={css.exploreButtonWrapper}>
          {buttons.map((value, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${css.explorAnalyzeButton} ${
                activeTab === index ? css.activeButton : ""
              }`}
            >
              {value.text}
            </button>
          ))}
        </div>

        <div className={css.exploreAnalyzeWrapperBox}>
          <div className={css.exploreAnalyzeContainer}>
            <div className={css.leftExploreAnalyzeContainer}>
              <h1 className={css.exploreSubHeading}>{activeData.heading}</h1>
              <p className={css.exploreSubDescription}>
                {activeData.description}
              </p>
              {/* listing data */}
              <ul>
                {activeData.labels.map((list, index) => (
                  <li className={css.radioListWrapper} key={index}>
                    <IconCollection name="blueCircle" />
                    <div className={css.listTitle}>{list}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.rightExploreAnalyzeContainer}></div>
          </div>
        </div>
      </div>
    </ContentWidth>
  );
};

export default SectionExploreAnalyze;
