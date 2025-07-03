import React from 'react';
import css from './AndroidServices.module.css';
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import Image from 'next/image';
import customApp from '../../assets/images/android/customApp.svg';
import enterpriseSolutions from '../../assets/images/android/enterpriseSolutions.svg';
import maintenanceSupport from '../../assets/images/android/maintenanceSupport.svg';
import uiUxDesign from '../../assets/images/android/uiUxDesign.svg';
import crossPlatform from '../../assets/images/android/crossPlatform.svg';
import classNames from 'classnames';

const AndroidServices = () => {
    const services = [
        {
            id: "customApp",
            title: "Custom Android App Development",
            description:
                "We create tailor-made Android applications designed to meet your specific business needs. Whether you require an app for e-commerce, healthcare, fintech, or any other industry, our solutions ensure seamless functionality and a superior user experience.",
            isBlue: false,
            image: customApp,
        },
        {
            id: "uiUxDesign",
            title: "Android UI/UX Design",
            description:
                "Visually stunning and user-friendly interfaces to enhance app usability and engagement.",
            isBlue: true,
            image: uiUxDesign,
        },

        {
            id: "maintenanceSupport",
            title: "App Maintenance & Support",
            description:
                "Regular updates, bug fixes, and performance improvements to keep apps running smoothly.",
            isBlue: false,
            image: maintenanceSupport,
        },
        {
            id: "appServices",
            description:
                "At icodelabs, we offer a full range of Android App Development Services to help businesses thrive in the mobile-first digital landscape.",
        },
    
        {
            id: "enterpriseSolutions",
            title: "Enterprise Android Solutions",
            description:
                "Our enterprise-grade Android apps are built to handle complex business operations with ease. We develop secure, scalable, and high-performance solutions that enhance productivity, improve collaboration, and streamline workflows.",
            isBlue: true,
            image: enterpriseSolutions,
        },
        {
            id: "crossPlatform",
            title: "Cross-Platform Development",
            description:
                "Flutter & React Native development for smooth Android and iOS compatibility.",
            isBlue: false,
            image: crossPlatform,
        },

    ];
    return (
        <ContentWidth>
            <div className={css.container}>
                <h1 className={css.title}>Our Android App Development Services</h1>
                <div className={css.servicesCards}>
                    <div className={css.cardColumn}>
                        {services.slice(0, 3).map((service, index) => (
                            <div
                                key={index}
                                className={classNames(css.card, service.isBlue ? css.blueCard : css.whiteCard)}
                            >
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <Image src={service.image} alt={service.title} />
                            </div>
                        ))}
                    </div>
                    <div className={css.cardColumn}>
                        {services.slice(3).map((service, index) => (
                            <div
                                key={index + 3}
                                className={classNames(css.card, service.isBlue ? css.blueCard : css.whiteCard, service.id === "appServices" && css.blankCard)}
                            >
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <Image src={service.image} alt={service.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ContentWidth>
    );
};

export default AndroidServices;