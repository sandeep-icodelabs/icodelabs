import React from 'react';
import css from './SectionHowDoWeDo.module.css';
import ContentWidth from '../ContentWidth/ContentWidth';

const SectionHowDoWeDo = (props) => { 
    const {workIdea}=props || {};
    const {data = []}=workIdea?.data || {};
    const process = [
        {
            title: "Define Your Ideas",
            description:
                "Analyzing Your Ideas And Intricacies, Our App Development Company Presents The Most Suitable And Result-Driven Solutions That Perfectly Align With Your Business Requirements.",
        },
        {
            title: "Rapid Development",
            description:
                "By combining your active engagement with our expertise, we deliver highly functional, responsive, and visually captivating apps and websites in the defined timeline.",
        },
        {
            title: "Support & Maintenance",
            description:
                "We’re with you every step of the way in your app journey, embracing your challenges and concerns, and providing an expert team to ensure a seamless app experience.",
        },
        {
            title: "Research & Planning",
            description:
                "We always start prepared, conducting in-depth market analysis and formulating sublime strategies to create your project prototype, ensuring a strong foundation to begin with.",
        },
        {
            title: "Testing & Deployment",
            description:
                "Each app and website undergo rigorous testing and improvements to ensure top-notch apps and websites. We integrate advanced technology for an unparalleled user experience.",
        },
    ];

    return (
      <section>
        <ContentWidth>
          <div className={css.howDoWeDo}>
            <div className={`${css.innerTimelineBox} ${css.contentWidth}`}>
              <div className={css.timelineHeading}>
                <div className={css.sectionHeading}>
                  <h2>How Do We Work?</h2>
                </div>
                <p>Process in 5 easy steps</p>
              </div>
              <div className={css.timelineContent}>
                <div className={css.timeline}>
                  {data.map((item, i) => ( 
                    <div
                      className={`${css.containerWrapBox} ${css.steps}`}
                      key={i}
                    >
                      <div className={css.content}>
                        <h3>{item?.attributes?.Title}</h3>
                        <p>{item?.attributes?.Description}</p>
                      </div>
                      <div className={`${css.dateMonthBox} ${css.borderSteps}`}>
                        <div className={css.month}>Step</div>
                        <div className={css.monthDate}>{i + 1}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContentWidth>
      </section>
    );
};

export default SectionHowDoWeDo;