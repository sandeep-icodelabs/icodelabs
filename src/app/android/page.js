import React from 'react';
import bannerImage from '../../assets/images/android/androidImage.png';
import css from './Android.module.css';
import Image from 'next/image';
import StatsSection from '@/component/SectionGrowYour/SectionGrowYour';
import AndroidServices from './AndroidServices';
import AndroidTechnologies from './AndroidTechnologies';
import AndroidOurPortfolio from './AndroidOurPortfolio';
import SectionFaq from '@/component/SectionFaq/SectionFaq';

const Page = () => {
    const faqData = [
        {
            Question: "Why should I choose IcodeLabs for Android app development?",
            Answer: "IcodeLabs offers expertise in custom Android app development, delivering high-quality, scalable, and feature-rich applications tailored to your business needs."
        },
        {
            Question: "How long does it take to develop an Android app?",
            Answer: "The development timeline depends on the complexity and features of the app. We provide a detailed estimate after understanding your project requirements."
        },
        {
            Question: "Can you develop an app for both Android and iOS?",
            Answer: "Yes, we specialize in cross-platform app development, enabling you to launch your app on both Android and iOS platforms efficiently."
        },
        {
            Question: "Do you provide post-launch support and maintenance?",
            Answer: "Yes, we offer comprehensive post-launch support and maintenance services to ensure your app remains up-to-date and performs optimally."
        },
        {
            Question: "Will my Android app be optimized for SEO and mobile performance?",
            Answer: "Absolutely. We prioritize SEO and mobile performance optimization to ensure your app ranks well and delivers a seamless user experience."
        },
        {
            Question: "Can you integrate third-party APIs into my app?",
            Answer: "Yes, we have extensive experience in integrating third-party APIs to enhance your app's functionality and meet your business requirements."
        }
    ];
    return (
        <div>
            <div className={css.bannerMain}>
                <div className={css.bannerContent}>
                    <div className={css.leftContent}>
                        <h1 className={css.bannerTitle}><span className={css.oneLineText}>Android App </span> Development Company</h1>
                        <p className={css.bannerDescription}>In today’s mobile-first world, a high-performing Android app is essential for businesses to engage users and drive growth. At icodelabs, we specialize in custom Android app development, crafting intuitive, scalable, and feature-rich applications that meet your business needs. Whether you need a startup MVP, an enterprise-grade app, or an e-commerce platform, our expert Android developers are here to turn your vision into reality.</p>
                        <button className={css.bannerButton}><span className="rippleBlueEffect">&nbsp;</span>Get started</button>
                    </div>
                    <div className={css.rightContent}>
                        <Image src={bannerImage} alt='service Image' />
                    </div>
                </div>
            </div>
            <StatsSection />
            <AndroidServices/>
            <AndroidTechnologies/>
            <AndroidOurPortfolio/>
            <div className={css.lookingBannerMain}>
                <div className={css.bannerContent}>
                    <div className={css.leftContent}>
                        <h1 className={css.bannerTitle}><span className={css.oneLineText}>Looking to Hire an Android  </span>App Developer?</h1>
                        <p className={css.bannerDescription}>Need a skilled and experienced Android app developer to bring your vision to life? At icodelabs, we have a team of expert developers ready to build high-performance, user-friendly, and scalable Android applications tailored to your business needs.</p>
                        <button className={css.bannerButton}><span className="rippleBlueEffect">&nbsp;</span>Get started</button>
                    </div>
                </div>
            </div>
            <SectionFaq className={css.faqSection} faqData={faqData} />
        </div>
    );
};

export default Page;