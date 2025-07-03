"use client";
import React, { useState } from "react";
import css from "./aboutUs.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import techThreePeople from "../../../assets/images/techThreePeople.png";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import solutionImage from "../../../assets/images/solution-image.png";
import visionImage from "../../../assets/images/whoweare/vision-image.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutTeamCard from "@/component/AboutTeamCard/AboutTeamCard";

import team1 from "../../../assets/imgs/images/aboutus/team1.png";
import team2 from "../../../assets/imgs/images/aboutus/team2.png";
import team3 from "../../../assets/imgs/images/aboutus/team3.png";
import team4 from "../../../assets/imgs/images/aboutus/team4.png";
import { Autoplay } from "swiper/modules";
import founderImage from "../../../assets/imgs/images/aboutus/founder-image.png";
import nowApp from "../../../assets/imgs/images/aboutus/now-app.png";
import CaseStudySliderCard from "@/component/CaseStudySliderCard/CaseStudySliderCard";

import easely from "../../../assets/imgs/images/aboutus/partners-logo/easely.png";
import sbonssy from "../../../assets/imgs/images/aboutus/partners-logo/sbonssy.png";
import cocoPool from "../../../assets/imgs/images/aboutus/partners-logo/cocopool.png";
import art from "../../../assets/imgs/images/aboutus/partners-logo/art.png";
import joova from "../../../assets/imgs/images/aboutus/partners-logo/joova.png";
import lulocal from "../../../assets/imgs/images/aboutus/partners-logo/lulocal.png";
import tarotBridge from "../../../assets/imgs/images/aboutus/partners-logo/tarot-bridge.png";
import insightGig from "../../../assets/imgs/images/aboutus/partners-logo/insight-gig.png";
import promotix from "../../../assets/imgs/images/aboutus/partners-logo/promotix.png";
import kalinoi from "../../../assets/imgs/images/aboutus/partners-logo/kalinoi.png";
import wounderJob from "../../../assets/imgs/images/aboutus/partners-logo/wounder-job.png";
import popseekl from "../../../assets/imgs/images/aboutus/partners-logo/popseekl.png";
import greenAreGood from "../../../assets/imgs/images/aboutus/partners-logo/green-are-good.png";
import core1 from "../../../assets/images/coreImg1.svg";
import core2 from "../../../assets/images/coreImg2.svg";
import core3 from "../../../assets/images/coreImg3.svg";
import core4 from "../../../assets/images/coreImg4.svg";
import core5 from "../../../assets/images/coreImg5.svg";
import SectionCaseStudy from "../../../component/SectionCaseStudy/SectionCaseStudy";
import StartupsToEnterprises from "@/component/SectionStartup/StartupsToEnterprises";
import SectionContactUs from "@/component/SectionContactUs/SectionContactUs";
import Link from "next/link";
import {
  blogDetail,
  companyLogoDetails,
  expProcesses,
  serviceDetails,
} from "@/services/service";
import Loader from "@/component/Loader";
import AboutUsAccordion from "./Components/AboutUsAccordion/AboutUsAccordion";

const partnersList = [
  {
    logo: easely,
  },
  {
    logo: sbonssy,
  },
  {
    logo: cocoPool,
  },
  {
    logo: art,
  },
  {
    logo: joova,
  },
  {
    logo: lulocal,
  },
  {
    logo: tarotBridge,
  },
  {
    logo: insightGig,
  },
  {
    logo: promotix,
  },
  {
    logo: kalinoi,
  },
  {
    logo: wounderJob,
  },
  {
    logo: popseekl,
  },
  {
    logo: greenAreGood,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconCollection name="slider_next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconCollection name="slider_prev" />
    </div>
  );
}

async function page() {
  const teamDeatil = [
    {
      image: team1,
      // memberName: "Gilbert MacGyver",
      // designation: "Administrator"
    },
    {
      image: team2,
      // memberName: "Maxine Howe",
      // designation: "Developer"
    },
    {
      image: team3,
      // memberName: "Blanche Hills PhD",
      // designation: "Developer"
    },
    {
      image: team4,
      // memberName: "Gilbert",
      // designation: "Administrator"
    },
  ];

  const ourApproachData = [
    {
      icon: "expert_team",
      title: "Expert Team",
      description:
        "We prioritize exceptional project delivery, providing constant status updates, scope control, and active customer engagement.",
    },
    {
      icon: "end-to-end_development",
      title: "End-to-End Development",
      description:
        "Delivering projects with innovation at the core, we provide tailor-made solutions that embrace the latest technology.",
    },
    {
      icon: "proven_track_record",
      title: "Proven Track Record",
      description:
        "Whether handling a single job or a portfolio of projects, our aim is to forge enduring client relationships with a supportive network.",
    },
    {
      icon: "agile_scalable_solutions",
      title: "Agile & Scalable Solutions",
      description:
        "We tailor each project to meet our client's unique goals, ensuring customer satisfaction remains at the heart of our delivery process.",
    },
  ];

  const ourMissionData = [
    {
      icon: "aboutOurArea",
      title: "Our Area of Expertise",
      description:
        "Our process begins with attentive listening, and understanding your issues, requirements, challenges, and objectives. We then delve into comprehending your business, market sector, and competitors, combining this information with our technical expertise and research. This approach enables us to deliver optimal solutions with maximum efficiency and cost-effectiveness.",
    },
    {
      icon: "aboutOurMission",
      title: "Our Mission",
      description:
        "Our client-centric solutions prioritize maximum productivity with minimal resources, upholding service delivery principles. Embodying our motto, 'Build Apps Driven By Innovation,' we strive to implement result-oriented product design and creation strategies, ensuring impactful and efficient outcomes.",
    },
    {
      icon: "aboutOurVision",
      title: "Our Vision",
      description:
        "Our custom software development company firmly believes that integrating mobile technology and digitizing processes for individuals and businesses can significantly simplify their lives, allowing them to focus more on their core business functions.",
    },
  ];

  const achievementsList = [
    {
      title: "250+",
      description: "App Development",
    },
    {
      title: "89%",
      description: "Average Client Retention Rate",
    },
    {
      title: "350+",
      description: "Marketplace Launched",
    },
    {
      title: "49+",
      description: "Startup Build",
    },
  ];

  const strengthList = [
    {
      coreIcon: core1,
      title: "Smooth and Effortless Delivery",
      description:
        "Experience smooth and effortless delivery for your projects with a service designed to keep things moving without a hitch. Whether you're managing tight deadlines, complex logistics, or high-stakes deliverables.",
    },
    {
      coreIcon: core2,
      title: "Better than the Best",
      description:
        "We set stretch goals for ourselves and our team. We must strive to pursue efficiency and effectiveness, speed and quality, but also exert a great amount of effort to achieve those goals.",
    },
    {
      coreIcon: core3,
      title: "Innovation at the Core",
      description:
        "We embrace new ideas, cutting-edge technology, frameworks and forward-thinking strategies to stay ahead in a rapidly evolving world. By fostering a culture of creativity. Innovation is at the core of everything we do",
    },
    {
      coreIcon: core4,
      title: "Long-Term Client Partnerships",
      description:
        "We believe that true success comes from relationships founded on trust, transparency, and mutual growth. Our goal isn’t just to deliver a service—it’s to become a reliable, strategic partner who understands your goals.",
    },
    {
      coreIcon: core5,
      title: "Customer-Centric Delivery Approach",
      description:
        "Our customer-centric delivery approach puts your needs at the forefront of every decision. We prioritize clear communication, flexibility, and we truly understanding your goals.",
    },
  ];

  const journeyList = [
    {
      years: "2019-20",
      title: "Icodelabs Established",
      description:
        "We don't just code AI — we help you think AI. From early idea validation to product-market fit, we help shape how AI fits your goals.",
    },
    {
      years: "2021-22",
      title: "Team Strength Increased to 75+ Developers",
      description:
        "We don't just code AI — we help you think AI. From early idea validation to product-market fit, we help shape how AI fits your goals.",
    },
    {
      years: "2022-23",
      title: "Meet Code Craft",
      description:
        "We don't just code AI — we help you think AI. From early idea validation to product-market fit, we help shape how AI fits your goals.",
    },
    {
      years: "2023-24",
      title: "150+ Technology Solutions Delivered",
      description:
        "We don't just code AI — we help you think AI. From early idea validation to product-market fit, we help shape how AI fits your goals.",
    },
    {
      years: "2025",
      title: "Coming Soon..",
      description:
        "We don't just code AI — we help you think AI. From early idea validation to product-market fit, we help shape how AI fits your goals.",
    },
  ];

  const caseStudyList = [
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
    {
      projectImage: nowApp,
      projectName: "Now App",
      projectDescription:
        "Flutter is a popular structure by Google that allows developers to create a cross-platform application using a single codebase. ",
    },
  ];

  const professionalsList = [
    {
      listTitle: "Our Approach",
      professionalsDetail: [
        {
          detail:
            "We specialize in Sharetribe marketplaces, custom product development, and AI integration, offering lean, high-impact solutions across industries.",
          detail2:
            "At Icodelabs, we don't just write code — we build scalable, intelligent platforms that solve real business problems. With a “Get Things Done” mindset and a growing team of 50+ professionals under one roof, we help clients move faster from concept to launch.",
        },
      ],
    },
    {
      listTitle: "Our Journey",
      professionalsDetail: [
        {
          detail:
            "We started in 2020, remotely during the COVID-19 lockdown, with just two developers and a shared belief: great tech doesn’t need to be bloated or slow. Today, we’re a full-fledged team working together in one city, delivering high-quality platforms for global clients — from MVPs to enterprise-grade builds.",
          detail2:
            "Over the past four years, we've launched over 50 Sharetribe-powered marketplaces and started integrating AI-driven features like GPT-based assistants, smart search, and workflow automation into our client platforms.",
        },
      ],
    },
    {
      listTitle: "Our Mission & Vision",
      professionalsDetail: [
        {
          detail:
            "We believe that integrating mobile technology and digitizing processes simplifies lives and helps businesses focus on their core functions. Our client-centric solutions maximize productivity with minimal resources while upholding strong service principles. Guided by our motto, 'Build Apps Driven By Innovation,' we deliver impactful, result-oriented product design and development.",
        },
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    speed: 3000,
    centerMode: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const caseSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    // autoplay: true,
    // speed: 3000,
    // centerMode: true,
    // autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  try {
    const [blogDetailData, companyLogo] = await Promise.all([
      blogDetail(),
      companyLogoDetails(),
    ]);
    const sortedBlogDetail = blogDetailData?.data?.data?.sort(
      (a, b) => b.id - a.id
    );

    return (
      <div>
        <div className={css.banner}>
          <h1 className={css.bannerTitle}>
            We are <span className={css.bannerTitleBox}>Icode</span>labs
          </h1>
          <h4 className={css.bannerSubtitle}>
            Ideate. Innovate. Create. Your Marketplace & AI Tech Partners
          </h4>
        </div>
        <section>
          <ContentWidth className={css.aboutSection}>
            <div className={css.professionalsWrapper}>
              <div className={css.professionalsList}>
                {professionalsList.map((item, i) => {
                  return (
                    <div className={css.professionalsCard} key={i}>
                      <div className={css.listTitle}>{item.listTitle}</div>
                      <div className={css.professionalsDetail}>
                        {item.professionalsDetail.map((detail, i) => {
                          return (
                            <div
                              key={i}
                              className={css.professionalsDescription}
                            >
                              <p>{detail.detail}</p>
                              {detail.detail2 && <p>{detail.detail2}</p>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={css.achievementsList}>
                <div className={css.achievementsDetail}>
                  {achievementsList.map((item, i) => {
                    return (
                      <div className={css.achievementsCountData} key={i}>
                        <div className={css.title}>{item.title}</div>
                        <div className={css.description}>
                          {item.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ContentWidth>
        </section>
        <section className={css.whatBest}>
          <ContentWidth className={css.whatBestSection}>
            <div className={css.whatBestHeading}>What We Do Best</div>
            <div className={css.whatBestDescription}>
              At Icodelabs, our foundation is built by passionate individuals
              who are both dreamers and doers. 
            </div>
            <div className={css.dreamersGrid}>
              <div className={css.columnCard}>
                <div className={css.dreamerLeftCard}>
                  <div className={css.gradientCard}>
                    <div className={css.gradientBox}>
                      <div className={css.cardIcon}>
                        <IconCollection name="ai_powered" />
                      </div>
                      <div className={css.cardMainHeading}>
                        AI-Powered Features
                      </div>
                      <div className={css.cardCategories}>
                        <span className={css.normalText}>Listings</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Matching</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Smart</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Search</span>
                      </div>
                    </div>
                  </div>
                  <div className={css.gradientCard}>
                    <div className={css.gradientBox}>
                      <div className={css.cardIcon}>
                        <IconCollection name="ui_ux" />
                      </div>
                      <div className={css.cardMainHeading}>UI/UX Design</div>
                      <div className={css.cardCategories}>
                        <span className={css.miniBold}>
                          Branding, and Product Strategy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.centerCard}>
                  <div className={css.cardIcon}>
                    <IconCollection name="sharetrie" />
                  </div>
                  <div className={css.cardMainHeading}>
                    Custom Sharetribe
                    <br /> Marketplaces <br />
                    (Mobile & Web
                    <br /> Templates)
                  </div>
                </div>
                <div className={css.dreamerRightCard}>
                  <div className={css.gradientCard}>
                    <div className={css.gradientBox}>
                      <div className={css.cardIcon}>
                        <IconCollection name="full_stack" />
                      </div>
                      <div className={css.cardMainHeading}>
                        Full-Stack Custom Web & Mobile Apps{" "}
                      </div>
                      <div className={css.cardCategories}>
                        <span className={css.normalText}>React</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Node.js</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Next.js</span>
                        <span className={css.dot}>&#x2022;</span>
                        <span className={css.normalText}>Flutter</span>
                      </div>
                    </div>
                  </div>
                  <div className={css.gradientCard}>
                    <div className={css.gradientBox}>
                      <div className={css.cardIcon}>
                        <IconCollection name="product_build" />
                      </div>
                      <div className={css.cardMainHeading}>
                        Rapid MVPs{" "}
                        <span className={css.grayColor}>
                          and scalable product builds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentWidth>
        </section>

        <section className={css.teamContainer}>
          <ContentWidth className={css.teamContent}>
            <div className={css.teamTopHeading}>
              <h2 className={css.teamHeading}>
                Empowering Businesses with
                <br className={css.teamPoint} /> Future-Ready Digital Solutions
              </h2>
              <p className={css.teamSubheading}>
                At Icodelabs, our foundation is built by passionate individuals
                who are both dreamers and doers. uided by a core set of values,
                everything we accomplish is a testament to the dedication and
                commitment of our exceptional team.
              </p>
            </div>
          </ContentWidth>
          <div className={css.teamSlider}>
            <div className={css.teamCard}>
              <Slider {...settings}>
                {teamDeatil.map((item, i) => {
                  return (
                    <AboutTeamCard
                      key={i}
                      image={item.image}
                      memberName={item.memberName}
                      designation={item.designation}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>

        <section className={css.weWillBuildSection}>
          <Image
            src="/assests/img/curveLine.svg"
            width={1924}
            height={366}
            quality={100}
            className={css.curveImg}
          />
          <div className={css.glowEffectOne} />
          <div className={css.glowEffectTwo} />
          <div className={css.glowEffectThree} />

          <div className={css.contentContainer}>
            <h2>We’ll Build a Custom Web & Mobile App Solution for You.</h2>
            <p>
              Whether you’re building your first marketplace, adding AI to an
              existing product, or looking for a reliable dev partner — we’d
              love to talk.
            </p>
            <Link href={"#"}>
              Explore Our Services <span>👋</span>
            </Link>
          </div>
        </section>

        <section className={css.strengthWrapper}>
          <ContentWidth className={css.strengthContainer}>
            <div className={css.coreValue}>
              <div className={css.coreValueHeading}>
                <div className={css.coretitle}>Our 5 Core Values</div>
              </div>
              <div className={css.rightColumn}>
                <div className={`${css.hideContentMobile} ${css.strengthList}`}>
                  {strengthList.map((item, i) => (
                    <div key={i} className={css.strengthCard}>
                      <div className={css.checkIcon}>
                        <Image src={item.coreIcon} alt={item.title} />
                      </div>
                      <div className={css.strengthListContent}>
                        <div className={css.strengthListWrapper}>
                          <div className={css.title}>{item.title}</div>
                          <span className="subTitle">{item.description}</span>
                          {typeof window !== "undefined" &&
                            window.innerWidth <= 768 && (
                              <div onClick={() => toggleAccordion(i)}>
                                <IconCollection
                                  name={
                                    openIndex === i
                                      ? "accordionMinus"
                                      : "accordionPlus"
                                  }
                                />
                              </div>
                            )}
                        </div>

                        {openIndex === i &&
                          typeof window !== "undefined" &&
                          window.innerWidth <= 768 && (
                            <div className={css.description}>
                              {item.description}
                            </div>
                          )}

                        {typeof window !== "undefined" &&
                          window.innerWidth > 768 && (
                            <div className={css.description}>
                              {item.description}
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                  {/* 6th card */}

                  <div
                    className={`${css.strengthCard} ${css.extraOrdinaryCard}`}
                  >
                    <div className={css.strengthListContent}>
                      <h1 className={css.extraOrdinaryTitle}>
                        Let’s Build Something Extraordinary Together
                      </h1>
                      <button
                        className={`${css.extraOrdinaryButton} primaryBtn`}
                      >
                        Say Hello👋
                      </button>
                    </div>
                  </div>
                </div>
                
                <AboutUsAccordion data={strengthList} />
              </div>
            </div>

            <div className={css.founderSection}>
              <div className={css.founderProfile}>
                <Image src={founderImage} alt="founder-image" />
              </div>
              <div className={css.founderContent}>
                <div className={css.meetText}>Meet the Founder</div>
                <div className={css.bottomContent}>
                  <div className={css.founderMessage}>
                    “Our team of skilled professionals is dedicated to
                    delivering high-quality digital design and development work
                    for businesses of all sizes and budgets. With a focus on
                    adaptation and growth, we understand the challenges small
                    businesses face and offer tailored solutions to help them
                    succeed in the online marketplace.”
                  </div>
                  <div className={css.founderName}>Jay Tiwari </div>
                  <div className={css.headInfo}>
                    Founder, Head of at Icodelabs.
                  </div>
                </div>
              </div>
            </div>
          </ContentWidth>
        </section>
        <section className={css.journeyContainer}>
          <ContentWidth className={css.journeyContent}>
            <div className={css.journeyRow}>
              <div className={css.journeyHeading}>
                It's been an
                <br className={css.journeyPoint} /> exciting
                <br className={css.journeyPoint} /> journey,
                <br className={css.journeyPoint} /> so far.
              </div>
              <div className={css.journeyDetail}>
                <ul>
                  {journeyList.map((item, i) => {
                    return (
                      <li>
                        <div className={css.stepYear}>{item.years}</div>
                        <div className={css.stepTitle}>{item.title}</div>
                        <div className={css.stepDescription}>
                          {item.description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </ContentWidth>
        </section>

        <section className={css.caseStudyContainer}>
          <SectionCaseStudy />
        </section>

        <section className={css.clientContainer}>
          <StartupsToEnterprises companyLogo={companyLogo?.data?.data} />
        </section>
        <SectionContactUs />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return (
      <div className={css.landingContainer}>
        <Loader />
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }
}

export default page;
