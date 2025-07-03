"use client";

import React from "react";
import css from "./CaseStudy.module.css";
import Image from "next/image";
import testImage from "@/assets/images/blogsBanner.png";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import BuildDreamForm from "@/component/BuildDreamForm/BuildDreamForm";
import IconCollection from "@/component/IconCollection/IconCollection";
import StudyCard from "./StudyCard";
import Link from "next/link";
import laptop from "../../../assets/images/laptop.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const page = () => {
  const cardData = [
    {
      imageUrl: testImage,
      type: "Web development",
      title: "Developing Marketplace application with Sharetribe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley",
    },
    {
      imageUrl: testImage,
      type: "Web development",
      title: "Developing Marketplace application with Sharetribe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley",
    },
    {
      imageUrl: testImage,
      type: "Web development",
      title: "Developing Marketplace application with Sharetribe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley",
    },
    {
      imageUrl: testImage,
      type: "Web development",
      title: "Developing Marketplace application with Sharetribe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley",
    },
    {
      imageUrl: testImage,
      type: "Web development",
      title: "Developing Marketplace application with Sharetribe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley",
    },
  ];

  return (
    <div>
      {/* <div className={css.banner}>
                <h4 className={css.bannerSubtitle}>Home <IconCollection name="right_arrow" /> Case Study</h4>
                <h1 className={css.bannerTitle}>Case study</h1>
            </div> */}

      <ContentWidth>
        <div className={css.banner}>
          <h1 className={css.bannerTitle}>Case Study</h1>
          <p className={css.bannerDescription}>
            InsightGig - Revolutionizing Market Research Talent Management
          </p>
        </div>
        <div className={css.mainContent}>
          <div className={css.leftContent}>
            <div className={css.caseStudyDetail}>
              <div className={css.backButton}>
                <IconCollection name="backArrow" />
                Back
              </div>
              <div className={css.caseStudyCover}>
                <Image src={laptop} alt={"laptop"} />
              </div>
              <div className={css.deatilCard}>
                <div className={css.detailRow}>
                  <h3>Web Development</h3>
                  <div className={css.detailBy}>
                    23 July, 2024 Posted by : Jay Tiwary
                  </div>
                </div>
                <div className={css.detailDescription}>
                  <p>
                    The dynamic landscape of web development is ever-evolving,
                    with emerging technologies and tools flooding the market at
                    an unprecedented pace. Among these diverse solutions, front
                    end frameworks and back end frameworks serve as
                    indispensable instruments to craft interactive and stunning
                    web applications. In this cluttered world of web
                    development, choosing the right front end framework for your
                    progressive web applications is paramount. Web developers
                    across the globe utilize many popular front end frameworks,
                    but the right choice varies significantly.
                  </p>
                  <br />
                  <p>
                    The forever-debatable question of front end development vs.
                    back end development is the crux of every web development
                    project. Selecting the best web development frameworks is
                    important for constructing efficient, scalable, and
                    user-friendly applications. Front end development tools help
                    developers create the perfect mechanisms and structures
                    essential for creating interactive and dynamic web
                    interfaces. This blog dives deep into the ten best front end
                    frameworks of 2024, highlighting the features, use cases,
                    and more to help developers make an educated decision.
                  </p>
                </div>
              </div>
              <div className={css.headingWrapper}>
                <h2>What Are Front End Frameworks?</h2>
                <p>
                  Before diving into the popular front end frameworks, let's
                  define what front end frameworks are and what they actually
                  do. The front end of an application or a website consists of
                  the items and interfaces visible to the user. This includes
                  the layout, content, arrangement of components, and
                  functionalities. Additionally, it involves constructing
                  user-friendly interfaces and expertly presenting backend data
                  to users.
                </p>
                <br />
                <p>
                  Hence, a front end development framework is an avenue or an
                  instrument vital in building the front end of your app or
                  website. Tasks performed using front end development tools
                  include data associations with The Document Object Model (DOM)
                  elements, AJAX requests management, website or app components
                  modifications, and defining a file structure.
                </p>
              </div>
              <div className={css.headingWrapper}>
                <h2>Best Front End Frameworks of 2024</h2>
                <p>
                  Let's check out the top popular front end frameworks that are
                  loved by many developers for their web development projects:
                </p>
                <h3> 1) React.js</h3>
                <p>
                  Developed by Facebook, React.js gained immediate popularity
                  due to its modern features for front end development. Its
                  component-based architecture and virtual DOM enable developers
                  to construct reusable UI components, making the process much
                  simpler and streamlined. It specializes in developing complex
                  user interfaces while offering a diverse set of frameworks and
                  tools. React employs the MVC architecture with separate
                  presentation and data layers. It uses a JSX coding style that
                  integrates HTML with JavaScript, thereby increasing developer
                  productivity.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Virtual DOM for enhanced performance</li>
                  <li>Component-based architecture</li>
                  <li>Vast ecosystem and community support</li>
                  <li>JSX syntax for seamless HTML-JavaScript integration</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Speedy rendering with virtual DOM</li>
                  <li>High flexibility and customization</li>
                  <li>Robust community and assistance</li>
                  <li>Excellent for creating intricate and interactive UIs</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Single Page Applications (SPAs)</li>
                  <li>Dynamic and high-performance web apps</li>
                </ul>
                <h3>2) Angular</h3>
                <p>
                  Curated by Google, Angular is a widely beloved comprehensive
                  framework due to its adaptability, two-way data binding, and
                  structured approach. Ideal for enterprise-level applications
                  requiring optimal performance and robust features, Angular's
                  two-way binding ensures real-time sync between the model and
                  view. The Angular CLI helps reduce boilerplate code but can be
                  trickier than Vue or React. This web development program also
                  features dependency injectors for component decoupling and
                  directives for DOM manipulation. Angular isn't very intuitive
                  for beginners and has a steeper learning curve due to its
                  full-featured nature.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>TypeScript-based for better maintainability</li>
                  <li>Two-way data binding</li>
                  <li>Dependency injection</li>
                  <li>Extensive tooling and libraries</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Well-structured and comprehensive framework</li>
                  <li>Enhanced performance with built-in optimizations</li>
                  <li>Suitable for large-scale applications</li>
                  <li>
                    Strong, active developer community and corporate sponsorship
                  </li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Enterprise-level applications</li>
                  <li>Applications requiring real-time data updates</li>
                </ul>
                <h3>3) Vue.js</h3>
                <p>
                  Vue.js, or Vue, is a progressive framework that seamlessly
                  combines simplicity and flexibility. It's quick to integrate
                  with different projects and libraries, making it a universal
                  choice for developers. Vue boasts a gentle learning curve,
                  suiting both small and large-scale projects. It can combine
                  the best features of existing front end frameworks into a
                  concise framework. Many large-scale companies trust Vue for
                  its Visual DOM, two-way binding, and component-based
                  programming.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Vue CLI for quick setup</li>
                  <li>Reactive data binding</li>
                  <li>Lightweight and fast</li>
                  <li>Component-based architecture</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Straightforward and intuitive API</li>
                  <li>Easy integration with different projects</li>
                  <li>Excellent documentation and community support</li>
                  <li>High performance</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Small to medium-sized projects</li>
                  <li>Projects requiring incremental integration</li>
                </ul>
                <h3>4) Svelte</h3>
                <p>
                  Svelte is a revolutionary JavaScript compiler that generates
                  highly efficient graphical user interfaces. Founded in 2017,
                  it is unique because it does not use a virtual DOM. Instead,
                  it uses a JavaScript Virtual Machine for developing user
                  interfaces. Svelte runs significantly faster than rival
                  frameworks like Angular and React. It is an excellent solution
                  for creating compact and speedy applications, even for
                  beginners. However, Svelte's limited adoption and smaller
                  community may pose challenges for major project creation.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Built-in state management</li>
                  <li>Minimal boilerplate code</li>
                  <li>Compile-time optimization</li>
                  <li>Component-based architecture</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Extremely fast and lightweight</li>
                  <li>Easy to learn and use</li>
                  <li>Clean and readable code</li>
                  <li>No runtime overhead</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>High-performance apps</li>
                  <li>Projects prioritizing simplicity and speed</li>
                </ul>
                <h3>5) Ember.js</h3>
                <p>
                  Ember.js is an open-source opinionated framework specifically
                  structured for front end development projects. Known for its
                  convention over configuration approach, it fosters best
                  practices. Ember is suitable for developing modern user
                  interfaces for web solutions, mobile, or desktop apps. It
                  follows the MVVM pattern and generates a default test program
                  for every new entity, which is beneficial. Ember's
                  ever-expanding community of developers is reliable for
                  learning and understanding new features.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Strong conventions and best practices</li>
                  <li>Two-way data binding</li>
                  <li>Ember CLI for better productivity</li>
                  <li>Ember Data for managing data</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Stability and long-term support</li>
                  <li>High productivity focus</li>
                  <li>Suitable for large and complex applications</li>
                  <li>No runtime overhead</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Long-term projects requiring resilience</li>
                  <li>Applications with complex requirements</li>
                </ul>
                <h3>6) Bootstrap</h3>
                <p>
                  Bootstrap is a popular front end framework designed for
                  creating responsive and mobile-first websites. It's an
                  open-source CSS framework that provides pre-built components
                  for navigation, buttons, typography, forms, modals, and more.
                  It includes HTML, CSS, and JavaScript components to simplify
                  the overall web designing process for developers.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Speeds up development</li>
                  <li>Responsive grid system</li>
                  <li>Comprehensive JavaScript plugins</li>
                  <li>Customizable Sass variables and mixins</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Speeds up development</li>
                  <li>Consistency across browsers and devices</li>
                  <li>Strong community support and documentation</li>
                  <li>Easy to use</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Rapid prototyping</li>
                  <li>Responsive web design</li>
                  <li>Projects requiring a consistent look</li>
                </ul>
                <h3>7) jQuery</h3>
                <p>
                  jQuery is a fast, small, and feature-rich JavaScript library.
                  It's compatible with multiple browsers and simplifies tasks
                  like animation, event handling, HTML document traversal, AJAX
                  interactions, and DOM manipulation.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>DOM element manipulation</li>
                  <li>Event handling in web applications</li>
                  <li>Built-in methods for creating animations</li>
                  <li>AJAX for assembling asynchronous HTTP requests</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Cross-browser compatibility</li>
                  <li>Simplifies JavaScript code for common tasks</li>
                  <li>Extensive plugins for various functionalities</li>
                  <li>Easy to learn for new developers</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Enhancing existing web applications</li>
                  <li>Projects requiring extensive DOM manipulation</li>
                  <li>Streamlining complex JavaScript tasks</li>
                </ul>
                <h3>8) Backbone</h3>
                <p>
                  Backbone.js is a lightweight JavaScript library that adds
                  structure to web applications by providing models with
                  key-value binding and custom events, collections with a rich
                  API of enumerable functions, and views with declarative event
                  handling. It connects all these components to your existing
                  API via a RESTful JSON interface, making client-side web
                  applications smooth.
                </p>
                <ul>
                  <li>Models for data and business logic</li>
                  <li>Views for managing the display and user interaction</li>
                  <li>Collections for managing sets of models</li>
                  <li>Routers for application state and navigation</li>
                  <li>Events for binding and triggering custom events</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Simplifies complex application development</li>
                  <li>Facilitates code reusability</li>
                  <li>Integrates well with other libraries and frameworks</li>
                  <li>Lightweight and efficient</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Single Page Applications (SPAs)</li>
                  <li>Projects requiring a structured framework</li>
                  <li>
                    Large-scale web applications with complex interactions
                  </li>
                </ul>
                <h3>9) Qwik</h3>
                <p>
                  Qwik is a new HTML-first framework designed for modern web
                  applications that prioritize performance and interactivity. It
                  aims to achieve the fastest possible time-to-interact using
                  server-side rendering and progressive hydration. Qwik is
                  optimized for speed by leveraging modern web standards.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Server-side rendering</li>
                  <li>Progressive hydration</li>
                  <li>Component-based architecture</li>
                  <li>Optimized for speed</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Faster load times</li>
                  <li>Enhanced SEO with server-side rendering</li>
                  <li>Improved user experience with quicker interactions</li>
                  <li>
                    Suitable for large-scale applications with complex UIs
                  </li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Performance-critical applications</li>
                  <li>Projects requiring server-side rendering</li>
                  <li>Large-scale applications with intricate interactions</li>
                </ul>
                <h3>10) Semantic-UI</h3>
                <p>
                  Semantic-UI is a contemporary front end development framework
                  supported by jQuery and LESS. It provides a broad range of UI
                  components that use natural language principles, making the
                  code more readable and understandable.
                </p>
                <h3>Fundamental Features</h3>
                <ul>
                  <li>Intuitive HTML for self-explanatory code</li>
                  <li>Multiple elements like buttons, dropdowns, and modals</li>
                  <li>Extensive theming capabilities</li>
                  <li>Responsive, out-of-the-box design</li>
                </ul>
                <h3>Benefits</h3>
                <ul>
                  <li>Readable code</li>
                  <li>Fast development time</li>
                  <li>Customizable theming options</li>
                  <li>Strong community support and documentation</li>
                </ul>
                <h3>Ideal For</h3>
                <ul>
                  <li>Rapid prototyping</li>
                  <li>Projects requiring extensive customization</li>
                  <li>Developers who prefer readable and maintainable code</li>
                </ul>
              </div>
              <div className={css.conclusionDetail}>
                <h2 className={css.conclusionHeading}>Conclusion</h2>
                <p className={css.conclusionDescription}>
                  Choosing the perfect web development frameworks for your
                  progressive web applications is crucial in the debate between
                  front end development and back end development. The most
                  important consideration is your project's specific needs and
                  goals. The frontend landscape offers immaculate solutions like
                  JavaScript frameworks, Svelte, Angular, Vue.js, Ember.js, and
                  React.js, each with unique benefits and capabilities. By
                  understanding their functionalities, you can select the
                  appropriate frameworks for your web development project to
                  create dynamic and user-friendly
                </p>
                <div className={css.contactCover}>
                  <div className={css.contactHeading}>
                    Hire an experienced web/mobile app
                    <br />
                    development team?
                  </div>
                  <button className={css.contactButton}>
                    {" "}
                    <span className="rippleBlueEffect">&nbsp;</span>Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={css.rightContent}>
            <BuildDreamForm className={css.buildFormContainer} />
            <div className={css.verticleImage}>
              <IconCollection name="verticleIcode" />
            </div>
          </div>
        </div>
        <div className={css.relatedWrapper}>
          <div className={css.relatedHeading}>Related Post</div>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            // pagination={{ clickable: true }}
            // navigation={true}
            className="mySwiper"
            modules={[Pagination, Navigation]} // Add Navigation module
            // className={css.sliderContainer}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
              },
              500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1023: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1380: {
                slidesPerView: 3,
                spaceBetween: 0,
                spaceBetween: 40,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className={css.swipercSlide}>
                <div key={card.id} className={css.card}>
                  <div className={css.cardImage}>
                    <Image src={card?.imageUrl} alt={card.title} />
                  </div>
                  <div className={css.cardRow}>
                    <div className={css.cardType}>{card.type}</div>
                    <span>
                      <IconCollection name="blueArrow" />
                    </span>
                  </div>
                  <div className={css.cardTitle}>{card?.title}</div>
                  <div className={css.category}>{card.description}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWidth>
    </div>
  );
};

export default page;
