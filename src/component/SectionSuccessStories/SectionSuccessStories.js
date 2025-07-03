"use client";

import React, { useRef } from "react";
import css from "./SectionSuccessStories.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import image1 from "../../assets/images/ourApproach/carsouselImg1.svg";
import image2 from "../../assets/images/ourApproach/secondCardImg2.svg";

const SectionSuccessStories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.contentContainer}>
        <h2>Success Stories</h2>
      </div>

      <div className={css.carouselContainer}>
        <div className={`${css.navigationBtn}`}>
          <button ref={prevRef} className={css.previewBtn}></button>
          <button ref={nextRef} className={css.nextBtn}></button>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {cardData.map((i, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={css.carouselCard}>
                    <div className={css.imgContainer}>
                      <Image
                        width={608}
                        height={353}
                        src={i.image}
                        alt={i.title}
                      />
                    </div>

                    <div className={css.contentContainer}>
                      <h4> {i.heading} </h4>
                      <p>{i.description}</p>

                      <Link href={i.btnLink} className="btn">
                        View Case Study
                        <IconCollection name="rightArrowTopGray" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </ContentWidth>
  );
};

export default SectionSuccessStories;

const cardData = [
  {
    heading: "A contemporary Fashion Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    image: "/assests/img/fashionMarketing.png",
    btnLink: "#",
  },
  {
    heading: "Swimming pool Rental Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    image: "/assests/img/poolRenting.png",
    btnLink: "#",
  },
  {
    heading: "A contemporary Fashion Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    image: image1,
    btnLink: "#",
  },
];
