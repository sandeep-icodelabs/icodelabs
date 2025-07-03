"use client";
import React, { useState } from "react";
import css from "./BuildDreamForm.module.css";
import classNames from "classnames";
import meetingGroup from "../../assets/imgs/images/meetingGroup.png";
import Image from "next/image";

const BuildDreamForm = (props) => {
  const { className } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.projectDetails.trim() !== ""
    );
  };
  return (
    <div className={classNames(className, css.formContainer)}>
      <div className={css.ImgWrapper}>
        <Image
          src={meetingGroup}
          width={412}
          height={304}
          className={css.meetingImg}
        />
      </div>

      <h3 className={css.formTitle}>Do You Have An Interesting Project?</h3>
      <form className={css.formGroupWrapper}>
        <div className={css.formGroup}>
          <input
            type="text"
            name="name"
            className={css.nameInput}
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={css.formGroup}>
          <input
            type="email"
            name="email"
            className={css.emailInput}
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={css.formGroup}>
          <div>
            <input
              type="text"
              name="phone"
              className={css.formInput}
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
              style={{ flex: 1 }}
            />
          </div>
        </div>
        <div className={css.formGroup}>
          <textarea
            name="projectDetails"
            className={css.textarea}
            placeholder="What’s Your Project About?"
            value={formData.projectDetails}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className={` primaryBtn ${css.submitBtn} ${
            isFormValid() ? "enabled" : ""
          }`}
          disabled={!isFormValid()}
        >
          Get a Quote
        </button>
      </form>
    </div>
  );
};

export default BuildDreamForm;
