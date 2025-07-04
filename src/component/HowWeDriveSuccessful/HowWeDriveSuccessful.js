"use client";

import React from "react";
import css from "./HowWeDriveSuccessful.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import Image from "next/image";
// carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

function HowWeDriveSuccessful() {
  return (
    <div className={css.howWeDriveSuccessfulContainer}>
      <ContentWidth>
        <div className={css.contentWrapper}>
          <h2>How We Drive Successful Digital Transformation for You</h2>

          <div className={css.textContainer}>
            <h4>
              Whether you’re launching a new platform, upgrading an existing
              one, or scaling with <span>automated and AI</span>— we partner
              with you across the full product journey.{" "}
            </h4>

            <h4>
              Our process combines product thinking, Sharetribe expertise, and
              cutting-edge AI to help you go live faster and smarter.
            </h4>
          </div>
        </div>

        {/* Carousel Container & bg Image is in css */}
        <div className={css.howWeDriveCarouselContainer}>
          {/* ------- Carousel --------- */}
          <Swiper
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[Pagination]}
            className="howWeDriveCarousel"
          >
            {caroulseContent.map((i, index) => {
              return (
                <React.Fragment key={i.id}>
                  <SwiperSlide>
                    <div className={css.imgNcontentContainer} key={index}>
                      <div className={css.carouselContent}>
                        <h4>{i.title}</h4>

                        <p>{i.description}</p>

                        <a href={i.buttonLink} className="primaryBtnWhite">
                          Get Started <IconCollection name="arrowUpBlack" />
                        </a>
                      </div>

                      <div className={css.carouselImage}>
                        <img
                          src={i.image}
                          width={400}
                          alt="{i.title}"
                          className={css.img}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </React.Fragment>
              );
            })}
          </Swiper>
        </div>

        <div className="customOutterPagination">
          <div className="custom-swiper-pagination" />
        </div>

        <div className={css.checkPointsContainer}>
          {checkPoints.map((i, index) => {
            return (
              <>
                <div className={css.checkpointDiv} key={index}>
                  <IconCollection name="blueCircle" />
                  <h5>{i.point}</h5>
                </div>
              </>
            );
          })}
        </div>
      </ContentWidth>
    </div>
  );
}

export default HowWeDriveSuccessful;

const checkPoints = [
  {
    point: `50+ marketplaces delivered`,
  },
  {
    point: (
      <>
        Sharetribe <br /> Certified Team
      </>
    ),
  },
  {
    point: (
      <>
        AI-Ready Development <br /> Process
      </>
    ),
  },
  {
    point: `Global Delivery With Startup Speed`,
  },
];

const caroulseContent = [
  {
    id: 1,
    title: "01.  Product Discovery & Strategy",
    description:
      "We start by understanding your business goals, target users, and platform vision. Together, we map out a clear product plan with the right technology stack and features for your needs.",
    buttonText: "Get Started",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Product Discovery & Strategy.png",
  },
  {
    id: 2,
    title: "01. Rapid Prototyping & MVP Development",
    description:
      "We craft user-centric designs that are intuitive and engaging, ensuring your users have a seamless experience across all devices.",
    buttonText: "Explore Designs",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Rapid Prototyping & MVP Developmen.png",
  },
  {
    id: 3,
    title: "03. AI & Integration Layer",
    description:
      "Our engineers build scalable and high-performance solutions tailored to your business needs, using the latest technologies.",
    buttonText: "Build Now",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/AI & Integration Layer.png",
  },
  {
    id: 4,
    title: "04. Scale, Support & Continuous Improvement",
    description:
      "We ensure your product works flawlessly through rigorous testing processes, identifying and resolving issues before launch.",
    buttonText: "Test It",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Scale, Support & Continuous Improvement.png",
  },
];
