import React from "react";
import css from "./ImageNcontentSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";
import Link from "next/link";

export default function ImageNcontentSection() {
  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.imgNcontentContainer}>
        <div className={css.imgContainer}>
          <Image
            src="/assests/img/reactApp1.png"
            width={271}
            height={588}
            quality={100}
            alt="..."
          />
          <Image
            src="/assests/img/reactApp2.png"
            width={271}
            height={588}
            quality={100}
            alt="..."
          />
        </div>

        <div className={css.contentContainer}>
          <h2>React Apps. Powerful. Engaging. Branded.</h2>
          <p>
            Unlock the full potential of your business with our custom mobile
            app development services. We specialize in creating intuitive,
            scalable, and high-performing mobile applications tailored to your
            unique needs. From idea to launch,{" "}
          </p>
          <p>
            our team ensures every app is designed with user experience,
            performance, and innovation at its core—helping you engage
            customers, streamline operations, and stay ahead in the digital
            world.
          </p>

          <a className="primaryBtn">Say Hi👋 to Discuss a project</a>
        </div>
      </div>
    </ContentWidth>
  );
}

export function TextnImageSection() {
  return (
    <section className={css.textnImgSectionWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth className={css.mainWrapper}>
        <div className={css.TextnImgContainer}>
          <div className={css.contentContainer}>
            <h2>
              Grow Your Business With The Help Of <span>Icode</span>labs
            </h2>
            <p>
              Our comprehensive services range from strategic planning and
              market research to operational optimization and digital
              transformation.{" "}
            </p>
            <Link href={"#"} className="primaryBtn">
              Let’s Discuss with us! 👋
            </Link>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
