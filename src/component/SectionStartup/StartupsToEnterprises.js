"use client";
import React from "react";
import ContentWidth from "../ContentWidth/ContentWidth";
import css from "./StartupToEnterprises.module.css";
import img1 from "../../assets/imgs/icons/statupIcons/1.svg";
import img2 from "../../assets/imgs/icons/statupIcons/2.svg";
import img3 from "../../assets/imgs/icons/statupIcons/3.svg";
import img4 from "../../assets/imgs/icons/statupIcons/4.svg";
import img5 from "../../assets/imgs/icons/statupIcons/5.svg";
import img6 from "../../assets/imgs/icons/statupIcons/6.svg";
import img7 from "../../assets/imgs/icons/statupIcons/7.svg";
import img8 from "../../assets/imgs/icons/statupIcons/8.svg";
import img9 from "../../assets/imgs/icons/statupIcons/9.svg";
import img10 from "../../assets/imgs/icons/statupIcons/10.svg";
import img11 from "../../assets/imgs/icons/statupIcons/11.svg";
import img12 from "../../assets/imgs/icons/statupIcons/12.svg";
import img13 from "../../assets/imgs/icons/statupIcons/13.svg";
import Image from "next/image";

export default function StartupsToEnterprises(props, { hide }) {
  const { companyLogo } = props;

  console.log(companyLogo);

  return (
    <>
      <ContentWidth>
        <div className={css.SectionFromStartupsToWrapper}>
          <div className={css.headingContent}>
            {hide === "false" ? (
              <span className="subTitle">Clients & Partners</span>
            ) : (
              ""
            )}

            <h2>From Startups To Enterprises, We Transform Digital Visions</h2>
          </div>

          <div className={css.logoWrapper}>
            {companyLogo?.map((i, index) => {
              return (
                <>
                  <div className={css.logoContainer}>
                    <Image
                      width={120}
                      height={60}
                      src={i?.attributes?.logo?.data?.attributes?.url}
                      alt="..."
                      noimgtag={i.noImgTag}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </ContentWidth>

      <div className={css.logoStripContainer}>
        <div className={css.topBar}>
          {topBar.map((i, index) => {
            return <Image width={132} height={60} src={i.logo} />;
          })}
        </div>

        <div className={css.bottomBar}>
          {bottomBar.map((i, index) => {
            return <Image width={132} height={60} src={i.logo} />;
          })}
        </div>
      </div>
    </>
  );
}

const logoContainer = [
  { logo: img1 },
  { logo: img2 },
  { logo: img3 },
  { logo: img4 },
  { logo: img5 },
  { logo: img6 },
  { logo: img7 },
  { logo: img8 },
  { logo: img9 },
  { logo: img10 },
  { logo: img11 },
  { logo: img12 },
  { logo: img13 },
  { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
  // { logo: "", noImgTag: "noImg" },
];

const topBar = [
  { logo: img1 },
  { logo: img2 },
  { logo: img3 },
  { logo: img4 },
  { logo: img5 },
  { logo: img6 },
];

const bottomBar = [
  { logo: img7 },
  { logo: img8 },
  { logo: img9 },
  { logo: img10 },
  { logo: img11 },
  { logo: img12 },
  { logo: img13 },
];
