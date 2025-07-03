import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import css from './SectionBlogs.module.css'
import image1 from '../../assets/images/blog1.png'
import image2 from '../../assets/images/blog2.png'
import image3 from '../../assets/images/blog3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SectionBlogs = (props) => {
  const {data=[]}=props.blog.data 
      const cardData = [
        {
          imageUrl: image1,
          title: 'How Icodelabs Optimizes mobile app performance with flutter app development',
          postedBy: 'Jay Tiwary',
          date: '23 July, 2024',
        },
        {
          imageUrl: image2,
          title: 'Enhancing User Experience with react native. A deep dive into Icodelabs development process',
          postedBy: 'Jay Tiwary',
          date: '23 July, 2024',
        },
        {
          imageUrl: image3,
          title: 'How Icodelabs Crafts Android app that deliver Exceptional user experiences',
          postedBy: 'Jay Tiwary',
          date: '23 July, 2024',
        },
      ];
    return (
        <div className={css.container}>
            <h2  className={css.blogTitle}>Blogs & Resources</h2>
             <div className={css.cards}>
             <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    // pagination={{ clickable: true }}
                    // navigation={true} 
                    modules={[Pagination, Navigation]} // Add Navigation module
                    className={css.sliderContainer}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1023: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1380: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
              {data.map((card, index) => ( 
                 <SwiperSlide key={index} className={css.swiperSlide}>
                <Link  href={`/blog/${card.title}`} passHref>
                  <div key={index} className={css.card}>
                    <img src={card?.attributes?.Image?.data[0]?.attributes?.url} alt={card.title} />
                    <div className={css.textContents}>
                    <div className={css.cardTitle}>{card.attributes.Title}</div>
                    <div className={css.cardMeta}>
                      <span>Posted by: {card.postedBy}</span>
                      <span>{card.date}</span>
                    </div>
                    </div>
                  </div>
                </Link>
                </SwiperSlide>
              ))}
             </Swiper>
            </div>
        </div>
    );
};

export default SectionBlogs;