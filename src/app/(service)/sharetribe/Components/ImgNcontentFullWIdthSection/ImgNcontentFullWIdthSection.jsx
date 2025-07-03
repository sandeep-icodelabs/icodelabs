import React from "react";
import css from "./ImgNcontentFullWIdthSection.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function ImgNcontentFullWIdthSection() {
  return (
    <div className={css.bgWrapper}>
      <div className={css.leftContainer}>
        <div>
          <IconCollection name="shareTribeWhite" />
          <h2>
            Quickly launch a successful marketplace with scalable, custom online
            solution.
          </h2>
          <p>
            We’ve built 50+ custom Web & Mobile marketplaces using Sharetribe{" "}
          </p>

          <a href="#" className="primaryBtnWhite">
            Start with Sharetribe <IconCollection name="arrowUpBlack" />
          </a>
        </div>
      </div>
      <div
        className={css.rightContainer}
        style={{ backgroundImage: "url(/assests/img/femaleWorkingOnLaptop.png" }}
      ></div>
    </div>
  );
}
