"use client";
import React from "react";
import css from "./CarouselNwhyChooseSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { Pagination } from "swiper/modules";
import Image from "next/image";
export default function CarouselNwhyChooseSection() {
  return (
    <>
      <div className={css.carouselWrapper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.6}
          centeredSlides={true}
          modules={[Pagination]}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1.4,
            },
          }}
          loop={true}
          className="reactNativeCarousel"
        >
          {carouselData.map((i, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={`${css.cardContainer} ${i.bgClass}`}>
                    <div className={css.contentContainer}>
                      <Image
                        src={i.logo}
                        width={100}
                        height={100}
                        quality={100}
                        alt={i.title}
                        className={css.logoImg}
                      />

                      <h2>{i.title}</h2>
                      <p>{i.description}</p>

                      <div className={css.statsContainer}>
                        <div>
                          <h4>{i.stats.conversion}</h4>
                          <p>Higher Conversion</p>
                        </div>
                        <span />
                        <div>
                          <h4>{i.stats.downloads}</h4>
                          <p>Higher Conversion</p>
                        </div>
                      </div>

                      <div className={css.technoDiv}>
                        <h5> Technologies</h5>

                        <div className={css.toolsDiv}>
                          <IconCollection name="androidWhite" />
                          <span />
                          <IconCollection name="appleWhite" />
                          <span />
                          <IconCollection name="reactWhite" />
                        </div>
                      </div>
                    </div>

                    <Image
                      src={i.image}
                      width={807}
                      height={676}
                      className={css.assetsImg}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>

      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContainer}>
          <h2>
            Why Choose <span>Icode</span>labs For React Native App Development?
          </h2>
          <p>
            We provide diverse React Native development services for companies
            in all industries.
          </p>
        </div>
        <div className={css.gridContainer}>
          {whyChoosePoints.map((i, index) => {
            return (
              <>
                <div className={css.gridItem}>
                  <h4>{i.title}</h4>
                  <p> {i.description}</p>

                  <ul>
                    {i.points.map((pt, index) => {
                      return (
                        <li>
                          <IconCollection name="blueBoxCheck" />
                          {pt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </ContentWidth>
    </>
  );
}

const whyChoosePoints = [
  {
    title: "We Delivered Excellence",
    description:
      "Our team of React Native developers is committed to delivering applications with an impressively low error rate of up to 99.9%. We achieve this by adhering to quality control standards that are not only approved by the React community but also rigorously implemented throughout the app development",
    points: [
      "Innovative Agency",
      "Security-Centric Approach",
      "Flexible Prices",
    ],
  },
  {
    title: "We Empower Businesses",
    description:
      "Embracing a transparent agile methodology, our custom React Native cross-platform app development services ensure a smooth journey from the inception of your product idea to the final app delivery. With proactive communication and best practices, we guarantee timely results and complete visibility.",
    points: [
      "Quality Commitment",
      "Passionate Development Team",
      "Seamless Client Interactions",
    ],
  },
  {
    title: "We Are With You",
    description:
      "Stay ahead of the competition with our experts who keep a close eye on the ever-evolving technology landscape. We ensure your app remains future-proof by incorporating the latest and upcoming trends into its development.",
    points: [
      "Timely Project Delivery",
      "Problem-Solving Approach",
      "24/7 Support",
    ],
  },
];

const carouselData = [
  {
    title: "The Tarot Bridge",
    logo: "/assests/logo/tarot.svg",
    description:
      "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase.",
    stats: {
      conversion: "30%",
      downloads: "450k",
    },
    bgClass: "oragangeGradient",
    image: "/assests/img/tarot.png",
  },
  {
    title: "Popseekl",
    logo: "/assests/logo/popseekl.svg",
    description:
      "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase.",
    stats: {
      conversion: "30%",
      downloads: "450k",
    },
    bgClass: "grayGradient",
    image: "/assests/img/Popseekl.png",
  },
  {
    title: "Kartshare",
    logo: "/assests/logo/kartShare.svg",
    description:
      "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase.",
    stats: {
      conversion: "30%",
      downloads: "450k",
    },
    bgClass: "tealGradient",
    image: "/assests/img/Kartshare.png",
  },
  {
    title: "Now",
    logo: "/assests/logo/now.svg",
    description:
      "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase.",
    stats: {
      conversion: "30%",
      downloads: "450k",
    },
    bgClass: "darkOrangeGradient",
    image: "/assests/img/nowApp.png",
  },
];

