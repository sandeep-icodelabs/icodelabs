import React from "react";
import css from "./AboutTeamCard.module.css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";

function AboutTeamCard(props) {
  const { image, memberName, designation } = props;
  return (
    <div className={css.teamCard}>
      <div className={css.teamIcon}>
        <Image src={image} alt="about organization" />
      </div>
      {/* <div className={css.teamContent}>
                <div className={css.linkedIcon}>
                    <IconCollection name="footerLinkedIn" />
                </div>
                <div className={css.teamDetail}>
                    <div className={css.memberName}>{memberName}</div>
                    <div className={css.designation}>{designation}</div>
                </div>
            </div> */}
    </div>
  );
}

export default AboutTeamCard;
