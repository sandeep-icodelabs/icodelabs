"use client";
import React, { useState, useEffect } from "react";
import css from "./SectionContactUs.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/service";
import contactBanner from "../../assets/images/contactUsLanding.png";
import Image from "next/image";
import axios from "axios";
import dynamic from "next/dynamic";
import email from "../../assets/images/email.png";
import userImage from "../../assets/images/user.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select"; 

const SectionContactUs = () => {
  const [countryCode, setCountryCode] = useState("");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    getGeoInfo();
  }, []);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      phoneNumber: Yup.string()
        .matches(/^\+?[1-9]\d{6,14}$/, "Invalid phone number")
        .required("Phone Number is required."),
      message: Yup.string().required("Message is required."),
    }),
    onSubmit: (values) => {
      const body = {
        Email: values.email,
        Message: values.message,
        MobileNo: values.phoneNumber,
        Name: values.name,
      };
      mutation.mutate({ data: body });
    },
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let country = response.data.country_code.toLowerCase(); // Convert to lowercase
        setCountryCode(country); // Update country code
      })
      .catch((error) => console.log(error));
  };

  // React Query Mutation for form submission
  const mutation = useMutation({
    mutationFn: (formData) => createContactMessage(formData), //
    // l the createContactMessage function

    onSuccess: () => {
      alert("Message sent successfully!");
      resetForm();
    },
  });
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
      fontWeight: 600,
      fontSize: "20px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#000",
      backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
    }),
  };
  const options = [
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Sharetribe Development", label: "Sharetribe Development" },
    { value: "Custom Software Development", label: "Custom Software Development" },
    { value: "Marketplace Development", label: "Marketplace Development" },
    { value: "Web Development", label: "Web Development" },
    { value: "Digital Marketing | SEO | PPC", label: "Digital Marketing | SEO | PPC" },

  ];

  return (
    <section className={css.contactUsWrapper}>
      <div className={css.leftGradient} />
      <div className={css.rightGradient} />

      <ContentWidth>
        <div className={css.leftNrightWrapper}>
          <div className={css.leftSection}>
            <h2>Your Success Begins Here. Let’s Connect!</h2>
            <p>
              Partner with us to drive your project forward with custom
              white-label solutions and on-demand developers. Your vision,
              powered by our expertise.
            </p>
          </div>

          <div className={css.rightSection}>
            <form onSubmit={handleSubmit} className={css.contactForm}>
              <div className={css.formContent}>
                {/* <h3>Write Us,</h3> */}
                {/* <p className={css.contactText}>We Will Contact You Shortly!</p> */}
                <div className={css.nameInput}>
                  {/* <img
                  className={css.emailIcon}
                  src={userImage.src}
                  alt="email"
                /> */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                    className={css.inputField}
                  />
                  {errors.name && touched.name && (
                    <p className={css.error}>{errors.name}</p>
                  )}
                </div>

                <div className={css.emailWrapper}>
                  {/* <img className={css.emailIcon} src={email.src} alt="email" /> */}
                  <input
                    type="email"
                    placeholder="Email ID*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    className={css.inputField}
                  />
                  {errors.email && touched.email && (
                    <p className={css.error}>{errors.email}</p>
                  )}
                </div>

                <div className={css.phoneNserviceContainer}>
                  <div>
                    <div className={`${css.inputBox} ${css.phoneInputWrapper}`}>
                      {isClient && countryCode && (
                        <PhoneInput
                          key={countryCode}
                          defaultCountry={countryCode}
                          value={values.phoneNumber}
                          placeholder="Phone Number"
                          onChange={(value) =>
                            setFieldValue("phoneNumber", value)
                          }
                          onBlur={() => setFieldTouched("phoneNumber", true)}
                          className={css.PhoneInputField}
                        />
                      )}
                    </div>
                    <div className={css.validationError}>
                      {errors.phoneNumber && touched.phoneNumber && (
                        <p className={css.error}>{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                  <div className={`${css.inputBox} ${css.selectWrapper}`}>
                    <Select
                      options={options}
                      className={css.inputSelect}
                      styles={customStyles}
                    />
                  </div>
                </div>

                <div className={css.textareaBox}>
                  <textarea
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your project/Idea In Brief (Help us to come back with better Prepared)*"
                    name="message"
                    value={values.message}
                    className={css.textarea}
                  />
                  {errors.message && touched.message && (
                    <p className={css.error}>{errors.message}</p>
                  )}
                </div>

                <div className={css.contentBox}>
                  <h6>Integrate Towards Innovation</h6>
                  <p>
                    Become an Icodelabs Partner to Launch, Run and Grow Your
                    Business Globally.
                  </p>
                </div>

                <Link href={"/"} className={css.partnerText}>
                  Become a Partner
                </Link>
                <button
                  type="submit"
                  className={css.submitButton}
                  disabled={mutation.isLoading}
                >
                  Get Your FREE Proposal Now
                  <IconCollection name="rightArrowTop" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SectionContactUs;
