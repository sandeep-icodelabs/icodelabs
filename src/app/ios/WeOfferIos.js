import React from 'react';
import css from './WeOfferIos.module.css';
import Image from 'next/image';
import custom from '../../assets/images/ios/custom (2).svg';
import design from '../../assets/images/ios/design.svg';
import migration from '../../assets/images/ios/migration.svg';
import testingIos from '../../assets/images/ios/testingIos.svg';
import supportIos from '../../assets/images/ios/supportIos.svg';
import game from '../../assets/images/ios/game.svg';
import ContentWidth from '@/component/ContentWidth/ContentWidth';

const WeOfferIos = () => {
    const services = [
        {
            title: "Custom iOS Application Development",
            description:
                "We build highly customized and feature-rich iOS applications tailored to your business needs.",
            image: custom,
        },
        {
            title: "iOS App UI/UX Design",
            description:
                "Our design experts craft intuitive and visually appealing iOS app interfaces.",
            image: design,
        },
        {
            title: "iOS App Migration",
            description:
                "Upgrade your existing app by migrating it to iOS with enhanced performance and security.",
            image: migration,
        },
        {
            title: "iOS Software Testing",
            description:
                "We ensure a flawless app experience with rigorous QA testing and bug resolution.",
            image: testingIos,
        },
        {
            title: "iOS App Support & Maintenance",
            description:
                "Our support team provides continuous updates and optimizations to keep your app running smoothly.",
            image: supportIos,
        },
        {
            title: "iOS Game Development",
            description:
                "We create immersive and high-performance iOS games with AI and advanced graphics.",
            image: game,
        },
    ];

    return (
       <div className={css.container}>
         <ContentWidth>
            <h1 className={css.heading}>iOS App Development Services We Offer</h1>
            <p className={css.subHeading}>Our iOS app development services are tailored to create intuitive and scalable applications that seamlessly operate across iOS devices, enhancing user engagement and driving business growth. Whether you need a feature-rich app built from the ground up or improvements to an existing one, our expertise as a leading mobile app development company ensures comprehensive iPhone app solutions that meet your unique requirements.</p>
            <div className={css.cards}>
                {services.map((service, index) => (
                    <div key={index} className={css.card}>
                        <Image src={service.image} alt={service.title} />
                        <div className={css.title}>{service.title}</div>
                        <p className={css.description}>{service.description}</p>
                    </div>
                ))}
            </div>
        </ContentWidth>
       </div>
    );
};

export default WeOfferIos;