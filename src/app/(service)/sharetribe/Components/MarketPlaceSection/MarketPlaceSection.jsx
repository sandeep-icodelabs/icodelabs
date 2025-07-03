"use client";
import React, { useRef, useState } from "react";
import shareTribe from "../../../../../assets/imgs/icons/shareTribe.svg";
import Image from "next/image";
import css from "./MarketPlaceSection.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import arrowSVG from "../../../../../assets/imgs/icons/marketsstats.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function MarketPlaceSection() {
  return (
    <>
      {/* tag  */}
      <div className={css.verifycBadge}>
        <Image src={shareTribe} alt="shareTribe" />

        <div className={css.contentNIconWrapper}>
          <div className={css.contentContainer}>
            <p>we are a verified</p>
            <h5>Sharetribe Expert</h5>
          </div>
          <IconCollection name="tribeVerify" />
        </div>
      </div>
      <div className={css.marketPlaceSectionWrapper}>
        <div className={css.contentContainer}>
          <h2>Marketplace Models We’ve Built with Sharetribe</h2>
          <p>
            Whether you’re building a product, service, or rental platform —
            we’ve done it with Sharetribe. Here are just a few models we can
            launch, extend, and customize for you:
          </p>
        </div>
        <div className={css.carouselWrapper}>
          <Swiper
            pagination={true}
            loop
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={breakpoints}
            modules={[Pagination]}
            className="marketplaceSwiperSharetribe"
          >
            {cardData.map((i, idx) => {
              return (
                <>
                  <SwiperSlide>
                    <div
                      className={css.swiperCard}
                      style={{ backgroundColor: i.color }}
                    >
                      <div>
                        <div
                          className={css.iconWrapper}
                          style={{ backgroundColor: i.iconBg }}
                        >
                          <IconCollection name={i.icon} />
                        </div>
                        <div className={css.cardContent}>
                          <h4>{i.title}</h4>
                          <h6>{i.description}</h6>
                        </div>
                      </div>

                      <Link href={i?.link} className="">
                        {i?.buttonText}
                        <IconCollection name="arrowUpBlack" />
                      </Link>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
      <ContentWidth>
        <div className={css.statsWrapper}>
          <div className={css.statsContent}>
            <h3>
              Building Marketplace
              <span>that not only look great but Also</span> Deliver Measurable
              results.
            </h3>

            <Image src={arrowSVG} alt="arrow" width={236} height={187} />
          </div>

          <div className={css.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={css.statBox}>
                <div className={css.statValue}>{stat.value}</div>
                <div className={css.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
      <div className={css.bar} />
    </>
  );
}

const cardData = [
  {
    title: (
      <>
        Rental <br />
        Marketplaces
      </>
    ),
    description:
      "Cars, equipment, fashion, space rentals — with return logic, deposits, and calendars.",
    icon: "rentalWhite",
    iconBg: "#F7745C",
    color: "#FFECEB",
    buttonText: "Explore More",
    link: "",
  },
  {
    title: (
      <>
        Service <br />
        Marketplaces
      </>
    ),
    description:
      "Beauty, coaching, local pros with time-based bookings, staff management, and calendar sync.",
    icon: "serviceWhite",
    iconBg: "#885CFF",
    color: "#EFEAFE",
    buttonText: "Explore More",
    link: "",
  },
  {
    title: (
      <>
        Product <br />
        Marketplaces
      </>
    ),
    description:
      "Multi-vendor ecommerce with inventory, custom checkouts, and shipping logic.",
    icon: "productWhite",
    iconBg: "#3B82F6",
    color: "#EAF6FE",
    buttonText: "Explore More",
    link: "",
  },
  {
    title: (
      <>
        Booking <br />
        Platforms
      </>
    ),
    description:
      "Events, classes, coworking — integrated with Google Calendar, Cronofy, and reminders.",
    icon: "bookingWhite",
    iconBg: "#FBBF24",
    color: "#FFF4DC",
    buttonText: "Explore More",
    link: "",
  },
  {
    title: (
      <>
        Reverse <br />
        Marketplaces
      </>
    ),
    description:
      "Job/task-based platforms where customers post and providers bid or negotiate.",
    icon: "reverseWhite",
    iconBg: "#6EEB83",
    color: "#EDFFE4",
    buttonText: "Explore More",
    link: "",
  },
  {
    title: (
      <>
        Booking <br />
        Platforms
      </>
    ),
    description:
      "Events, classes, coworking — integrated with Google Calendar, Cronofy, and reminders.",
    icon: "bookingWhite",
    iconBg: "#FBBF24",
    color: "#FFF4DC",
    buttonText: "Explore More",
    link: "",
  },
];

const stats = [
  { value: "250", label: "Marketplace Launched" },
  { value: "89%", label: "Average Client Retention Rate" },
  { value: "49+", label: "Startup Build" },
  { value: "250+", label: "Mobile Apps Development" },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2.3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.6,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3.3,
    spaceBetween: 20,
  },

  1240: {
    slidesPerView: 4.3,
    spaceBetween: 20,
  },

  1560: {
    slidesPerView: 5.3,
    spaceBetween: 20,
  },
};
