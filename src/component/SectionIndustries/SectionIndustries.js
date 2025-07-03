import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import css from "./SectionIndustries.module.css";
import image1 from "../../assets/images/industriesSlider/industries1.png";
import image2 from "../../assets/images/industriesSlider/industries2.png";
import image3 from "../../assets/images/industriesSlider/industries3.png";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";

const slides = [
  {
    title: "Cab Service",
    image: image1,
    description: [
      "On-Demand Cab Service",
      "24/7 Availability",
      "Affordable Rates",
    ],
    icon: <IconCollection name="car_icon" />,
    iconTitle: "Taxi",
  },
  {
    title: "Healthcare",
    image: image2,
    description: [
      "AI-Based Patient Monitoring",
      "Real-Time Data",
      "Remote Consultations",
      "Personalized Care",
      "Secure Records",
    ],
    icon: <IconCollection name="health_care_icon" />,
    iconTitle: "Hospital",
  },
  {
    title: "Food Delivery",
    image: image3,
    description: [
      "On-Demand Food Delivery",
      "Wide Variety",
      "Fast Delivery",
    ],
    icon: <IconCollection name="food_icon" />,
    iconTitle: "Food",
  },
  {
    title: "Cab Service",
    image: image1,
    description: [
      "On-Demand Cab Service",
      "24/7 Availability",
      "Affordable Rates",
      "Professional Drivers",
      "Easy Booking",
    ],
    icon: <IconCollection name="home_icon" />,
    iconTitle: "Taxi",
  },
  {
    title: "Healthcare",
    image: image2,
    description: [
      "AI-Based Patient Monitoring",
      "Real-Time Data",
      "Remote Consultations",
      "Personalized Care",
      "Secure Records",
    ],
    icon: <IconCollection name="health_care_icon" />,
    iconTitle: "Hospital",
  },
  {
    title: "Food Delivery",
    image: image3,
    description: [
      "On-Demand Food Delivery",
      "Wide Variety",
      "Fast Delivery",
      "Easy Payment",
      "Customer Support",
    ],
    icon: <IconCollection name="health_care_icon" />,
    iconTitle: "Food",
  },
];

const SectionIndustries = (props) => { 
const { data = [] } = props.industries.data || {}; 
  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <svg
          width="1142"
          height="132"
          viewBox="0 0 1142 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.603906 129V2.99999H36.2439V129H0.603906ZM61.6 129V2.99999H90.94L160.42 86.88H146.56V2.99999H181.48V129H152.14L82.66 45.12H96.52V129H61.6ZM206.62 129V2.99999H266.2C280.12 2.99999 292.36 5.57999 302.92 10.74C313.48 15.9 321.7 23.16 327.58 32.52C333.58 41.88 336.58 53.04 336.58 66C336.58 78.84 333.58 90 327.58 99.48C321.7 108.84 313.48 116.1 302.92 121.26C292.36 126.42 280.12 129 266.2 129H206.62ZM242.26 100.56H264.76C271.96 100.56 278.2 99.24 283.48 96.6C288.88 93.84 293.08 89.88 296.08 84.72C299.08 79.44 300.58 73.2 300.58 66C300.58 58.68 299.08 52.44 296.08 47.28C293.08 42.12 288.88 38.22 283.48 35.58C278.2 32.82 271.96 31.44 264.76 31.44H242.26V100.56ZM413.47 131.52C394.87 131.52 380.35 126.42 369.91 116.22C359.47 106.02 354.25 91.56 354.25 72.84V2.99999H389.89V71.76C389.89 82.56 391.99 90.3 396.19 94.98C400.51 99.66 406.39 102 413.83 102C421.27 102 427.09 99.66 431.29 94.98C435.49 90.3 437.59 82.56 437.59 71.76V2.99999H472.69V72.84C472.69 91.56 467.47 106.02 457.03 116.22C446.59 126.42 432.07 131.52 413.47 131.52ZM541.114 131.52C530.794 131.52 520.834 130.26 511.234 127.74C501.754 125.1 494.014 121.74 488.014 117.66L499.714 91.38C505.354 94.98 511.834 97.98 519.154 100.38C526.594 102.66 533.974 103.8 541.294 103.8C546.214 103.8 550.174 103.38 553.174 102.54C556.174 101.58 558.334 100.38 559.654 98.94C561.094 97.38 561.814 95.58 561.814 93.54C561.814 90.66 560.494 88.38 557.854 86.7C555.214 85.02 551.794 83.64 547.594 82.56C543.394 81.48 538.714 80.4 533.554 79.32C528.514 78.24 523.414 76.86 518.254 75.18C513.214 73.5 508.594 71.34 504.394 68.7C500.194 65.94 496.774 62.4 494.134 58.08C491.494 53.64 490.174 48.06 490.174 41.34C490.174 33.78 492.214 26.94 496.294 20.82C500.494 14.7 506.734 9.78 515.014 6.05999C523.294 2.33999 533.614 0.479992 545.974 0.479992C554.254 0.479992 562.354 1.43999 570.274 3.36C578.314 5.16 585.454 7.85999 591.694 11.46L580.714 37.92C574.714 34.68 568.774 32.28 562.894 30.72C557.014 29.04 551.314 28.2 545.794 28.2C540.874 28.2 536.914 28.74 533.914 29.82C530.914 30.78 528.754 32.1 527.434 33.78C526.114 35.46 525.454 37.38 525.454 39.54C525.454 42.3 526.714 44.52 529.234 46.2C531.874 47.76 535.294 49.08 539.494 50.16C543.814 51.12 548.494 52.14 553.534 53.22C558.694 54.3 563.794 55.68 568.834 57.36C573.994 58.92 578.674 61.08 582.874 63.84C587.074 66.48 590.434 70.02 592.954 74.46C595.594 78.78 596.914 84.24 596.914 90.84C596.914 98.16 594.814 104.94 590.614 111.18C586.534 117.3 580.354 122.22 572.074 125.94C563.914 129.66 553.594 131.52 541.114 131.52ZM638.44 129V31.26H599.74V2.99999H712.6V31.26H674.08V129H638.44ZM725.877 129V2.99999H783.477C794.997 2.99999 804.897 4.85999 813.177 8.57999C821.577 12.3 828.057 17.7 832.617 24.78C837.177 31.74 839.457 40.02 839.457 49.62C839.457 59.1 837.177 67.32 832.617 74.28C828.057 81.12 821.577 86.4 813.177 90.12C804.897 93.72 794.997 95.52 783.477 95.52H745.677L761.517 80.58V129H725.877ZM803.817 129L772.497 83.1H810.477L841.977 129H803.817ZM761.517 84.36L745.677 67.98H781.317C788.757 67.98 794.277 66.36 797.877 63.12C801.597 59.88 803.457 55.38 803.457 49.62C803.457 43.74 801.597 39.18 797.877 35.94C794.277 32.7 788.757 31.08 781.317 31.08H745.677L761.517 14.7V84.36ZM859.12 129V2.99999H894.76V129H859.12ZM952.876 51.78H1011.38V78.42H952.876V51.78ZM955.396 101.46H1021.28V129H920.116V2.99999H1018.94V30.54H955.396V101.46ZM1085.33 131.52C1075.01 131.52 1065.05 130.26 1055.45 127.74C1045.97 125.1 1038.23 121.74 1032.23 117.66L1043.93 91.38C1049.57 94.98 1056.05 97.98 1063.37 100.38C1070.81 102.66 1078.19 103.8 1085.51 103.8C1090.43 103.8 1094.39 103.38 1097.39 102.54C1100.39 101.58 1102.55 100.38 1103.87 98.94C1105.31 97.38 1106.03 95.58 1106.03 93.54C1106.03 90.66 1104.71 88.38 1102.07 86.7C1099.43 85.02 1096.01 83.64 1091.81 82.56C1087.61 81.48 1082.93 80.4 1077.77 79.32C1072.73 78.24 1067.63 76.86 1062.47 75.18C1057.43 73.5 1052.81 71.34 1048.61 68.7C1044.41 65.94 1040.99 62.4 1038.35 58.08C1035.71 53.64 1034.39 48.06 1034.39 41.34C1034.39 33.78 1036.43 26.94 1040.51 20.82C1044.71 14.7 1050.95 9.78 1059.23 6.05999C1067.51 2.33999 1077.83 0.479992 1090.19 0.479992C1098.47 0.479992 1106.57 1.43999 1114.49 3.36C1122.53 5.16 1129.67 7.85999 1135.91 11.46L1124.93 37.92C1118.93 34.68 1112.99 32.28 1107.11 30.72C1101.23 29.04 1095.53 28.2 1090.01 28.2C1085.09 28.2 1081.13 28.74 1078.13 29.82C1075.13 30.78 1072.97 32.1 1071.65 33.78C1070.33 35.46 1069.67 37.38 1069.67 39.54C1069.67 42.3 1070.93 44.52 1073.45 46.2C1076.09 47.76 1079.51 49.08 1083.71 50.16C1088.03 51.12 1092.71 52.14 1097.75 53.22C1102.91 54.3 1108.01 55.68 1113.05 57.36C1118.21 58.92 1122.89 61.08 1127.09 63.84C1131.29 66.48 1134.65 70.02 1137.17 74.46C1139.81 78.78 1141.13 84.24 1141.13 90.84C1141.13 98.16 1139.03 104.94 1134.83 111.18C1130.75 117.3 1124.57 122.22 1116.29 125.94C1108.13 129.66 1097.81 131.52 1085.33 131.52Z"
            fill="url(#paint0_linear_6628_6436)"
            fill-opacity="0.08"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6628_6436"
              x1="610.5"
              y1="-2.5"
              x2="610.5"
              y2="129"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>

        <h2>
          Transforming Various Industries Through On-Demand App Development
        </h2>
      </div>
      <Swiper
        slidesPerView={3.8}
        spaceBetween={60}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={css.sliderContainer}
        initialSlide={0}
        slidesOffsetBefore={120}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            slidesOffsetBefore: 40,
          },
          767: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1380: {
            slidesPerView: 3.8,
            spaceBetween: 30,
            slidesOffsetBefore: 60,
          },
          1600: {
            slidesPerView: 3.8,
            spaceBetween: 60,
            slidesOffsetBefore: 120,
          },
        }}
      >
        {data?.map(
          (slide, index) => ( 
            (
              <SwiperSlide key={index} className={css.swiperSlide}>
                <div className={css.imageContent}>
                  <img
                    src={slide?.attributes?.iImageHead?.data?.attributes?.url}
                    alt='image'
                    className={css.slideImage}
                  />
                  <h3 className={css.iconTitle}>
                    {slide.icon} <span>{slide.iconTitle}</span>
                  </h3>
                </div>
                <div className={css.slideContent}>
                  <h3 className={css.slideTitle}>
                    {" "}
                    {slide?.attributes?.iTTitle}
                  </h3>
                  <ul className={css.slideDescription}>
                    {slide?.attributes?.iTFeatures &&
                      slide?.attributes?.iTFeatures?.map(
                        (desc, i) => ( 
                           (
                           <li key={i}>{desc?.iFeatureTitle}</li>
                          )
                        )
                      )}
                  </ul>
                </div>
              </SwiperSlide>
            )
          )
        )}
      </Swiper>
    </div>
  );
};

export default SectionIndustries;
