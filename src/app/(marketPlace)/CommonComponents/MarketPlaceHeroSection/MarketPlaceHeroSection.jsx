import React from "react";
import css from "./MarketPlaceHeroSection.module.css";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";

export default function MarketPlaceHeroSection({ data }) {
  return (
    <section className={css.herosectionWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />

      <ContentWidth className={css.contentWrapper}>
        <div className={css.contentContainer}>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <Link href={data.btnLink} className="primaryBtn">
            {data.btnText} <IconCollection name="rightArrowTop" />
          </Link>
        </div>

        <div className={css.imgContainer}>
          <Image
            width={425}
            height={512}
            alt="two phone"
            src="/assests/img/rentalMarkeplace.png"
          />
        </div>
      </ContentWidth>
    </section>
  );
}
