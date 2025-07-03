"use client";

import React from "react";
import css from "./SectionTestimonials.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
// System Icon library
import IconCollection from "../IconCollection/IconCollection";
// Images
import Image from "next/image";
import logo from "../../assets/imgs/logo/logo-dark.svg";
// carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function SectionTestimonials() {
  const screenWidth = typeof window !== "undefined" && window.innerWidth;

  return (
    <div>
      <ContentWidth>
        <div className={css.cardContainer}>
         
          <div className={css.firstCard}>
            <div>
              <Image src={logo} width={148} height={35} alt=".." />
              <h2>Success Stories</h2>
            </div>

            <p>
              Our work speak for itself, but our clients say it even better.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            rewind={false}
            pagination={screenWidth <= 600 ? true : false}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.4 },
              1024: { slidesPerView: 3 },
            }}
            className="reviewCarousel customPagination"
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
          >
            {testimonialsContent.map((i, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className={css.carouselCard}>
                      <div className={css.starNtextimonialText}>
                        {/* stars */}
                        <div className={css.StarsContainer}>
                          <IconCollection name="ratingStars" />
                          <IconCollection name="ratingStars" />
                          <IconCollection name="ratingStars" />
                          <IconCollection name="ratingStars" />
                          <IconCollection name="ratingStars" />
                        </div>

                        <p className={css.testimonialText}>{i.testimonial}</p>
                      </div>

                      <div className={css.AnalyticsNauthorContainer}>
                        <div className={css.carouselAnalytics}>
                          <div>
                            <h5>{i.customerRetention}</h5>
                            <p>{i.customerRetentionlabel}</p>
                          </div>
                          <div>
                            <h5>{i.conversionRate}</h5>
                            <p>{i.conversionRateLabel}</p>
                          </div>
                        </div>

                        <div className={css.carouselTestimonialAuthor}>
                          <Image
                            src={i.avatar}
                            width={44}
                            height={44}
                            alt="..."
                          />

                          <div>
                            <p className={css.authorName}>{i.name}</p>
                            <p>{i.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </ContentWidth>
    </div>
  );
}

const testimonialsContent = [
  {
    // active: "activeCard",
    id: 1,
    name: "Troy Lane",
    position: "CEO - Equipment Now",
    testimonial:
      "Jay and his team are amazing to work with and they create a very high quality, faultless product. I have worked with them in the past and they are always efficient, creative, accurate and great communicators. I will be coming back again to work with them soon.",
    customerRetention: "30%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    conversionRate: "61%",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // placeholder image name
    highlighted: true,
  },
  {
    id: 2,
    name: "Edgar Santiago",
    position: "CEO - Rentalo",
    testimonial:
      "I would strongly recommend him for software engineering and technical leadership. He has a good understanding about Sharetribe and React.",
    customerRetention: "+30%",
    conversionRate: "+61%",

    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlighted: false,
  },
  {
    id: 3,
    name: "William Kwakye",
    position: "CEO - aver Fans",
    testimonial:
      "It was an out most pleasure working with Jay. Highly skilled, professional and passionate about what he does. Jay's programming skills has helped our startup come to fruition and I highly recommend him for any project which I believe will be delivered to a high standard.",
    customerRetention: "+11%",
    conversionRate: "+52%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlighted: false,
  },

  {
    id: 4,
    name: "William Kwakye",
    position: "CEO - aver Fans",
    testimonial:
      "It was an out most pleasure working with Jay. Highly skilled, professional and passionate about what he does. Jay's programming skills has helped our startup come to fruition and I highly recommend him for any project which I believe will be delivered to a high standard.",
    customerRetention: "+11%",
    conversionRate: "+52%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlighted: false,
  },
];
