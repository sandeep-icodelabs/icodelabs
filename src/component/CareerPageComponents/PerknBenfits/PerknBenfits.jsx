"use client";

import React from "react";
import css from "./PerknBenfits.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import icodelogo from "../../../assets/imgs/icons/icodelabs.svg";
import Image from "next/image";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function PerknBenfits({ data }) { 

  return (
    <div>
      <div>
        <ContentWidth className={css.mainWrapper}>
          <div className={css.contentWrapper}>
            <Image
              src={icodelogo}
              alt="perks and benefits"
              className={css.image}
            />
            <h2>Perks & Benefits at Icodelabs</h2>
            <h4>
              We believe great work happens when people feel valued, supported,
              and inspired. At Icodelabs, we don’t just offer jobs — we build
              experiences that matter.
            </h4>

            <h5>Here’s 👋 what our team enjoys</h5>
          </div>
        </ContentWidth>

        <div className={css.pointsWrapper}>
          <div className={css.yBorder}>
            <ContentWidth>
              <div className={css.rowContainer}>
                {data.row1.map((item, index) => (
                  <div key={index} className={css.pointCard}>
                    <div className={css.imgWrapper}>{item.img}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </ContentWidth>
          </div>

          <div className={css.yBorder}>
            <ContentWidth>
              <div className={css.rowContainer}>
                {data.row2.map((item, index) => (
                  <div key={index} className={css.pointCard}>
                    <div className={css.imgWrapper}>{item.img}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </ContentWidth>
          </div>

          <div className={css.yBorder}>
            <ContentWidth>
              <div className={css.rowContainer}>
                {data.row3.map((item, index) => (
                  <div key={index} className={css.pointCard}>
                    <div className={css.imgWrapper}>{item.img}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </ContentWidth>
          </div>

          <div className={css.yBorder}>
            <ContentWidth>
              <div className={css.rowContainer}>
                {data.row4.map((item, index) => (
                  <div key={index} className={css.pointCard}>
                    <div className={css.imgWrapper}>{item.img}</div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </ContentWidth>
          </div>
        </div>
      </div>
    </div>
  );
}
