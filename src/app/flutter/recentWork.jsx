"use client"
import React from "react";
import css from "./Flutter.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import insight from "../../assets/images/Flutter/insight.png";
import tarus from "../../assets/images/Flutter/tarot-bridge.png";
import cocopool from "../../assets/images/Flutter/cocopool.png";
import insightCover from "../../assets/images/Flutter/insight-cover.png";
import tarusCover from "../../assets/images/Flutter/tarot-cover.png";
import cocopoolCover from "../../assets/images/Flutter/cocopool-cover.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecentWork = () => {
    const projects = [
        {
            logo: insight,
            cover: insightCover, // Replace with your actual image paths
            type: "Website"
        },
        {
            logo: tarus,
            cover: tarusCover,
            type: "Website"
        },
        {
            logo: cocopool,
            cover: cocopoolCover,
            type: "Website"
        }
    ];

    return (
        <div className={css.recentWork}>
            <div className={css.recentWorkHeader}>
                <h1 className={css.recentWorkTitle}>Our Recent Work</h1>
                <p className={css.recentWorkDescription}>
                    At Icodelabs, We Take Pride In Delivering High-Quality Flutter Applications Across Various Industries. Our Portfolio
                    Showcases A Diverse Range Of Successful Projects That Have Helped Businesses Thrive In The Digital Space.
                </p>
            </div>

            <div className={css.projectsSlider}>
                <Swiper
                    spaceBetween={45}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    className={css.swiper}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className={css.projectSlide}>
                            <div className={css.projectCard}>
                                <div className={css.projectLogoWrapper}>
                                    <Image
                                        src={project.logo}
                                        alt={project.type}
                                  
                                        className={css.projectLogoImage}
                                    />
                                    <div className={css.projectType}>
                                        {project.type}
                                    </div>
                                </div>
                                <div className={css.projectLogo}>
                                    <Image
                                        src={project.cover}
                                        alt={project.type}
                                        width={400}
                                        height={600}
                                        className={css.projectImage}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RecentWork;