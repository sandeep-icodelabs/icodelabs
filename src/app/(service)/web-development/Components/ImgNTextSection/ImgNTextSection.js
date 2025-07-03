import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import React from "react";
import css from "./ImgNTextSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ImgNTextSection() {
  return (
    <div>
      <ContentWidth className={css.mainWrapper}>
        {/* USB's */}
        <div className={css.usbContainer}>
          {/* 1 */}
          <div className={css.usbItem}>
            <IconCollection name="aiCloud" />
            <h5>
              Next-Gen Web Development Services, Backed By <br />
              <span> AI Capabilities </span>
            </h5>
          </div>

          {/* 2 */}
          <div className={css.usbItem}>
            <IconCollection name="menfunnelToDollar" />
            <h5>
              Web Development For Higher Engagement,
              <span> Conversion &</span> <span> Retention</span>
            </h5>
          </div>

          {/* 3 */}
          <div className={css.usbItem}>
            <IconCollection name="growthUp" />
            <h5>
              User-Centric Web Design That Powers Your
              <span> Brand</span>
              <span> Growth</span>
            </h5>
          </div>
        </div>

        <div className={css.imgNcontentWrapper}>
          <Image
            src="/assests/img/webDev_stayFocus.png"
            width={648}
            height={363}
          />

          <div className={css.contentContainer}>
            <h2>
              {" "}
              Stay Focused as our self-managed team delivers the project{" "}
            </h2>
            <p>
              our team ensures every app is designed with user experience,
              performance, and innovation at its core—helping you engage
              customers, streamline operations, and stay ahead in the digital
              world.
            </p>

            <Link href={"#"} className="primaryBtn">
              Discuss a Project
            </Link>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}

export function GradientImgNText() {
  return (
    <div className={css.GradientImgNTextWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth>
        <div className={css.imgNcontentWrapper}>
          <div className={css.contentContainer}>
            <h2>We’ve got the expertise to make it happen! </h2>
            <p>
              We at Icodelabs use the latest technology in delivering the best
              website development services. Our development teams use their
              knowledge and trending technology to handle all your business
              problems and deliver quick solutions.
            </p>
            <Link href={"#"} className="primaryBtn">
              Let’s Build Together<span>👋</span>
            </Link>
          </div>

          <div className={css.gradientBox}></div>
        </div>
      </ContentWidth>
    </div>
  );
}

export function DeliveryWebSolnSection() {
  return (
    <section className={css.DeliveryWebSolnSection}>
      <ContentWidth className={css.contentPadding}>
        <div className={css.contentContainer}>
          <h2>Deliver Web Solutions With A Team Icodelabs </h2>
          <p>
            Our skilled web developers use modern web tools to create special
            websites, portals, and advanced web apps. This makes your business
            unique and noticeable in a tough market.
          </p>
        </div>

        <div className={css.contentNimg}>
          <div className={css.gridContainer}>
            {deliveryData.map((i, index) => {
              return (
                <>
                  <div className={css.itemBox}>
                    <Image src={i.icon} width={50} height={50} />

                    <div className={css.contentBox}>
                      <h5>{i.title}</h5>
                      <p>{i.description} </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={css.imgContainer}>
            <Image
              quality={100}
              src="/assests/img/humanLookingInScreen.png"
              width={429}
              height={754}
              alt="..."
            />
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}

const deliveryData = [
  {
    icon: "/assests/icons/grid.svg",
    title: "Web App Consultation",
    description:
      "Get expert advice for your web idea. Discuss with agile developers for tailored solutions that align with your needs.",
  },
  {
    icon: "/assests/icons/ux.svg",
    title: "Web App UI/UX Design",
    description:
      "Craft compelling UI/UX designs backed by market research, enhancing your web concept's appeal and engagement.",
  },
  {
    icon: "/assests/icons/code.svg",
    title: "Custom Web App Development",
    description:
      "Tailored tech solutions for diverse industries, ensuring unique web experiences and functionality.",
  },
  {
    icon: "/assests/icons/shoppingBag.svg",
    title: "E-commerce Development",
    description:
      "Leverage our expertise for specialized e-commerce solutions, facilitating seamless online retail and B2B operations.",
  },
  {
    icon: "/assests/icons/gearMonitor.svg",
    title: "CMS Development",
    description:
      "Customize content management systems with integrated tools, streamlining digital content management effectively.",
  },
  {
    icon: "/assests/icons/gearRynch.svg",
    title: "Maintenance and Support",
    description:
      "Ensure updated, bug-free web solutions through our dedicated maintenance and flexible support services.",
  },
];

export function OurProficiency() {
  return (
    <ContentWidth className={css.OurProficiencySection}>
      <div className={css.contentContainer}>
        <h2>Our Proficiency in Web Development Technology Stack</h2>
        <p>
          Immerse yourself in a realm of creativity, expertise, and skill within
          the realm of Web Development Technologies.
        </p>
      </div>

      <div className={css.gridContainer}>
        {techItems.map((tool, index) => (
          <div key={index} className={css.gridItem}>
            <div className={css.icon}>
              <IconCollection name={tool.icon} />
            </div>

            <div>
              <h5>{tool.title}</h5>
              <p>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWidth>
  );
}

const techItems = [
  {
    icon: "react",
    title: "React",
    description:
      "Harness the robust and adaptable framework of React to develop purpose-driven frontend components that captivate and engage users.",
  },
  {
    icon: "html5",
    title: "HTML",
    description:
      "Experience fast loading speeds coupled with the versatility and potency essential for delivering unparalleled performance that pleases every website visitor.",
  },
  {
    icon: "javascript",
    title: "JavaScript",
    description:
      "Strengthen your online presence with backend technologies seamlessly compatible with frontend frameworks, providing you with valuable tools and libraries.",
  },
  {
    icon: "python",
    title: "Python",
    description:
      "Use general-purpose programming to create and deploy high-quality analytic web applications with vibrant code readability.",
  },
  {
    icon: "google-cloud",
    title: "Google Cloud",
    description:
      "You get powerful web development services with a thriving suite that includes Gmail, Google Search, File storage, and YouTube.",
  },
  {
    icon: "aws",
    title: "Amazon Web Services",
    description:
      "On-demand cloud computing with APIs delivers complete control and power to host your web assets with robust long-term support.",
  },
];

export function YourSrcForWebDevSection() {
  return (
    <ContentWidth className={css.YourSrcForWebDevSection}>
      <div className={css.contentContainer}>
        <h2>Your Search For Web Development Services Ends Here </h2>
        <p>
          We're not just about code and pixels; we're all about custom web
          development services ensuring web apps that exceed expectations.{" "}
        </p>
      </div>

      <div className={css.cardContainer}>
        {valueProps.map((i, index) => {
          return (
            <>
              <div className={css.cardItem}>
                <IconCollection name={i.icon} />
                {i.title}
                <p className="">{i.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </ContentWidth>
  );
}

const valueProps = [
  {
    icon: "star-badge",
    title: <h5>100% Customized Web Solutions</h5>,
    description:
      "Our custom web development services delve deep into your unique goals, challenges, and brand identity to build custom web experiences tailored to your exact needs.",
  },
  {
    icon: "shield-check",

    title: (
      <h5 className="">
        Quality <br />
        Assurance
      </h5>
    ),
    description:
      "Our custom web development services delve deep into your unique goals, challenges, and brand identity to build custom web experiences tailored to your exact needs.",
  },
  {
    icon: "globe-grid",
    title: <h5>Transparency & Complete Visibility</h5>,
    description:
      "We keep you involved every step of the way. You'll have real-time project updates and clear communication channels, ensuring your web development vision stays at the forefront.",
  },
  {
    icon: "handshake",
    title: <h5>24/7 Dedicated Support & Partnership</h5>,
    description:
      "Yes, you'll have a dedicated project manager available around the clock to answer questions related to our web development services, helping you navigate the digital landscape seamlessly.",
  },
];
