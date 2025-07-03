"use client";

import React, { useRef } from "react";
import css from "./ExploreCarousel.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function ExploreCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.contentContainer}>
        <span>
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.5" cy="5" r="5" fill="#0075F2" />
          </svg>
          Latest design work
        </span>
        <h2>Explore Portfolio</h2>
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
            768: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {carouselData.map((i, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={css.carouselCard}>
                    <div className={css.imgContainer}>
                      <Image
                        width={608}
                        height={353}
                        src={i.img}
                        alt={i.title}
                      />
                    </div>

                    <div className={css.contentContainer}>
                      <h4> {i.title} </h4>
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
}

const carouselData = [
  {
    img: "/assests/img/fashionMarketing.png",
    title: "A contemporary Fashion Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    btnLink: "#",
  },
  {
    img: "/assests/img/poolRenting.png",
    title: "Swimming pool Rental Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    btnLink: "#",
  },
  {
    img: "/assests/img/poolRenting.png",
    title: "Swimming pool Rental Marketplace",
    description:
      "Custom Sharetribe build with deposits, calendar sync, and Stripe split payouts. Launched in just 6 weeks and scaled to 500+ listings in 3 months.",
    btnLink: "#",
  },
];
