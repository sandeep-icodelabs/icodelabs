"use client"
import React from 'react';
import css from './IndustriesPage.module.css'
import Slider from "react-slick";
import senco from '@/assets/images/industriesSlider/senco.png'
import billetsLogo from '@/assets/images/industriesSlider/billetsLogo.png'
import pinktadsLogo from '@/assets/images/industriesSlider/pinktadsLogo.png'
import PopseeklLogo from '@/assets/images/industriesSlider/Popseekl-logo.png'
import suprLogo from '@/assets/images/industriesSlider/suprLogo.png'
import Wake_logo from '@/assets/images/industriesSlider/Wake_logo.png'
import Image from 'next/image';
import IconCollection from '@/component/IconCollection/IconCollection';
import ContentWidth from '@/component/ContentWidth/ContentWidth';

const page = () => {
    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    centerMode: true,
                },
            },
        ],
    };
    const companylogo = [
        {
            image: senco,
            altText: "senco image"
        },
        {
            image: billetsLogo,
            altText: "billets Logo image"
        },
        {
            image: pinktadsLogo,
            altText: "pinktada Logo image"
        },
        {
            image: PopseeklLogo,
            altText: "Popseekl Logo image"
        },
        {
            image: suprLogo,
            altText: "supr Logo image"
        },
        {
            image: Wake_logo,
            altText: "Wake logo image"
        },
    ]
    return (
        <div>
            <div className={css.banner}>
                <h4 className={css.bannerSubtitle}>EMPOWER YOUR BUSINESS</h4>
                <h1 className={css.bannerTitle}>Excellent IT services for your success</h1>
                <p className={css.bannerDescription}>
                    With our ‘Get Things Done’ philosophy, entrust your app or web project to us. We excel in tackling complexities, providing optimal solutions, and delivering within agreed timelines
                </p>
                <button className={css.meetUsButton}><span className="rippleBlueEffect">&nbsp;</span>Meet with Us</button>
            </div>
            <div className={css.middleContainer}>
                <h4 className={css.whoWeText}>WHO WE ARE</h4>
                <div className={css.heading}>We deal with the aspects of professional IT Services</div>

                <div className={css.hexagonGrid}>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-help" />
                        <p className={css.cardName}>On Demand</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-spoon" />
                        <p className={css.cardName}>Restaurant</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-house" />
                        <p className={css.cardName}>Real Estate</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-help" />
                        <p className={css.cardName}>Healthcare</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-shopping" />
                        <p className={css.cardName}>Ecommerce</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-education" />
                        <p className={css.cardName}>Education</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-mobile" />
                        <p className={css.cardName}>Dating & social media</p>
                    </div>
                    <div className={css.hexagon}>
                        <IconCollection name="whoWe-car" />
                        <p className={css.cardName}>Transport & Logistics</p>
                    </div>
                </div>

                <div className={css.infoWrapper}>
                    <ContentWidth className={css.infoSection}>
                        <div className={css.leftContent}>
                            <IconCollection name="it_services" />
                        </div>
                        <div className={css.content}>
                            <p className={css.subTitle}>It Support For Business</p>
                            <div className={css.title}>Preparing For Your Success Trusted IT Services.</div>
                            <div className={css.text}>
                                We’ve been a nearly strategic thought leader for five we are bring unrivaled decades incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud
                            </div>
                            <ul className={css.list}>
                                <li>Custom shortcodes</li>
                                <li>IT Consultancy</li>
                                <li>Data Analytics</li>
                                <li>Data security</li>
                            </ul>
                            <a href="#contact" className={css.contactButton}><span className="rippleEffect">&nbsp;</span>Contact Us</a>
                        </div>
                    </ContentWidth>
                </div>
            </div>
            <div className={css.trustedBrands}>
                <div className={css.contentWidth}>
                    <h5>Trusted By 70+ Companies</h5>
                    <div className={css.trustedBrandBox}>
                        <Slider {...settings}>
                            {companylogo.map((item, key) => (
                                <div key={key} className={css.brandLogo}>
                                    <Image src={item.image} alt={item.altText} />
                                </div>
                            ))}


                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;