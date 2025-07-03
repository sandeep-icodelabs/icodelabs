import React from "react";
import css from "./Flutter.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const FlutterAppDevelopment = () => {
  const services = [
    {
      icon: "custom-app",
      title: "Custom Flutter App Development",
      description: "We build tailor-made Flutter applications that align with your business needs, ensuring seamless functionality and intuitive user experiences."
    },
    {
      icon: "cross-platform",
      title: "Cross-Platform App Development",
      description: "Our expert Flutter developers create high-performing apps that run seamlessly across iOS, Android, and web platforms with a single codebase."
    },
    {
      icon: "ui-design",
      title: "Flutter UI/UX Design",
      description: "Our design team crafts interactive, user-friendly, and aesthetically appealing interfaces to enhance user engagement and retention."
    },
    {
      icon: "migration",
      title: "Flutter App Migration & Upgrades",
      description: "Looking to migrate your existing app to Flutter? We help businesses seamlessly transition their apps to this cutting-edge framework."
    },
    {
      icon: "testing",
      title: "Flutter App Testing & QA",
      description: "We ensure your Flutter app is bug-free, optimized, and secure through rigorous testing and quality assurance processes."
    },
    {
      icon: "maintenance",
      title: "App Maintenance & Support",
      description: "Our dedicated support team provides ongoing maintenance, updates, and performance enhancements to keep your app running smoothly post-launch."
    }
  ];

  return (
    <div className={css.flutterAppDevelopment}>
      <div className={css.curvedBackground}></div>
      
      <div className={css.servicesContent}>
        <div className={css.servicesHeader}>
          <h2 className={css.servicesTitle}>
            Our Flutter App Development Services
          </h2>
          <p className={css.servicesSubtitle}>
            At icodelabs, we offer end-to-end Flutter App Development Services that help businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className={css.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={css.serviceCard}>
                <div className={css.serviceCardContent}>

              <div className={css.serviceIcon}>
                <IconCollection name={service.icon} />
              </div>
              <h3 className={css.serviceTitle}>{service.title}</h3>
                </div>
              <p className={css.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlutterAppDevelopment;