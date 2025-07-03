import React from "react";
import css from "./Flutter.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={css.flutterHero}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          BEST FLUTTER APP<br />
          DEVELOPMENT COMPANY
        </h1>
        
        <p className={css.heroDescription}>
          Flutter is a popular framework by Google that allows developers to build 
          cross-platform applications using a single codebase. This ensures 
          seamless performance and a stunning UI across both iOS and Android 
          devices. With Flutter, businesses can create visually appealing, high-
          performance applications cost-effectively.
        </p>

        <button className={css.getStartedButton}>
            <span className="rippleEffect"></span>
          Get Started
        </button>
      </div>

    
    </div>
  );
};

export default Hero;