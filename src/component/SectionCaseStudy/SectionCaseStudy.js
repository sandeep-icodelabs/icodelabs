"use client";

import React, { useRef, useState } from "react";
import css from "./SectionmCaseStudy.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
// carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";

export default function CaseStudy() {
  const [progress, setProgress] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const totalSlides = swiper.slides.length;
    const currentIndex = swiper.activeIndex + 1; // Swiper's activeIndex is zero-based
    const progressPercentage = (currentIndex / totalSlides) * 100;
    setProgress(progressPercentage);
  };

  return (
    <div className={css.caseStudyContainer}>
      <ContentWidth>
        {/* Carousel Container */}
        <div className={css.caseStudyCarouselContainer}>
          <Swiper
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="caseStudyCarouselWrapper"
          >
            {caseStudyContent.map((i, index) => {
              return (
                <React.Fragment key={i.id}>
                  <SwiperSlide>
                    <div className={css.contentNimgContainer}>
                      <div className={css.carouselContentWrapper}>
                        <span className="subTitle">{i.type}</span>
                        <h4>{i.title}</h4>
                        <p className="contentText">{i.description}</p>

                        <div className={css.infoContentWrapper}>
                          <span className="contentText">Result</span>

                          <div className={css.infoContent}>
                            <div className={css.report}>
                              <h4>{i.results.conversion}</h4>
                              <p className="contentText">
                                {i.results.conversionLabel}
                              </p>
                            </div>

                            <span></span>

                            <div className={css.report}>
                              <h4>{i.results.downloads}</h4>
                              <p className="contentText">
                                {i.results.downloadsLabel}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className={css.btnContainer}>
                          <a
                            href={i?.buttons?.primaryButton?.link}
                            className="primaryBtn"
                          >
                            {i.buttons?.primaryButton?.text}{" "}
                            <IconCollection name="rightArrowTop" />
                          </a>

                          <a
                            href={i.buttons?.secondaryButton?.link}
                            className="outlineBtn"
                          >
                            {i?.buttons?.secondaryButton?.text}{" "}
                            <IconCollection name="rightArrowTop" />
                          </a>
                        </div>
                      </div>

                      <div className={css.carouselContainer}>
                        <Image
                          src={i.image}
                          width={400}
                          height={400}
                          alt={i.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </React.Fragment>
              );
            })}
          </Swiper>
          {/* Caruosel Navigation Button is here */}
          <div className={css.navigationBtn}>
            <button ref={prevRef} className={css.previewBtn}></button>
            <button ref={nextRef} className={css.nextBtn}></button>
          </div>

          {/* Progress Bar */}
          <div className={css.progressBar}>
            <div
              className={css.progressingBar}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
const caseStudyContent = [
  {
    id: 1,
    type: "Case Study",
    title: "Now App",
    description:
      "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase.",
    results: {
      conversion: "30%",
      conversionLabel: "Higher Conversion",
      downloads: "450k",
      downloadsLabel: "App Download",
    },
    buttons: {
      primaryButton: {
        text: "View Case Study",
        link: "#",
      },
      secondaryButton: {
        text: "Get a Customized App",
        link: "https://calendly.com/jaytiwary",
      },
    },
    image:
      "https://cdn.dribbble.com/userupload/17362417/file/original-5ab2d714d0771c9e0db7b7cd21a0e19e.png?resize=1600x1200&vertical=center",
  },
  {
    id: 2,
    type: "Case Study",
    title: "EduLearn Platform",
    description:
      "A scalable e-learning platform built to serve students and instructors with personalized dashboards and real-time progress tracking.",
    results: {
      conversion: "45%",
      conversionLabel: "Increased Engagement",
      downloads: "600k",
      downloadsLabel: "App Installs",
    },
    buttons: {
      primaryButton: {
        text: "View Case Study",
        link: "#",
      },
      secondaryButton: {
        text: "Get a Customized App",
        link: "https://calendly.com/jaytiwary",
      },
    },
    image:
      "https://cdn.dribbble.com/userupload/17362417/file/original-5ab2d714d0771c9e0db7b7cd21a0e19e.png?resize=1600x1200&vertical=center",
  },
  {
    id: 3,
    type: "Case Study",
    title: "HealthSync App",
    description:
      "An all-in-one health tracking mobile application that syncs data across wearable devices and provides AI-driven insights.",
    results: {
      conversion: "50%",
      conversionLabel: "Retention Boost",
      downloads: "750k",
      downloadsLabel: "App Downloads",
    },
    buttons: {
      primaryButton: {
        text: "View Case Study",
        link: "#",
      },
      secondaryButton: {
        text: "Get a Customized App",
        link: "https://calendly.com/jaytiwary",
      },
    },
    image:
      "https://cdn.dribbble.com/userupload/17362417/file/original-5ab2d714d0771c9e0db7b7cd21a0e19e.png?resize=1600x1200&vertical=center",
  },
];
