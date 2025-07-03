"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import css from "./MarketplaceSection.module.css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";
import rentalImg from "../../assets/imgs/icons/tabMenu/rental.svg";
import serviceImg from "../../assets/imgs/icons/tabMenu/service.svg";
import productImg from "../../assets/imgs/icons/tabMenu/product.svg";
import bookingImg from "../../assets/imgs/icons/tabMenu/bookingNevents.svg";
import TabImg from "../../assets/imgs/images/tabImg.png";
import servies from "../../assets/imgs/images/services.png";
import products from "../../assets/imgs/images/products.png";
import booking from "../../assets/imgs/images/booking.png";
import ContentWidth from "../ContentWidth/ContentWidth";
import Link from "next/link";
 
const MarketplaceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const toggleAccordion = (index) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
  };

  return (
    <section>
      <ContentWidth>
        <div className={css.contentContainer}>
          <h2>Built for Growth & Customization</h2>
          <p>
            <span>Our platforms are built to evolve.</span>Whether you need CRM
            automation, marketplace extensions, or entirely new workflows — our
            modular, API-first architecture keeps you ready for what’s next.
          </p>
        </div>

        <div className={css.tabMenuContainerWrapper}>
          <div className={css.tabMenuContainer}>
            <div className={css.TabsContainerWrapper}>
              {/* menu Content Mapping is here */}
              {tabMenu.map((i, index) => {
                return (
                  <React.Fragment key={i.id}>
                    <div className={css.testing}>
                      <div
                        className={`${css.tabsContainer} ${
                          activeTab === i.id ? css.activeTab : ""
                        }`}
                        onClick={() => handleTabClick(i.id)}
                      >
                        {/* tab's Container */}
                        <div className={css.tabItem}>
                          <div className={css.tabImgContainer}>
                            <Image
                              src={i.img}
                              width={40}
                              height={40}
                              alt={i.heading}
                            />
                          </div>
                          <div>
                            <h5>{i.heading}</h5>
                            <p>{i.subHeading}</p>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className={css.tabContentContainerWrapper}>
              {tabMenu[activeTab]?.tabContent?.map((i, index) => (
                <div key={index}>
                  <div className={css.tabContentContainer}>
                    <div className={css.titleNarrowContainer}>
                      <div>
                        <h3>{i.title}</h3>
                        <p>{i.content}</p>
                      </div>

                      <a
                        href="https://calendly.com/jaytiwary"
                        className="primaryBtn"
                      >
                        Explore More <IconCollection name="rightArrowTop" />
                      </a>
                    </div>

                    <div className={css.pointsNimgContainer}>
                      <ul className={css.pointContainer}>
                        {i.points?.map((point, i) => (
                          <li key={i}>
                            <IconCollection name="colorCheck" />
                            <div>
                              <h6>{point.title}</h6>
                              <p>{point.info}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className={css.imgContainer}>
                        <Image
                          src={i.img}
                          width={500}
                          height={500}
                          alt={i.title}
                          className={css.tabImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={css.accordionWrapper}>
          <div className={css.accordionContainer}>
            {tabMenu.map((tab, idx) => (
              <div key={tab.id} className={css.accordionItem}>
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={css.accordionHeader}
                >
                  <div className={css.headerContent}>
                    <h3 className={css.heading}>
                      {tab.prefix} {tab.heading} <span>{tab.subHeading}</span>
                    </h3>
                  </div>
                  <span className={css.toggleIcon}>
                    {activeAccordionIndex !== idx ? (
                      <IconCollection name="dropdown" />
                    ) : (
                      <IconCollection name="dropdownUP" />
                    )}
                  </span>
                </button>

                {activeAccordionIndex === idx && (
                  <div className={css.accordionBody}>
                    {tab.tabContent.map((content) => (
                      <div key={content.id}>
                        <Image
                          src={content.img}
                          alt={content.title}
                          width={600}
                          height={300}
                          className={css.contentImage}
                        />
                        {/* <h4 className={css.contentTitle}>{content.title}</h4> */}
                        <p className={css.contentText}>{content.content}</p>

                        <Link href={content.btnLink} className="primaryBtn">
                          {content.btnText}
                          <IconCollection name="rightArrowTop" />
                        </Link>

                        <ul className={css.pointList}>
                          {content.points.map((point, i) => (
                            <li key={i} className={css.pointItem}>
                              <IconCollection name="colorCheck" />
                              <div>
                                <h5>{point.title}</h5>
                                <p> {point.info}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default MarketplaceSection;
const tabMenu = [
  {
    id: 0,
    prefix: "01.",
    img: rentalImg,
    heading: "Rental",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 1,
        title: "Rental Marketplaces",
        btnText: "Explore More",
        btnLink: "#",
        content:
          "We build flexible rental platforms with real-time calendars, deposit flows, and smart booking systems.",
        btnRoute: "",
        img: TabImg,
        points: [
          {
            title: "Car Rental",
            info: "Local or peer-to-peer vehicle sharing with location filters and timed pricing.",
          },
          {
            title: "Equipment Rentals",
            info: "Tools, electronics, & camera gear — with availability logic and condition tracking.",
          },
          {
            title: "Fashion & Accessories",
            info: "On-demand clothing, bags, & jewelry rentals with calendar-based checkout and return policies.",
          },
          {
            title: "Space Rentals",
            info: "Studios, event venues, or coworking spaces — including hourly/daily rates and scheduling sync.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    prefix: "02.",
    img: serviceImg,
    heading: "Service",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 2,
        title: "Service Marketplaces",
        btnText: "Explore More",
        btnLink: "#",
        content:
          "Book services with confidence — from professionals to creatives and consultants.",
        btnRoute: "",
        img: servies,
        points: [
          {
            title: "Beauty & Wellness Platforms",
            info: "Salons, spas, freelancers with appointment slots, staff availability, & reviews.",
          },
          {
            title: "Local Services",
            info: "Availability and job workflows with geo-located tasker, cleaner or mechanics",
          },
          {
            title: "Consulting Marketplaces",
            info: "One-on-one sessions, coaching, or expert matching with time-based pricing & Zoom/Google Meet integrations.",
          },
          {
            title: "Freelance Platforms",
            info: "Creator & dev marketplaces including portfolio listings and milestone-based payments.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    prefix: "03.",
    img: productImg,
    heading: "Product",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 3,
        title: "Product Marketplaces",
        btnText: "Explore More",
        btnLink: "#",
        content:
          "Multi-vendor commerce with robust order flows, inventory sync, and e-commerce integrations.",
        btnRoute: "",
        img: products,
        points: [
          {
            title: "Custom Product Platforms",
            info: "Unique products, creator shops, or maker communities — fully branded experiences.",
          },
          {
            title: "Resale & Thrift Marketplaces",
            info: "Buy/sell secondhand goods with moderation tools and dispute resolution.",
          },
          {
            title: "Drop-shipping Marketplaces",
            info: "Vendor-managed inventory integrated with platforms like Shopify and WooCommerce.",
          },
          {
            title: "Subscription Box Marketplaces",
            info: "Recurring deliveries with AI-based personalization and reorder logic.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    prefix: "04.",
    img: bookingImg,
    heading: "Booking & Events",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 4,
        title: "Booking & Events Platforms",
        btnText: "Explore More",
        btnLink: "#",
        content:
          "Simplify scheduling for group sessions, events, or classes — with smart calendar sync.",
        btnRoute: "",
        img: booking,
        points: [
          {
            title: "Hospitality & Stays",
            info: "Salons, spas, freelancers with appointment slots, staff availability, & reviews.",
          },
          {
            title: "Co-Working Spaces",
            info: "Desk/room booking with hourly billing, check-in/check-out, and membership logic.",
          },
          {
            title: "Event Booking Platforms",
            info: "Ticketed or reservation-based events, with user limits, time slots, and auto-reminders.",
          },
          {
            title: "Course Marketplaces",
            info: "Live class and video session booking with calendar views and AI-generated course summaries.",
          },
        ],
      },
    ],
  },
];
