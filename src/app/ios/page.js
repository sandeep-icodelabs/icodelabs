import Image from 'next/image';
import React from 'react';
import css from './ios.module.css';
import bannerImage from '../../assets/images/ios/iosBannerImage.png';
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import CompaniesSlider from '@/component/CompaniesSlider/SectionAIDevelopmentPartner';
import WeOfferIos from './WeOfferIos';
import Testimonial from '../flutter/testimonial';
import RecentWork from '../flutter/recentWork';


const page = () => {
    return (
        <div>
            <ContentWidth>
                <div className={css.bannerMain}>
                    <div className={css.bannerContent}>
                        <div className={css.leftContent}>
                            <h1 className={css.bannerTitle}>Build High-Performance iOS Apps with Icodelabs</h1>
                            <p className={css.bannerDescription}>At icodelabs, we craft cutting-edge iOS mobile applications that deliver seamless user experiences and drive business growth. Whether you're a startup, a growing business, or an enterprise, our expert iOS app development team ensures that your app stands out in the Apple ecosystem.</p>
                            <button className={css.bannerButton}>Lets Connect</button>
                        </div>
                        <div className={css.rightContent}>
                            <Image src={bannerImage} alt='service Image' />
                            <div>
                                <h1 className={css.bannerTitleRight}>Your Ideas transformed
                                    into a stunning iOS App!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
            {/* <CompaniesSlider /> */}
            <WeOfferIos/>
            <RecentWork/>
            <Testimonial />
        </div>
    );
};

export default page;