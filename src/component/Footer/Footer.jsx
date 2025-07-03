// components/Footer.js
"use client";
import React, { useState } from "react";
import css from "./Footer.module.css";
import Link from "next/link";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "@/services/service";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmailMutation = useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: async (body) => {
      await axios.post("http://localhost:3000/api/email", body);
    },
    onSuccess: () => {
      setSuccess(true);
      setEmail("");
      setError("");
    
      setTimeout(() => setSuccess(false), 3000);  
    },
    
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });
  
  return (
    <footer className={css.footerBox}>
      <ContentWidth>
        <div className={css.topFooterWrapper}>
          <div className={css.marketplaceContainer}>
            <h6>MARKETPLACE</h6>
            <ul>
              {marketplace.map((i, index) => (
                <li key={index}>
                  <Link href={i.Slug}>{i.SubTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.servicesContainer}>
            <h6>Our services</h6>
            <ul>
              {services.map((i, index) => (
                <li key={index}>
                  <Link href={i.Slug}>{i.SubTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.sharetribeContainer}>
            <h6>sharetribe</h6>
            <ul>
              {sharetribe.map((i, index) => (
                <li key={index}>
                  <Link href={i.Slug}>{i.SubTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.technologiesContainer}>
            <h6>technologies</h6>
            <ul>
              {technologies.map((i, index) => (
                <li key={index}>
                  <Link href={i.Slug}>{i.SubTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={css.bottomFooterWrapper}>
          <div className={css.logoNcontent}>
            <IconCollection name="headerLogo" />
            <p>
              Web application development, Mobile app development, Outsource
              software development company in India.
            </p>

            <div className={css.inputWrapper}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (!email || !validateEmail(email)) {
                    setError("Please enter a valid email address.");
                    return;
                  }

                  sendEmailMutation.mutate({ email });
                }}
                disabled={sendEmailMutation.isPending}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                <IconCollection name="footerInputIconBlue" />
              </button>

              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sendEmailMutation.isPending}
              />
            </div>

            {success && (
              <p className={css.successMessage}>
                Thank you! Your email has been submitted successfully.
              </p>
            )}
            {error && <p className={css.errorMessage}>{error}</p>} 
              
          </div>

          <div className={css.logoContainer}>
            <div className={css.companyContent}>
              <h6>Company</h6>
              <ul>
                {company.map((i, index) => (
                  <li key={index}>
                    <Link href={i.Slug}>{i.SubTitle}</Link>
                  </li>
                ))}
              </ul>

              <div className={css.socialWrapper}>
                <h6>Let’s be social</h6>
                <div className={css.iconsContainer}>
                  <a
                    href="https://www.facebook.com/InnovativecodeLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconCollection name="fbFooter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/icodelabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconCollection name="likdinFooter" />
                  </a>
                  <a
                    href="https://www.instagram.com/icode_labs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconCollection name="igFooter" />
                  </a>
                </div>
              </div>
            </div>

            <div className={css.contactusWrapper}>
              <h6>Contact Us</h6>
              <div className="phoneWrapper">
                <div className={css.iconNtextContainer}>
                  <IconCollection name="phoneFooter" />
                  <div className={css.verticalBar}></div>
                  <div>
                    <p>(864) 528-2102</p>
                    <p>(864) 528-2102</p>
                  </div>
                </div>
              </div>

              <div className="phoneWrapper">
                <div className={css.iconNtextContainer}>
                  <IconCollection name="emailFooter" />
                  <div className={css.verticalBar}></div>
                  <div>
                    <p>hello@icodelabs.co</p>
                    <p>hello@icodelabs.co</p>
                    <p>hello@icodelabs.co</p>
                  </div>
                </div>
              </div>

              <div className="locationWrapper">
                <div className={`${css.iconNtextContainer} ${css.hideContent}`}>
                  <IconCollection name="locationFooter" className={css.hideStyle} />

                  <div className={css.verticalBar}></div>
                  <div>
                    <p>
                      D-176, Phase 8B, Industrial Area, Sector 74, Sahibzada
                      Ajit Singh Nagar, Punjab 160055
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.lowerFooterWrapper}>
          © Copyright 2025. INNOVATIVE CODE LABS PVT. LTD. All Rights Reserved
        </div>
      </ContentWidth>
    </footer>
  );
};

export default Footer;

const marketplace = [
  { Slug: "rental-marketplace", SubTitle: "Rental Marketplace" },
  { Slug: "service-marketplace", SubTitle: "Service Marketplace" },
  { Slug: "product-marketplace", SubTitle: "Product Marketplace" },
  {
    Slug: "booking-events-marketplace",
    SubTitle: "Booking & Events Marketplace",
  },
];

const services = [
  { Slug: "shartirbe-development", SubTitle: "Shartirbe Development" },
  { Slug: "ai-based-development", SubTitle: "AI Based Development" },
  {
    Slug: "react-native-app-development",
    SubTitle: "React Native App Development",
  },
  { Slug: "web-development", SubTitle: "Web Development" },
  { Slug: "digital-marketing", SubTitle: "Digital Marketing" },
];

const sharetribe = [
  {
    Slug: "",
    SubTitle: "Text Here",
  },
  {
    Slug: "",
    SubTitle: "Text Here",
  },
  {
    Slug: "",
    SubTitle: "Text Here",
  },
  {
    Slug: "",
    SubTitle: "Text Here",
  },
  {
    Slug: "",
    SubTitle: "Text Here",
  },
];

const industries = [
  { Slug: "food-delivery", SubTitle: "Food Delivery" },
  { Slug: "fitness", SubTitle: "Fitness" },
  { Slug: "real-estate", SubTitle: "Real Estate" },
  { Slug: "home-services", SubTitle: "Home Services" },
  { Slug: "education", SubTitle: "Education" },
  { Slug: "e-commerce-delivery", SubTitle: "E-Commerce Delivery" },
  { Slug: "healthcare", SubTitle: "Healthcare" },
  { Slug: "taxi-transportation", SubTitle: "Taxi and Transportation" },
  { Slug: "pickup-delivery", SubTitle: "Pickup & Delivery" },
];

const company = [
  { Slug: "our-company", SubTitle: "Our Company" },
  { Slug: "why-icodelabs", SubTitle: "Why Icodelabs" },
  { Slug: "contact-us", SubTitle: "Contact Us" },
  { Slug: "how-we-work", SubTitle: "How we work" },
  { Slug: "privacy-terms", SubTitle: "Privacy & Terms" },
  { Slug: "blogs", SubTitle: "Blogs" },
  { Slug: "career", SubTitle: "Career" },
  // { Slug: "contact-us", SubTitle: "Contact Us" },
];

const technologies = [
  {
    Slug: "marketplace-platform-frameworks",
    SubTitle: "Marketplace & Platform Frameworks",
  },
  { Slug: "ai-machine-learning", SubTitle: "AI & Machine Learning" },
  { Slug: "mobile-app-development", SubTitle: "Mobile App Development" },
  {
    Slug: "api-integrations-workflow",
    SubTitle: "Integrations, APIs & Workflow Automation",
  },
  {
    Slug: "backend-serverless",
    SubTitle: "Backend, Infrastructure & Serverless",
  },
  { Slug: "jamstack-frontend", SubTitle: "JAMstack & Frontend Technologies" },
];
