"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import IconCollection from "../IconCollection/IconCollection";
import css from "./DoBusinessBetter.module.css";
import Image from "next/image";
import carouselImg from "../../assets/imgs/icons/carouselImg.svg";
import ContentWidth from "../ContentWidth/ContentWidth";
import exploreMoreArrow from "../../assets/imgs/icons/exploremoreArrow.svg";

const DoBusinessBetter = () => {
  return (
    <>
      <div className={css.doItBettercontainer}>
        <ContentWidth>
          <div className={css.contentContainer}>
            <div>
              <h2>Do Business Better.</h2>

              <p className="contentText">
                We are a top-notch software development company, recognized for
                our excellence, delivering tangible outcomes through
                cutting-edge technology.
              </p>
            </div>

            <div className={css.imgNbtnContainer}>
              <div className={css.rotaingImgWrapper}>
                <div className={css.rotatingImg} />
                <IconCollection name="arrowUpWhite" />
              </div>

              <a href="" target="_blank" className="primaryBtn">
                View All Services <IconCollection name="rightArrowTop" />
              </a>
            </div>
          </div>
        </ContentWidth>

        <Swiper
          spaceBetween={20}
          centerMode={false}
          loop={true}
          breakpoints={{
            540: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 3.5,
            },
          }}
          className="doBetterCarousel"
        >
          {features.map((i, index) => (
            <SwiperSlide key={index}>
              <div className={css.carouselCard}>
                <div>
                  <Image src={i.img} width={40} height={40} />

                  <h5>{i.title}</h5>
                  <p className="contentText">{i.content}</p>
                </div>

                <a href={i.route} target="_blank" className="textBtn">
                  Learn More <IconCollection name="rightArrowTop" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DoBusinessBetter;

const features = [
  {
    img: carouselImg,
    title: "Flutter app development",
    content: `Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. This ensures spontaneous performance and a stunning UI in both iOS and Android devices. With pulsing, businesses can create visually attractive and high-performance apps, reducing the time of development development and cost.
`,
    route: "",
  },
  {
    img: carouselImg,
    title: "Android app development",
    content: `Developing for Android, Kotlin, Java, or SQLite requires specialization, ensuring that the app is adapted to a variety of devices. A well-built Android app can help businesses stand up in the Play Store, with a smooth user experience, rapid performance, and the latest Android versions and facilities with compatibility.
`,
    route: "",
  },
  {
    img: carouselImg,
    title: "IOS app development",
    content: `The iOS app development is specially focused on creating applications for Apple devices (iPhones, iPads, etc.). A well-designed iOS app enhances spontaneous integration, customer satisfaction, and engagement with a spontaneous user experience, high security, and Apple's ecosystem.
`,
    route: "",
  },
  {
    img: carouselImg,
    title: "UI/UX design",
    content: `The UI/UX (user interface and user experience) plays an important role in increasing the design engagement and purpose. A well-designed app or website prefers user-centered navigation, visually attractive layouts, and smooth interactions, making it easier for users to effectively connect with the platform.`,
    route: "",
  },
];
