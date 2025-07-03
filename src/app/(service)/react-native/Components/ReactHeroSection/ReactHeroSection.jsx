"use client";
import React, { useEffect } from "react";
import css from "./ReactHeroSection.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createContactMessage } from "@/services/service";

export default function ReactHeroSection({
  title,
  content,
  btnLink,
  btnText,
  secBtnText,
  secBtnTextLink,
  bgIcon,
}) {
  const mutation = useMutation({
    mutationFn: async (formData) => {
      return createContactMessage(formData);
    },
    onSuccess: (data) => {
      alert("Message sent successfully!");
      resetForm();
    },
    onError: (error) => {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      service: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string(),
      service: Yup.string().required("Please select a service"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (!isValid || !dirty) {
        return;
      }

      if (!values.name || !values.email || !values.service) {
        return;
      }

      try {
        const formData = {
          data: {
            Email: values.email,
            Message: values.message || "",
            Name: values.name,
            Service: values.service,
          },
        };
        await mutation.mutateAsync(formData);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    console.log("Form state updated:", { values, errors, touched });
  }, [values, errors, touched]);

  const options = [
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Sharetribe Development", label: "Sharetribe Development" },
    { value: "Custom Software Development", label: "Custom Software Development" },
    { value: "Marketplace Development", label: "Marketplace Development" },
    { value: "Web Development", label: "Web Development" },
    { value: "Digital Marketing | SEO | PPC", label: "Digital Marketing | SEO | PPC" },
  ];

  const isFormValid = () => {
    return (
      isValid &&
      dirty &&
      values.name.trim() !== "" &&
      values.email.trim() !== "" &&
      values.service !== ""
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      handleSubmit(e);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <section className={css.heroBannerWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />

      {bgIcon && (
        <>
          <div className={css.reactIconSmall}>
            <IconCollection name="ReactSmallLogoHero" />
          </div>
          <div className={css.reactIconSmallRIghtTop}>
            <IconCollection name="ReactSmallLogoHero" />
          </div>
          <div className={css.reactIconSmallRIghtbottom}>
            <IconCollection name="ReactSmallLogoHero" />
          </div>
        </>
      )}

      <ContentWidth>
        <div className={css.contentNformRapper}>
          <div className={css.contentContainer}>
            <h1>{title}</h1>
            <p>{content}</p>

            <div className={css.btnDiv}>
              <Link href={btnLink} className="primaryBtn">
                {btnText}
                <IconCollection name="rightArrowTop" />
              </Link>

              {secBtnText?.length > 0 && (
                <Link href={secBtnTextLink} className="outlineBtn">
                  {secBtnText}
                  <IconCollection name="rightArrowTop" />
                </Link>
              )}
            </div>
          </div>

          <div className={css.formContainer}>
            <h4>Ready to take your app to the next level?</h4>
            <p>Discover how we can help your business grow</p>

            <form className={css.heroFormStyling} onSubmit={handleFormSubmit} noValidate>
              <div className={css.formGroup}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={touched.name && errors.name ? css.errorInput : ""}
                />
                {touched.name && errors.name && (
                  <div className={css.errorMessage}>{errors.name}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail ID*"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={touched.email && errors.email ? css.errorInput : ""}
                />
                {touched.email && errors.email && (
                  <div className={css.errorMessage}>{errors.email}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <select
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={touched.service && errors.service ? css.errorInput : ""}
                >
                  <option value="">Select a service</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {touched.service && errors.service && (
                  <div className={css.errorMessage}>{errors.service}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <textarea
                  name="message"
                  placeholder="Describe your project..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.message && errors.message ? css.errorInput : ""}
                />
                {touched.message && errors.message && (
                  <div className={css.errorMessage}>{errors.message}</div>
                )}
              </div>

              <button
                type="submit"
                className="primaryBtn"
                disabled={!isFormValid() || mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Get Your FREE Proposal Now"}
                {!mutation.isPending && <IconCollection name="rightArrowTop" />}
              </button>
            </form>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}