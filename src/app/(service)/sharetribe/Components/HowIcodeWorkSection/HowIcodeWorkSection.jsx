import React from "react";
import css from "./HowIcodeWorkSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";
import slackImg from "../../../../../assets/imgs/logo/slack.svg";
import stripeImg from "../../../../../assets/imgs/logo/stripe.svg";
import figmaImg from "../../../../../assets/imgs/logo/figma.svg";

export default function HowIcodeWorkSection() {
  return (
    <section className={css.howIcodeWorkSection}>
      <ContentWidth className={css.Sectionwrapper}>
        <div className={css.contentContainer}>
          <span className="subTitle">How icodelabs Work for you?</span>
          <h2>Fast, Convenient & Reliable</h2>
        </div>

        <div className={css.trioGrid}>
          {steps.map((i, index) => {
            return (
              <>
                <div className={css.stepCard}>
                  <div className={css.gradientText}>{i.stepNumber}</div>

                  <div className={css.content}>
                    <h5>{i.title}</h5>
                    <p>{i.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className={css.logoContainer}>
          {logoNtextData.map((i, index) => {
            return (
              <>
                <div className={css.imgNtextContainer}>
                  <Image width={32} height={32} src={i.img} alt={i.text} />
                  <p className="subTitle">{i.text}</p>
                </div>
              </>
            );
          })}
        </div>

        <Link href="" className="primaryBtnWhite">
          Claim Your FREE 15min Call
          <IconCollection name="rightArrowTopDark" />
        </Link>
      </ContentWidth>
    </section>
  );
}

const steps = [
  {
    stepNumber: (
      <svg
        width="50"
        height="111"
        viewBox="0 0 50 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.775 110.16V20.196L29.376 22.491C27.846 25.653 25.653 28.611 22.797 31.365C19.941 34.017 16.575 36.312 12.699 38.25C8.925 40.086 4.692 41.463 0 42.381V19.431C3.774 18.921 7.701 17.697 11.781 15.759C15.861 13.719 19.533 11.322 22.797 8.568C26.163 5.712 28.56 2.856 29.988 0H49.725V110.16H26.775Z"
          fill="url(#paint0_linear_9656_2641)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9656_2641"
            x1="24.8625"
            y1="0"
            x2="24.8625"
            y2="110.16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#393939" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Quote Your Request",
    description:
      "Pick a Subscription plan and get as many designs as you demand.",
  },
  {
    stepNumber: (
      <svg
        width="81"
        height="112"
        viewBox="0 0 81 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.071 111.69V93.33C11.169 85.068 19.584 77.979 26.316 72.063C33.15 66.045 38.556 60.741 42.534 56.151C46.614 51.561 49.521 47.379 51.255 43.605C52.989 39.831 53.856 36.057 53.856 32.283C53.856 27.795 52.632 24.327 50.184 21.879C47.838 19.329 44.523 18.054 40.239 18.054C35.751 18.054 32.028 19.431 29.07 22.185C26.112 24.939 24.276 28.713 23.562 33.507H0C1.122 23.103 5.355 14.943 12.699 9.027C20.043 3.009 29.529 0 41.157 0C52.989 0 62.22 3.06 68.85 9.18C75.48 15.198 78.795 23.613 78.795 34.425C78.795 39.525 77.928 44.421 76.194 49.113C74.562 53.805 71.808 58.65 67.932 63.648C64.056 68.646 58.752 74.154 52.02 80.172C45.39 86.088 37.077 92.871 27.081 100.521L21.42 93.636H80.937V111.69H1.071Z"
          fill="url(#paint0_linear_9656_2642)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9656_2642"
            x1="40.4685"
            y1="0"
            x2="40.4685"
            y2="111.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#393939" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Get Your Visionary Design",
    description:
      "Within 7 business days receive lightning-fast delivery on average.",
  },
  {
    stepNumber: (
      <svg
        width="83"
        height="114"
        viewBox="0 0 83 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.534 113.22C34.782 113.22 27.795 111.843 21.573 109.089C15.453 106.233 10.455 102.102 6.579 96.696C2.805 91.188 0.612 84.507 0 76.653H23.409C24.225 82.977 26.163 87.669 29.223 90.729C32.283 93.687 36.414 95.166 41.616 95.166C46.104 95.166 49.827 93.84 52.785 91.188C55.845 88.536 57.375 84.66 57.375 79.56C57.375 74.664 55.896 70.737 52.938 67.779C50.082 64.719 45.186 63.189 38.25 63.189H28.458V45.441H37.791C43.809 45.441 48.144 44.115 50.796 41.463C53.448 38.811 54.774 35.445 54.774 31.365C54.774 27.489 53.754 24.327 51.714 21.879C49.674 19.329 46.206 18.054 41.31 18.054C37.128 18.054 33.507 19.329 30.447 21.879C27.387 24.429 25.5 28.305 24.786 33.507H1.224C2.142 26.571 4.335 20.604 7.803 15.606C11.271 10.608 15.912 6.783 21.726 4.131C27.54 1.377 34.323 0 42.075 0C49.827 0 56.457 1.224 61.965 3.672C67.575 6.018 71.91 9.384 74.97 13.77C78.03 18.156 79.56 23.409 79.56 29.529C79.56 34.629 78.387 39.117 76.041 42.993C73.695 46.869 70.737 49.878 67.167 52.02C63.699 54.162 60.18 55.233 56.61 55.233L56.457 52.02C61.863 52.02 66.504 53.346 70.38 55.998C74.256 58.548 77.214 62.016 79.254 66.402C81.294 70.686 82.314 75.48 82.314 80.784C82.314 87.414 80.58 93.177 77.112 98.073C73.644 102.969 68.901 106.743 62.883 109.395C56.865 111.945 50.082 113.22 42.534 113.22Z"
          fill="url(#paint0_linear_9656_2643)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9656_2643"
            x1="41.157"
            y1="0"
            x2="41.157"
            y2="113.22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#393939" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Enhancement Process",
    description:
      "We'll keep refining the design until you say Stop and 100% satisfied!",
  },
];

const logoNtextData = [
  {
    img: stripeImg,
    text: `Reliable payment process with Stripe`,
  },
  {
    img: slackImg,
    text: `Easy Communication via Slack`,
  },
  {
    img: figmaImg,
    text: `Navigable Design Delivery in Figma`,
  },
];
