import React from "react";
import css from "./Flutter.module.css";
import Image from "next/image";
import flutterLogo from "../../assets/images/Flutter/flutter-logo.png"; // Update with your actual logo path

const BottomCta = () => {
  return (
    <div className={css.bottomCta}>
      <div className={css.ctaContent}>
        <div className={css.logoSection}>
          <Image
            src={flutterLogo}
            alt="Flutter Logo"
          
            className={css.flutterLogo}
          />
        </div>
        
        <div className={css.ctaText}>
          <h2 className={css.ctaTitle}>
            Fuel Your Success With Flutter Brilliance
          </h2>
          <p className={css.ctaSubtitle}>
            Create Stunning Cross Platform App That Captivate
          </p>
          <button className={css.getStartedButton}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomCta;