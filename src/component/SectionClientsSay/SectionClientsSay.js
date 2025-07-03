"use client"
import React from 'react';
import css from './SectionClientsSay.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import client1 from '../../assets/images/client1.png'
import clientSay from '../../assets/images/clientSay.png'
import Image from 'next/image';
import classNames from 'classnames';

const SectionClientsSay = () => {
    const testimonials = [
        {
            id: 1,
            text: "Jay and his team are amazing to work with and they create a very high quality, faultless product. I have worked with them in the past and they are always efficient, creative, accurate, and great communicators.",
            name: "Sophia",
            title: "Raver Fans, UK",
            image: client1
        },
        {
            id: 2,
            text: "The team went above and beyond to ensure our project's success. They consistently deliver high-quality work and offer creative solutions to complex problems.",
            name: "Michael",
            title: "Tech Innovators, USA",
            image: client1
        },
        {
            id: 3,
            text: "Fantastic experience! The communication was clear and efficient, and the results were exactly what we were looking for. Highly recommend!",
            name: "Emily",
            title: "Creative Solutions, Canada",
            image: client1
        },
        {
            id: 4,
            text: "Professional, reliable, and innovative! This team has been instrumental in helping us achieve our goals. We will definitely work with them again.",
            name: "John",
            title: "Business Solutions, Germany",
            image: client1
        },
        {
            id: 5,
            text: "They exceeded our expectations in every way. The project was delivered on time and met all our quality standards. Truly exceptional service!",
            name: "Ava",
            title: "Market Leaders, Australia",
            image: client1
        }
    ];

    return (
        <section className={classNames(css.testimonialSlider, "clientsSaySlider")}>
            <div className={css.sliderContent}>
                <div className={css.leftImage}>
                    <Image className={css.clientBigImage} src={clientSay} alt="" />
                </div>
                <div className={css.rightContent}>
                    <h2 className={css.title}>What Clients Say
                        About Us</h2>
                    <div className={css.sliderWrapper}>
                        <span className={css.commaText}>
                            <svg width="135" height="100" viewBox="0 0 135 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.2816 79.9998C20.9377 79 33.4284 69.8332 39.4236 57.1669L20.4377 57.1669C12.6102 57.1669 6.11506 50.8333 6.11506 42.8337L6.11506 14.3332C6.11506 6.49995 12.444 -1.06957e-05 20.4378 -9.99719e-06L49.2494 -7.4797e-06C57.0769 -6.79575e-06 63.5721 6.33359 63.5721 14.3332L63.5721 42.8337C63.5721 74.3335 37.9251 100 6.44785 100C6.44785 100 0.785675 100 0.785676 94.3337L0.785676 85.834C0.618395 80.0001 6.2807 80.0001 6.2807 80.0001L6.2816 79.9998ZM77.7285 79.9998C92.3846 79 104.875 69.8332 110.871 57.1669L91.8847 57.1669C84.0572 57.1669 77.562 50.8333 77.562 42.8337L77.562 14.3332C77.562 6.49996 83.8909 -4.45281e-06 91.8847 -3.75434e-06L120.529 -1.25148e-06C128.356 -5.67532e-07 134.852 6.3336 134.852 14.3333L134.852 42.8337C134.852 74.3335 109.205 100 77.7273 100C77.7273 100 72.0652 100 72.0652 94.3337L72.0652 85.834C72.0652 80.0001 77.7273 80.0001 77.7273 80.0001L77.7285 79.9998Z" fill="white" />
                            </svg>
                        </span>
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={1}
                            spaceBetween={30}
                            mousewheel={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className={css.testimonialCard}>
                                        <p className={css.descriptionText}>{testimonial.text}</p>
                                        <div className={css.testimonialInfo}>
                                            <Image src={testimonial.image} alt={testimonial.name} />
                                            <div>
                                                <h4>{testimonial.name}</h4>
                                                <p>{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionClientsSay;
