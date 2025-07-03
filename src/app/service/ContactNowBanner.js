import React from 'react';
import css from './ContactNowBanner.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth';

const ContactNowBanner = (props) => {
    const {ctaTitle,ctaDescription}=props 
    return (
        <ContentWidth className={css.bannerContent}>
            <div className={css.backgroundBanner}>
                <div className={css.bannerContainer}>
                    <h2 className={css.title}>{ctaTitle}</h2>
                    <p className={css.subTitle}>{ctaDescription}</p>
                    <button className={css.contactButton}>Hire Now</button>
                </div>
            </div>
        </ContentWidth>
    );
};

export default ContactNowBanner;