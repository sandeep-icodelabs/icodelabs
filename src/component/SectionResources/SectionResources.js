"use client";

import React from "react";
import css from "./SectionResources.module.css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContentWidth from "../ContentWidth/ContentWidth";
import blogImg from "../../assets/imgs/images/blog.png";
import Link from "next/link";

const SectionResources = ({ blog, usedInBlog, bg }) => {
  return (
    <section>
      <div
        style={{ backgroundColor: bg }}
        className={`${css.SectionBlogWrapper}`}
      >
        <ContentWidth>
          {usedInBlog === "true" ? (
            <div className={css.blogHeading}>
              <h2>Related Blogs</h2>
            </div>
          ) : (
            <div className={css.contentContainer}>
              <div>
                <span className="subTitle">OUR BLOG</span>
                <h2 className="headingTwo">
                  Resources To Fuel Your Digital-First Innovation Journey
                </h2>
              </div>

              <a href="/blog" className="primaryBtn">
                More Blogs
                <IconCollection name="rightArrowTop" />
              </a>
            </div>
          )}

          <div className={css.cardWrapper}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="blogCarousel"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2.2, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {blog?.map((i, index) => {
                return (
                  <>
                    <SwiperSlide>
                      <div className={css.cardContainer}>
                        <Image
                          src={i?.attributes?.Image?.data[0]?.attributes?.url}
                          width={600}
                          height={300}
                          alt={"image"}
                        />

                        <div className={css.badge}>{i?.attributes?.Type}</div>
                        <h6>{i?.attributes?.Title}</h6>

                        <div className={css.badgeNdate}>
                          {/* badge */}

                          {/* <p>{i.date}</p> */}

                          <Link
                            href={`/blog/${i?.attributes.Slug}/${i?.id}`}
                            className="textBtn"
                          >
                            Read More <IconCollection name="arrowUpBlue" />
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
      </div>
    </section>
  );
};
export default SectionResources;

const cardData = [
  {
    title:
      "Custom Software Development Boosts Security in Business Applications",
    category: "Industry",
    date: "March 29, 2025",
    route: "",
  },
  {
    title: "Finding the right fit and managing offshore is a challenge",
    category: "Marketing",
    date: "March 21, 2025",
    route: "",
  },
  {
    title: "Choosing the right frontend framework – React Vs Angular Vs Vue",
    category: "Industry",
    date: "March 19, 2025",
    route: "",
  },
  {
    title:
      "Custom Software Development Boosts Security in Business Applications",
    category: "Industry",
    date: "March 29, 2025",
    route: "",
  },
  {
    title: "Finding the right fit and managing offshore is a challenge",
    category: "Marketing",
    date: "March 21, 2025",
    route: "",
  },
];
