import React from 'react';
import css from './CaseStudySliderCard.module.css';
import Image from 'next/image';
import Slider from 'react-slick';

function CaseStudySliderCard(props) {
    const { projectName, projectDescription, projectImage } = props;

    return (
        <div className={css.casestudyRow}>
            <div className={css.leftSide}>
                <div className={css.title}>CASE STUDY</div>
                <div className={css.projectName}>{projectName}</div>
                <div className={css.projectPlatform}>{projectDescription}</div>
                <div className={css.projectDetail}>
                    <div className={css.resultHeading}>Result</div>
                    <div className={css.resultRow}>
                        <div className={css.higherConversion}>
                            <div className={css.totalCount}>30%</div>
                            <div className={css.titleCount}>Higher Conversion</div>
                        </div>
                        <div className={css.higherConversion}>
                            <div className={css.totalCount}>450k</div>
                            <div className={css.titleCount}>App Download</div>
                        </div>
                    </div>
                </div>
                <div className={css.viewStudyRow}>
                    <button className={css.viewButton}>View Case Study</button>
                    <button className={css.borderButton}>Get a Customized App</button>
                </div>
            </div>
            <div className={css.rightSide}>
                <Image src={projectImage} alt="project-image" />
            </div>
        </div>
    )
}

export default CaseStudySliderCard