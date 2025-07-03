"use client";
import React, { useState } from "react";
import css from "./testimonial.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import IconCollection from "@/component/IconCollection/IconCollection";
import image1 from "@/assets/images/Flutter/testimonial1.png";
import image2 from "@/assets/images/Flutter/testimonial2.png";
import image3 from "@/assets/images/Flutter/testimonial3.png";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John D",
            position: "CEO, TechStartup",
            quote: "icodelabs transformed our app idea into a seamless, high-performing iOS application. Their attention to detail, technical expertise, and dedication were outstanding!",
            rating: 5,
            image: image1
        },
        {
            id: 2,
            name: "Sarah M",
            position: "Product Manager",
            quote: "Working with icodelabs was a fantastic experience. They delivered our Flutter app ahead of schedule and exceeded our expectations.",
            rating: 5,
            image: image2
        },
        {
            id: 3,
            name: "Michael R",
            position: "Founder, Tech Innovation",
            quote: "The team's expertise in Flutter development is exceptional. They helped us create a cross-platform app that our users love.",
            rating: 5,
            image: image3
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className={css.testimonialSection}>
            <div className={css.testimonialContainer}>
                <div className={css.testimonialImages}>
                    <Swiper
                        direction="vertical"
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        loop={true}
                        className={css.testimonialSwiper}
                        onSlideChange={handleSlideChange}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.id} style={{
                                height: activeIndex === index ? '450px' : '150px',
                                width: '450px',
                            }}>
                                <div
                                    className={css.testimonialImageWrapper}
                                    style={{
                                        height: activeIndex === index ? '450px' : '150px',
                                        width: '450px',
                                    }}
                                >
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={450}
                                        height={activeIndex === index ? 450 : 150}
                                        className={css.testimonialImage}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={css.testimonialContent}>
                    <div>
                        <div className={css.quoteIcon}>
                            <IconCollection name="quote" />
                        </div>

                        <blockquote className={css.testimonialQuote}>
                        " {testimonials[activeIndex].quote}"
                        </blockquote>
                    </div>

                    <div className={css.testimonialAuthor}>
                        <h3>{testimonials[activeIndex].name}</h3>
                        <p>{testimonials[activeIndex].position}</p>
                      <div>
                      <div className={css.rating}>
                        <span className={css.ratingText}></span>
                            {[...Array(testimonials[activeIndex].rating)].map((_, index) => (
                                <span key={index} className={css.star}>★</span>
                            ))}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;