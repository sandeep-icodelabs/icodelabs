import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React from "react";
import css from "./OpenPosition.module.css";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function OpenPosition({ data }) {
  return (
    <div>
      <ContentWidth>
        <div className={css.jobContainer}>
          {data.map((section, i) => (
            <div key={i} className={css.jobSection}>
              <h2 className={css.jobCategory}>{section.category}</h2>
              {section.jobs.map((job, j) => (
                <div key={j} className={css.jobRow}>
                  <p className={css.jobTitle}>{job.title}</p>
                  <div className={css.jobDetails}>
                    <p>
                      Minimum Experience: <span>{job.experience}</span>
                    </p>
                    <p>
                      Communication: <span>{job.communication}</span>
                    </p>
                  </div>
                  <Link href={job?.route || "#"} className="textBtn">
                    Apply Now <IconCollection name="arrowUpBlue" />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ContentWidth>
    </div>
  );
}
