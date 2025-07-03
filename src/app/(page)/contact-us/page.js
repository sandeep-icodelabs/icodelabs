"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
import css from "./ContactUs.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/service";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Image from "next/image";
import { budgetOptions, serviceOptions } from "@/utils/data";

const page = () => {
  const [isClient, setIsClient] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsClient(true);
    getGeoInfo();
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXRhbDI1IiwiYSI6ImNsazZzaTlpeDAxZGUzZXBoN2tkdGtwZjUifQ.fY8VAIrCr371iMHsf4eKyQ";
    // const map = new mapboxgl.Map({
    //   container: "st_google_map",
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [76.6862, 30.71],
    //   zoom: 15,
    // });

    const customMarker = document.createElement("div");
    customMarker.className = "custom-marker";
    customMarker.innerText = "Innovative Code Labs Pvt. Ltd.";
    // new mapboxgl.Marker(customMarker).setLngLat([76.6862, 30.71]).addTo(map);

    // new mapboxgl.Marker().setLngLat([76.6862, 30.71]).addTo(map);

    // return () => map.remove();
  }, [isClient]);

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let country = response.data.country_code.toLowerCase(); // Convert to lowercase
        setCountryCode(country); // Update country code
      })
      .catch((error) => console.log(error));
  };

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
      skypeId: "",
      packages: "",
      title: "",
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
        Url: values.skypeId,
        Packages: values.packages,
        Title: values.title,
      };
      mutation.mutate({ data: body });
    },
  });

  // React Query Mutation for form submission
  const mutation = useMutation({
    mutationFn: (formData) => createContactMessage(formData), // Call the createContactMessage function

    onSuccess: () => {
      alert("Message sent successfully!");
      resetForm();
    },
  });

  return (
    <div>
      <div className={css.heroSection}>
        <div className={css.contentContainer}>
          <h6>Say hello</h6>
          <h1>We’re excited to connect with you</h1>
          <span className="subTitle">
            Whether you have a question, feedback, or just want to say hello —
            we’d love to hear from you. Let’s start the conversation!
          </span>
        </div>
      </div>
      <ContentWidth>
        <div className={css.contactContainer}>
          {contactData.map((section, idx) => (
            <div key={idx} className={css.card}>
              <div className={css.tag}>{section.tag}</div>

              <div className={css.rightBorder}>
                {section.lines.map((line, i) => (
                  <div key={i} className={css.text}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={css.darkInfoCard}>
          <div>
            <h5> Talk to our expert Devloper</h5>
            <p>
              Get a 30-min. free consultaion with Devloper to optimize your
              websites.
            </p>
          </div>

          <Link href="https://calendly.com/jaytiwary" className="primaryBtn">
            Book a slot <IconCollection name="rightArrowTop" />
          </Link>
        </div>

        <div className={css.formNcardWrapper}>
          <div className={css.formCard}>
            <h3>Your Success Begins Here. Let’s Connect!</h3>
            <p>
              Partner with us to drive your project forward with custom
              white-label solutions and on-demand developers. Your vision,
              powered by our expertise.
            </p>
            <Image src="/assests/img/contact.png" width={460} height={494} />
          </div>

          <div className={css.formContainer}>
            <div className={css.formSection}>
              <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.inputGroup}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={css.nameInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <p className={styles.error}>{errors.name}</p>
                  )}
                </div>

                <div className={css.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className={css.emailInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>

                <div className={css.inputGroup}>
                  <input
                    type="text"
                    placeholder="Skype Id"
                    className={css.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="skypeId"
                    value={values.skypeId}
                  />
                </div>
                <div className={css.inputMainGroup}>
                  <div className={css.inputGroup}>
                    <div className={css.inputBox}>
                      {isClient && (
                        <PhoneInput
                          defaultCountry={countryCode || "in"}
                          value={values.phoneNumber}
                          onChange={(value) =>
                            setFieldValue("phoneNumber", value)
                          }
                          onBlur={() => setFieldTouched("phoneNumber", true)}
                          className={css.PhoneInputField}
                          placeholder="Contact Number*"
                          enableSearch={true}
                        />
                      )}

                      {errors.phoneNumber && touched.phoneNumber && (
                        <p className={styles.error}>{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className={css.inputGroup}>
                    <div className={css.inputBox}>
                      <select
                        className={css.input}
                        name="packages"
                        value={values.packages}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {budgetOptions?.map((option) => (
                          <option key={option?.value} value={option?.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={css.inputGroup}>
                  <select
                    className={css.input}
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {serviceOptions?.map((option) => (
                      <option key={option?.value} value={option?.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={css.inputGroup}>
                  <textarea
                    placeholder="Describe your project/Idea In Brief (Help us to come back with better Prepared)*"
                    className={css.textarea}
                    name="message"  
                    value={values.message}  
                    onChange={handleChange}  
                    onBlur={handleBlur}
                  ></textarea>
                </div>

                <div className={css.contentContainer}>
                  <h5>Integrate Towards Innovation </h5>{" "}
                  <p>
                    Become an Icodelabs Partner to Launch, Run and Grow Your
                    Business Globally.
                  </p>
                  {/* <Link href={"#"}>
                    <h6>Become a Partner</h6>
                  </Link> */}
                </div>

                <button type="submit" className="primaryBtn">
                  Get Your FREE Proposal Now
                  <IconCollection name="rightArrowTop" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContentWidth>
      {/* <div className={css.infoSection}></div> */}
    </div>
  );
};

export default page;

const contactData = [
  {
    tag: "Support",
    lines: [
      "Get in touch with our experts",
      <div className={css.linkText}>
        To contact our support team, <br /> write to us at, <br />
        <a href="mailto:hello@lcodelabs.co" className={styles.emailLink}>
          Hello@lcodelabs.co
        </a>
      </div>,
    ],
  },
  {
    tag: "Sales",
    lines: [
      "Learn more about lcodelabs",
      <div className={css.linkText}>
        Email/Call Us at <br />
        <a href="mailto:hello@lcodelabs.co" className={styles.emailLink}>
          Hello@lcodelabs.co
        </a>
      </div>,
      "+91 78457 84751, +91 62004 45858",
    ],
  },
  {
    tag: "Human Resources",
    lines: [
      "Reach our people",
      <div className={css.linkText}>
        For employment verification and <br /> other HR information
        <br />
        <a href="mailto:hello@lcodelabs.co" className={styles.emailLink}>
          Hello@lcodelabs.co
        </a>
      </div>,
    ],
  },
  {
    tag: "Offices",
    lines: [
      "Find us",

      <div className={css.linkText}>
        D-176, Phase 8B, Industrial Area, <br /> Sector 74, Sahibzada Ajit Singh
        Nagar, Punjab 160055
      </div>,
    ],
  },
];
