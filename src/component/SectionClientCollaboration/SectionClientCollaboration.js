"use client";
import React, { useState } from "react";
import css from "./SectionClientCollaboration.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";

const ScetionClientCollaboration = () => {

  //listing data
  const listingData = [
    { label: "Daily standup calls" },
    { label: "Weekly progress reports" },
    { label: "Project boards (ClickUp / Notion / Jira/ Zoho)" },
    { label: "Dedicated Slack channel" },
    { label: "Quick turnarounds and same-day issue response" },
  ];

  return (
    <ContentWidth>
      <div className={css.clientCollaborationWrapper}>
        <h1 className={css.clientCollaborationHeading}>
          Built With You — Not Just For You
        </h1>

        <div className={css.clientCollaborationContainer}>
          {/* left section */}
          <div className={css.leftClientColloboration}></div>

          {/* right section */}
          <div className={css.rightClientColloboration}>
            <h3 className={css.rightClientHeading}>Client Collaboration</h3>
            <p className={css.rightClientDescription}>
              Transparency and collaboration are built into every project.
              You’ll always know what we’re working on, what’s next, and where
              your feedback fits in.
            </p>

            {/* listing data */}
            <ul>
              {listingData.map((item, index) => {
                return (
                  <li className={css.listingDataWrapper} key={index}>
                    <IconCollection name="technoList" />
                    <label className={css.listingTitle}>{item.label}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </ContentWidth>
  );
};

export default ScetionClientCollaboration;
