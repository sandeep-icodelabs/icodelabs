"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import css from "./AndroidOurPortfolio.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import appLogo from "../../assets/images/web-development/appLogo.svg";
import appImage from "../../assets/images/android/portfolio1.png";
import playStore from "../../assets/images/web-development/play-store 1.svg";
import appleStore from "../../assets/images/web-development/apple-store 1.svg";
import Image from "next/image";

const sliderData = [
    {
        id: 1,
        title: "International Configuration Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
        downloads: "500K+",
        rating: "3.8/5",
        image: appImage,
        appLogo: appLogo,
    },
    {
        id: 2,
        title: "Enterprise Data Solution",
        description:
            "Doloribus et ea doloremque qui dolor et ut nisi. Ut quis veniam nisi. Qui dicta consectetur assumenda dolorem. Sed vel enim et optio. Ipsa ab eveniet ullam. Assumenda quia dolorum ea qui velit voluptates quaerat repudiandae.",
        downloads: "1M+",
        rating: "4.2/5",
        image: appImage,
        appLogo: appLogo,
    },
    {
        id: 3,
        title: "Enterprise Data Solution",
        description:
            "A powerful tool that enables seamless data integration and automation.",
        downloads: "1M+",
        rating: "4.2/5",
        image: appImage,
        appLogo: appLogo,
    },
    {
        id: 4,
        title: "International Configuration Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
        downloads: "500K+",
        rating: "3.8/5",
        image: appImage,
        appLogo: appLogo,
    },
    {
        id: 5,
        title: "Enterprise Data Solution",
        description:
            "Doloribus et ea doloremque qui dolor et ut nisi. Ut quis veniam nisi. Qui dicta consectetur assumenda dolorem. Sed vel enim et optio. Ipsa ab eveniet ullam. Assumenda quia dolorum ea qui velit voluptates quaerat repudiandae.",
        downloads: "1M+",
        rating: "4.2/5",
        image: appImage,
        appLogo: appLogo,
    },
    {
        id: 6,
        title: "Enterprise Data Solution",
        description:
            "A powerful tool that enables seamless data integration and automation.",
        downloads: "1M+",
        rating: "4.2/5",
        image: appImage,
        appLogo: appLogo,
    },
];

const AndroidOurPortfolio = () => {
    return (
        <div className={css.containerMain}>
            <div className={css.contentContainer}>
               <div className={css.headerContent}>
               <h1 className={css.heading}>Our Portfolio: Showcasing Excellence in Android App Development</h1>
                <p className={css.subHeading}>
                At icodelabs, we take pride in delivering innovative, high-performance Android applications that drive business growth and user engagement. Our portfolio highlights our expertise across various industries, demonstrating our ability to create custom, scalable, and user-friendly mobile solutions. </p>
               </div>
                <div className={css.sliderContainer}>
                    <Swiper
                        effect="coverflow"
                        modules={[Navigation, EffectCoverflow]}
                        navigation={false}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -250,
                            depth: 300,
                            modifier: 2,
                            slideShadows: true,
                        }}
                    >
                        {sliderData.map((slide) => (
                            <SwiperSlide key={slide.id} className={css.slide}>
                                <div className={css.slideContentContainer}>
                                    <div className={css.slideContent}>
                                        <div className={css.appLogo}><Image src={slide.appLogo} alt="App Logo" /></div>
                                        <h3 className={css.slideTitle}>{slide.title}</h3>
                                        <p className={css.slideDescription}>{slide.description}</p>
                                        <div className={css.downloadButtons}>
                                            <p className={css.availableText}>Available on</p>
                                            <a href="#" className={css.downloadButton}>
                                                <Image src={playStore} alt="Play Store" />
                                            </a>
                                            <a href="#" className={css.downloadButton}>
                                                <Image src={appleStore} alt="Apple Store" />
                                            </a>
                                        </div>
                                        <div className={css.rating}>
                                            <div><h3>{slide.downloads} </h3> <p>Downloads</p></div>
                                            <div><h3>{slide.rating}</h3> <p>Rating</p></div>
                                        </div>
                                        <a href="#" className={css.downloadCaseStudy}>
                                            Download case study
                                        </a>
                                    </div>
                                    <div className={css.imageContainer}>
                                        <Image src={slide.image} alt="App preview" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AndroidOurPortfolio;
