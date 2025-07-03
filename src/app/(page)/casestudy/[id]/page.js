

import React from 'react';
import css from '../CaseStudy.module.css';
import IconCollection from '@/component/IconCollection/IconCollection';
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import Image from 'next/image';
import BuildDreamForm from '@/component/BuildDreamForm/BuildDreamForm';
import StudyCard from '../StudyCard';
import testImage from '@/assets/images/blogsBanner.png'
import laptop from '@/assets/images/laptop.png'
import GoBack from '@/component/GoBack/GoBack';

const caseStudyDetails = () => {

    const technologies = [
        {
            name: "1) React.js",
            description: "A JavaScript library for building user interfaces.",
            features: [
                "Virtual DOM for enhanced performance",
                "Component-based architecture",
                "Vast ecosystem and community support",
                "JSX for HTML-JavaScript integration"
            ],
            benefits: [
                "Speedy rendering with virtual DOM",
                "High flexibility and customization",
                "Robust community support",
                "Ideal for SPAs and dynamic apps"
            ]
        },
        {
            name: "2) Angular",
            description: "A TypeScript-based framework for building web applications.",
            features: [
                "Two-way data binding",
                "Dependency injection",
                "Comprehensive tooling",
                "Built-in RxJS integration"
            ],
            benefits: [
                "Complete solution for front-end development",
                "Strong community support",
                "Facilitates scalable applications",
                "Supports enterprise-level apps"
            ]
        },
        {
            name: "3) Vue.js",
            description: "A progressive JavaScript framework for building UIs.",
            features: [
                "Reactive data binding",
                "Virtual DOM",
                "Flexible integrations",
                "Single-file components"
            ],
            benefits: [
                "Lightweight and fast",
                "Highly customizable",
                "Great for small and large apps",
                "Supports gradual adoption"
            ]
        },
        {
            name: "4) Svelte",
            description: "A modern JavaScript framework that compiles components into optimized JavaScript.",
            features: [
                "No virtual DOM",
                "Reactive programming model",
                "Simple and lightweight",
                "Efficient performance"
            ],
            benefits: [
                "Simplified development process",
                "Smaller bundle sizes",
                "Fast rendering",
                "Great for lightweight applications"
            ]
        },
        {
            name: "5) Next.js",
            description: "A React framework for building server-rendered and static web applications.",
            features: [
                "Server-side rendering (SSR)",
                "Static site generation (SSG)",
                "API routes",
                "File-based routing"
            ],
            benefits: [
                "Improved SEO",
                "Fast loading times",
                "Flexible deployment options",
                "Scales well with dynamic data"
            ]
        }
    ];
    const cardData = [
        {
            imageUrl: testImage,
            title: '7 Innovative Features Every Real Estate Website Should Have in 2024',
            description: 'Web Development',
            postedBy: 'Jay Tiwary',
            date: '23 July, 2024',
        },
        {
            imageUrl: testImage,
            title: 'Revolutionize Your Digital Presence with Custom Android App Development',
            description: 'Web Development',
            postedBy: 'Jay Tiwary',
            date: '23 July, 2024',
        },
        {
            imageUrl: testImage,
            title: '7 Innovative Features Every Real Estate Website Should Have in 2024',
            description: 'Web Development',
            postedBy: 'Jay Tiwary',
            date: '23 July, 2024',
        },
    ];
    return (
        <div>
            <div className={css.banner}>
                <h4 className={css.bannerSubtitle}>Home <IconCollection name="right_arrow" /> Case Study</h4>
                <h1 className={css.bannerTitle}>Case study</h1>
            </div>
            <ContentWidth>
                <div className={css.mainContent}>
                    <div
                        className={css.leftContentDetails}>
                        <div className={css.container}>
                            <GoBack/>
                            <Image className={css.detailsImage} src={testImage} alt='Details Image'/>
                            <div className={css.headingContent}>
                                <h3>Web Development</h3>
                                <div className={css.rightText}>23 July, 2024 Posted by : Jay Tiwary</div>
                            </div>
                            <p className={css.description}>
                                <span className={css.firstPara}>The dynamic landscape of web development is ever-evolving, with emerging technologies and tools flooding the market at an unprecedented pace. Among these diverse solutions, front end frameworks and back end frameworks serve as indispensable instruments to craft interactive and stunning web applications. In this cluttered world of web development, choosing the right front end framework for your progressive web applications is paramount. Web developers across the globe utilize many popular front end frameworks, but the right choice varies significantly. </span>
                                <span>The forever-debatable question of front end development vs. back end development is the crux of every web development project. Selecting the best web development frameworks is important for constructing efficient, scalable, and user-friendly applications. Front end development tools help developers create the perfect mechanisms and structures essential for creating interactive and dynamic web interfaces. This blog dives deep into the ten best front end frameworks of 2024, highlighting the features, use cases, and more to help developers make an educated decision.</span>
                            </p>

                            <h1 className={css.heading}>What Are Front End Frameworks?</h1>
                            <p className={css.description}>
                                <span className={css.firstPara}>Before diving into the popular front end frameworks, let's define what front end frameworks are and what they actually do. The front end of an application or a website consists of the items and interfaces visible to the user. This includes the layout, content, arrangement of components, and functionalities. Additionally, it involves constructing user-friendly interfaces and expertly presenting backend data to users.</span>
                                <span>Hence, a front end development framework is an avenue or an instrument vital in building the front end of your app or website. Tasks performed using front end development tools include data associations with The Document Object Model (DOM) elements, AJAX requests management, website or app components modifications, and defining a file structure.</span>
                            </p>


                            <h1 className={css.heading}>Best Front End Frameworks of 2024</h1>
                            <p className={css.singleDescription}>Let's check out the top popular front end frameworks that are loved by many developers for their web development projects:</p>

                            {technologies.map((tech, index) => (
                                <div key={index} className={(index === 2 || index === 3 || index === 8 || index === 9) && css.grayBackground}>

                                    <h2 className={css.subHeading}> {tech.name}</h2>
                                    <p className={css.singleDescription}>{tech.description}</p>
                                    <h3 className={css.subHeading}>Features:</h3>
                                    <ul className={css.list}>
                                        {tech.features.map((feature, i) => (
                                            <li key={i} className={css.listItem}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className={css.subHeading}>Benefits:</h3>
                                    <ul className={css.list}>
                                        {tech.benefits.map((benefit, i) => (
                                            <li key={i} className={css.listItem}>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <h1 className={css.headingConclusion}>Conclusion</h1>
                            <p className={css.singleDescription}>Choosing the perfect web development frameworks for your progressive web applications is crucial in the debate between front end development and back end development. The most important consideration is your project's specific needs and goals. The frontend landscape offers immaculate solutions like JavaScript frameworks, Svelte, Angular, Vue.js, Ember.js, and React.js, each with unique benefits and capabilities. By understanding their functionalities, you can select the appropriate frameworks for your web development project to create dynamic and user-friendly</p>

                            <div className={css.smallBanner}>
                                <h2 className={css.hireTitle}>Hire an experienced web/mobile app
                                    development team?</h2>
                                <button className={css.contactButton}>Contact us</button>
                            </div>
                            <div className={css.relatedPost}>
                                <h4 className={css.relatedTitle}>Related Post</h4>
                                <div className={css.relatedImage}>
                                    {cardData.map((card, index) => (
                                        <StudyCard key={index} card={card} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.rightContent}>
                        <BuildDreamForm className={css.buildFormContainer} />
                    </div>
                </div>
            </ContentWidth>
        </div>
    );
};

export default caseStudyDetails;