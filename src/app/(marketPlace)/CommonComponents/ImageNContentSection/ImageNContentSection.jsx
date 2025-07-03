"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import css from "./ImageNContentSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function ImgNcontentVertical({ data }) {
  return (
    <div className={css.ImgNcontentVertical}>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContianer}>
          <h2>{data.title}</h2>
          <p>{data.para}</p>
        </div>

        <div className={css.imgContainer}>
          <Image
            src={data.img}
            width={data.width}
            height={data.height}
            alt={data.title}
          />
        </div>
      </ContentWidth>
    </div>
  );
}

export function CTASection({ data }) {
  return (
    <section className={css.weWillBuildSection}>
      <Image
        src="/assests/img/curveLine.svg"
        width={1924}
        height={366}
        quality={100}
        className={css.curveImg}
      />
      <div className={css.glowEffectOne} />
      <div className={css.glowEffectTwo} />
      <div className={css.glowEffectThree} />

      <div className={css.contentContainer}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <Link href={data.btnLink}>
          Explore Our Services <span>👋</span>
        </Link>
      </div>
    </section>
  );
}

export function ImgNcontentHorizontal({ data }) {
  return (
    <section className={css.ImgNcontentHorizontalSection}>
      <ContentWidth>
        <div className={css.contentContainer}>
          <h2>Who Is It For?</h2>
          <p>
            Our Mission is segregate the project responsibilities for both
            clients and our employees equally.
          </p>
        </div>

        <div className={css.flexCardWrapper}>
          {data.map((i, idx) => {
            return (
              <>
                <div className={css.itemDiv}>
                  <Image src={i.img} width={648} height={500} alt={i.title} />

                  <div className={css.contentContainer}>
                    <h2>{i.title}</h2>
                    <p>{i.content}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </ContentWidth>
    </section>
  );
}

0;
export function GridCardWrapper({ data, ctaRequired }) {
  return (
    <section className={css.gridCardContainerSection}>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContainer}>
          <h2>Key Features of a Rental Marketplace Often Include</h2>
        </div>

        <div className={css.gridContainer}>
          {data.map((i, index) => (
            <div key={index} className={css.cardItem}>
              <Image src={i.img} width={452} height={300} />

              <div className={css.cardContent}>
                <h6>{i.title}</h6>
                <p>{i.description}</p>
              </div>
            </div>
          ))}

          {ctaRequired ? (
            <div className={css.ctaCardWrapper}>
              <h3>Let’s Build Something Extraordinary Together</h3>
              <Link href={"#"} className="primaryBtn">
                Say Hello <span>👋</span>
              </Link>
            </div>
          ) : null}
        </div>
      </ContentWidth>
    </section>
  );
}

export function IconTable({ data }) {
  return (
    <>
      <ContentWidth className={css.iconTableWrapper}>
        <h2>Powerful integrations for smarter engagement</h2>
        <p>
          A rental marketplace allows users to lend or lease items for a fixed
          duration
        </p>

        <div className={css.tableContainer}>
          {data.map((i, index) => {
            return (
              <div key={index} className={css.itemBox}>
                <Image src={i.img} width={100} height={100} alt={i.title} />
                <p>{i.title}</p>
              </div>
            );
          })}
        </div>
      </ContentWidth>
    </>
  );
}

export function FeatureSectionGrid({ data }) {
  return (
    <>
      <div className={css.featureSectionGridWrapper}>
        <ContentWidth>
          <h2>AI Features of a Rental Marketplace Often Include</h2>

          <div className={css.columnGrid}>
            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardOne}`}>
                <IconCollection name={"trajectoryDotted"} />

                <div className={css.contentContainer}>
                  <span>AI</span>
                  <h1>Enhancements</h1>
                  <h5>Streamline your marketing with powerful automation.</h5>
                </div>

                <IconCollection name={"trajectoryDotted"} />
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.cardTwo} ${css.commonCard}`}>
                <h4>{data[0].cardTwo.title}</h4>
                <h6>{data[0].cardTwo.subHeading}</h6>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardFour}`}>
                <Image width={91} height={136} src={data[0].cardFour.img} />

                <div>
                  <h4>{data[0].cardFour.title}</h4>
                  <h6>
                    <span>Provides instant, intelligent</span> responses to user
                    queries, streamlining <span>support.</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardThree}`}>
                {/* <Image
                width={91}
                height={136}
                src="/assests/img/gradientRobot.svg"
              /> */}

                <div>
                  <h4>{data[0].cardThree.title}</h4>
                  <h6>{data[0].cardThree.subHeading}</h6>
                </div>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardFive}`}>
                <Image
                  width={205}
                  height={data[0]?.cardFive?.imgWidth || 178}
                  src={data[0].cardFive.img}
                />

                <div>
                  <h4>{data[0].cardFive.title}</h4>
                  <h6>{data[0].cardTwo.subHeading}</h6>
                </div>
              </div>
            </div>
          </div>
        </ContentWidth>
      </div>
    </>
  );
}

export function ImageNcarousel({ data }) {
  const [swiperText, setSwiperText] = useState(null);
  const [swiperImages, setSwiperImages] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Force update swiper navigation once DOM refs are ready
  useEffect(() => {
    if (
      swiperText &&
      swiperText.params &&
      swiperImages &&
      swiperImages.params &&
      prevRef.current &&
      nextRef.current
    ) {
      [swiperText, swiperImages].forEach((swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      });
    }
  }, [swiperText, swiperImages]);

  return (
    <div>
      <div className={`${css.glowBg}`}>
        {/* Navigation Buttons */}

        <div className={`${css.leftCarouselDiv}`}>
          {/* TEXT CAROUSEL */}
          <Swiper
            loop={true}
            modules={[Controller, Navigation]}
            slidesPerView={1}
            controller={{ control: swiperImages }}
            onSwiper={setSwiperText}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="featureCarouselMarketplace"
          >
            {data.map((i, index) => (
              <SwiperSlide key={`text-${index}`}>
                <div className={css.reviewWrapper}>
                  <div className={css.topContent}>
                    <h3>{i.Companyname}</h3>
                    <div>
                      <IconCollection name="grayQuote" />
                      <h4>{i.review}</h4>
                    </div>
                  </div>
                  <div className={css.bottomContent}>
                    <span className="subTitle">{i.name}</span>
                    <p>{i.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={css.btnNnavigation}>
            <Link href="" className="outlineBtn">
              Visit Case Study <IconCollection name="rightArrowTop" />
            </Link>

            <div className={css.navButtons}>
              <button ref={prevRef} className={css.navBtn}>
                <IconCollection name={"whiteArrowRight"} />
              </button>
              <button ref={nextRef} className={css.navBtn}>
                <IconCollection name={"whiteArrowRight"} />
              </button>
            </div>
          </div>
        </div>

        <div className={css.rightCarouselDiv}>
          {/* IMAGE CAROUSEL */}
          <Swiper
            loop={true}
            modules={[Controller, Navigation]}
            breakpoints={{
              0: { spaceBetween: 20, slidesPerView: 1.2 },
              600: { spaceBetween: 20, slidesPerView: 1.4 },
              1024: { spaceBetween: 20, slidesPerView: 1.6 },
            }}
            controller={{ control: swiperText }}
            onSwiper={setSwiperImages}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="featureCarouselMarketplace"
          >
            {data.map((i, index) => (
              <SwiperSlide key={`img-${index}`}>
                <Image
                  src={i.img}
                  alt={`Slide ${index}`}
                  width={648}
                  height={593}
                  className={css.CarouselImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default function ImgNFullImage({ data }) {
  return (
    <div className={css.ImgNFullImageWrapper}>
      <div className={css.leftContainer}>
        <div>
          {/* <IconCollection name="shareTribeWhite" /> */}
          <h2>{data.title}</h2>
          <p>{data.content}</p>

          <Link href={data.btnLink} className="primaryBtnWhite">
            Start with Sharetribe <IconCollection name="arrowUpBlack" />
          </Link>
        </div>
      </div>
      <div
        className={css.rightContainer}
        style={{
          backgroundImage: "url(/assests/img/femaleWorkingOnLaptop.png",
        }}
      ></div>
    </div>
  );
}
