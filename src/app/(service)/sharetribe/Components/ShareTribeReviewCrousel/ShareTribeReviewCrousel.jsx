"use client";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React, { useRef } from "react";
import css from "./ShareTribeReviewCrousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function ShareTribeReviewCrousel() {
  const prevRefDesktop = useRef(null);
  const nextRefDesktop = useRef(null);

  return (
    <div>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentNnavigationBtn}>
          <h2>Why our customers think we’re the best</h2>

          <div className={`${css.navigationBtn}`}>
            <button ref={prevRefDesktop} className={css.previewBtn}></button>
            <button ref={nextRefDesktop} className={css.nextBtn}></button>
          </div>
        </div>
      </ContentWidth>

      <div className={css.reviewCarouselWrapper}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          onSwiper={(swiper) => {
            // Ensure buttons are available before assigning
            setTimeout(() => {
              if (
                prevRefDesktop.current &&
                nextRefDesktop.current &&
                swiper?.params?.navigation
              ) {
                swiper.params.navigation.prevEl = prevRefDesktop.current;
                swiper.params.navigation.nextEl = nextRefDesktop.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          className="shareTribeReview"
          breakpoints={breakPoints}
        >
          {reviewData.map((i, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={css.reviewCard}>
                    <div className={css.imgContainer}>
                      <Image width={100} height={30} alt="..." src={i.logo} />
                    </div>
                    <IconCollection name="qutoquoteGray" />
                    <p className={css.reviewContent}>{i.content}</p>

                    <div className={css.authorContainer}>
                      <Image width={50} height={50} src={i.img} alt="..." />

                      <div>
                        <h6>{i.name}</h6>
                        <p>{i.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>

      {/* <div className={`${css.navigationBtn} ${css.dNoneDesktop}`}>
        <button ref={prevRefMobile} className={css.previewBtn}></button>
        <button ref={nextRefMobile} className={css.nextBtn}></button>
      </div> */}
    </div>
  );
}

const reviewData = [
  {
    logo: "/assests/reviewlogo/joova.svg",
    content: `Jay did an excellent job with our website development project. He delivered the project tasks as expected and on time, and his pricing was very reasonable. He also made suggestions that I found very helpful. I will definitely hire him again when we need front or backend development work done.`,
    img: "/assests/tribeReview/image-1.png",
    name: "Michael Andrews",
    position: "Founder & CEO",
  },
  {
    logo: "/assests/reviewlogo/coco.svg",
    content: `It was an out most pleasure working with Jay. Highly skilled, professional and passionate about what he does. Jay's programming skills have helped our startup come to fruition and I highly recommend him for any project which I believe will be delivered to a high standard.`,
    img: "/assests/tribeReview/image-3.png",
    name: "Alia Kon",
    position: "Founder & CEO",
  },
  {
    logo: "/assests/reviewlogo/lulocal.svg",
    content: `Jay did an excellent job with our website development project. He delivered the project tasks as expected and on time, and his pricing was very reasonable. He also made suggestions that I found very helpful. I will definitely hire him again when we need front or backend development work done.`,
    img: "/assests/tribeReview/image-2.png",
    name: "Peter Parker",
    position: "Founder & CEO",
  },
  {
    logo: "/assests/reviewlogo/promo.svg",
    content: `“It was an out most pleasure working eith Jay. highly skilled, professional and passionate about what he does. Jay's programming skills has helped our startup come to fruition and I highly recommend him for any project which i believe will be delivered to a high standard”`,
    img: "/assests/tribeReview/image-2.png",
    name: "Mike G",
    position: "Founder & CEO",
  },

  {
    logo: "/assests/reviewlogo/joova.svg",
    content: `Jay did an excellent job with our website development project. He delivered the project tasks as expected and on time, and his pricing was very reasonable. He also made suggestions that I found very helpful. I will definitely hire him again when we need front or backend development work done.`,
    img: "/assests/tribeReview/image-2.png",
    name: "Peter Parker",
    position: "Founder & CEO",
  },
  {
    logo: "/assests/reviewlogo/lulocal.svg",
    content: `“It was an out most pleasure working eith Jay. highly skilled, professional and passionate about what he does. Jay's programming skills has helped our startup come to fruition and I highly recommend him for any project which i believe will be delivered to a high standard”`,
    img: "/assests/tribeReview/image-2.png",
    name: "Mike G",
    position: "Founder & CEO",
  },
];

const breakPoints = {
  0: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 2.4, spaceBetween: 20 },
  1200: { slidesPerView: 2.9, spaceBetween: 20 },
  1400: { slidesPerView: 3.8, spaceBetween: 20 },
  1800: { slidesPerView: 4.8, spaceBetween: 20 },
};
