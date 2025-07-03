import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React from "react";
import css from "./OthervsIcodeSection.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function OthervsIcodeSection() {
  return (
    <ContentWidth>
      <div className={css.contentContainer}>
        <h2>Other vs Icodelabs</h2>
        <p>
          Say goodbye to the traditional design and inconvenient prices. We work
          as an extension part of your team!
        </p>
      </div>

      <div className={css.cardWrapper}>
        <div className={css.cardOne}>
          <span className="subTitle">Kill Your Time</span>
          <h4>Regular Agency</h4>

          <div className={css.pointWrapper}>
            {crossPoints.map((i, index) => {
              return (
                <p className={css.points}>
                  <IconCollection name="redCross" />
                  {i}
                </p>
              );
            })}
          </div>
        </div>

        <div className={css.cardTwo}>
          <span className="subTitle">THE BEST SOLUTION</span>
          <h4>
            <IconCollection name="icodeLogo" />
            codelabs
          </h4>

          <div className={css.pointWrapper}>
            {greenPoints.map((i, index) => {
              return (
                <p className={css.points}>
                  <IconCollection name="blueTick" />
                  {i}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </ContentWidth>
  );
}

const crossPoints = [
  "Slow and pricy",
  "Miscommunication",
  "Lack of transparency",
  "Hidden charges",
  "Poor-quality design",
  "Limited revisions",
  " Unrealistic deadlines",
];

const greenPoints = [
  "Fast and Affordable",
  "Clear Communication",
  "Always Transparent",
  "Fixed Charges",
  "High-Quality Design",
  "Unlimited Edits",
  "Deadline According to Your Preferences",
];
