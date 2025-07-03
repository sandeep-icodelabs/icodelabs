"use client";
import React, { useState } from "react";
import css from "./AboutUsAccordion.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";

export default function AboutUsAccordion({ data }) {
  const [open, setopen] = useState(0);

  const handleOpen = (value) => {
    setopen(open == value ? null : value);
  };

  return (
    <div className={css.aboutUsAccordionWrapper}>
      {data.map((i, index) => {
        return (
          <React.Fragment key={index}>
            <div className={css.AccordionBox}>
              <div onClick={() => handleOpen(index)}>
                {open === index && (
                  <div className={css.headerNIcon}>
                    <Image
                      src={i.coreIcon}
                      width={40}
                      height={40}
                      alt={i.title}
                    />

                    <IconCollection
                      name={open == index ? "plusBox" : "minBox"}
                    />
                  </div>
                )}

                <div className={css.textNIcon}>
                  <h6>{i.title}</h6>

                  {open !== index && (
                    <IconCollection
                      name={open === index ? "plusBox" : "minBox"}
                    />
                  )}
                </div>
              </div>

              <div
                className={`${open === index ? css.open : ""} ${
                  css.contentBox
                }`}
              >
                <h6>{i.description}</h6>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
