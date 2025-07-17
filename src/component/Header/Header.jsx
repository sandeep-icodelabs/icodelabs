"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.css";
import IconCollection from "../IconCollection/IconCollection";
import ContentWidth from "../ContentWidth/ContentWidth";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const pathName = usePathname();
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isLinkClick = event.target.closest("a, button");
      if (!ref?.current?.contains(event.target) && !isLinkClick) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleHireDevClick = () => {
    router.push("/hire-developers");
  };

  return (
    <header>
      <div className={`${css.headerWrapper} ${scrolled ? css.scrolled : ""}`}>
        <ContentWidth>
          <div className={css.contentContainer} ref={ref}>
            <Link href="/" className={css.logoDiv}>
              <IconCollection name="headerLogo" />
            </Link>

            <nav className={`${css.navMenu} ${menuOpen ? css.open : ""}`}>
              <ul className={css.navList}>
                {navItems.map((i, index) => (
                  <li
                    key={index}
                    className={`${css.navItem} ${
                      pathName === `/${i.slug}` ||
                      (i.subItems &&
                        i.subItems.some((subItem) =>
                          pathName.startsWith(`/${subItem.slug}`)
                        ))
                        ? css.activeMenu
                        : ""
                    }`}
                    onClick={() => handleDropdown(i?.label)}
                  >
                    {i.subItems ? (
                      <div
                        onClick={() =>
                          window.innerWidth <= 768 && handleDropdown(i?.label)
                        }
                        className={`${css.navLinkDropDown} ${
                          activeDropdown === i.label
                            ? css.activeDropdownMobile
                            : ""
                        }`}
                      >
                        {i?.label}
                        {i?.subItems && (
                          <IconCollection
                            name={
                              activeDropdown === i.label
                                ? "headerDropdownDown"
                                : "headerDropdownUp"
                            }
                          />
                        )}
                      </div>
                    ) : (
                      <Link
                        href={`/${i.slug}`}
                        className={css.navLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {i?.label}
                      </Link>
                    )}

                    {i.subItems && (
                      <ContentWidth
                        className={`${css.mobileMenuWrapper} ${
                          activeDropdown === i.label ? css.show : ""
                        } ${
                          i.label === "Services" ? css.fullWidthDropdown : ""
                        }`}
                      >
                        <div className={css.mobileDropdownMenu}>
                          <div className={css.contentWrapper}>
                            <ul>
                              {i.subItems.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={`/${item.slug}`}
                                    className={css.itemContainer}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setMenuOpen(false);
                                    }}
                                  >
                                    <span className="subTitle">{item?.title}</span>
                                    <p>{item?.para}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </ContentWidth>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className={`primaryBtn ${css.hireDevBtn}`}
              onClick={handleHireDevClick}
            >
              Hire Developers <IconCollection name="rightArrowTop" />
            </button>

            <div className={css.navToggle} onClick={toggleMenu}>
              {menuOpen ? (
                <IconCollection name="closeNav" />
              ) : (
                <IconCollection name="openNav" />
              )}
            </div>
          </div>
        </ContentWidth>
      </div>

      {navItems.map(({ label, subItems }) => (
        subItems && (
          <ContentWidth
            key={label}
            className={`${css.desktopMenuWrapper} ${
              activeDropdown === label ? css.show : ""
            } ${label === "Services" ? css.fullWidthDropdown : ""}`}
          >
            <div className={css.desktopDropdownMenu}>
              <div className={css.contentWrapper}>
                <div className={css.CTACard}>
                  <h4>Let’s Us Seamlessly Turn Your Vision into Reality</h4>
                  <p>
                    Ready to build innovative web and mobile solutions? Let
                    icodelabs help you grow with custom development services
                    tailored to your needs.
                  </p>
                  <Link
                    href="/contact-us"
                    className="primaryBtn"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Reach Out Today<span>👋</span>
                  </Link>
                </div>
                <ul>
                  {subItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={`/${item.slug}`}
                        className={css.itemContainer}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div>
                          <IconCollection name={item.logo} />
                          <span className="subTitle">{item?.title}</span>
                        </div>
                        <p>{item?.para}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentWidth>
        )
      ))}
    </header>
  );
}

export default Header;

const navItems = [
  {
    label: "Services",
    subItems: [
      {
        title: "Sharetribe Development",
        para: "Build powerful, scalable marketplaces with Sharetribe’s seamless platform.",
        logo: "shareTribe",
        slug: "sharetribe",
      },
      {
        title: "AI Based Development",
        para: "Unlock the potential of AI to revolutionize your business.",
        logo: "AIStar",
        slug: "ai-development", // Fixed empty slug
      },
      {
        title: "Web Development",
        para: "Crafting responsive, high-performance websites tailored to your needs.",
        logo: "webDev",
        slug: "web-development",
      },
      {
        title: "React Native App Development",
        para: "Create stunning mobile apps with React Native that work seamlessly across platforms.",
        logo: "react",
        slug: "react-native",
      },
      {
        title: "Digital Marketing",
        para: "Supercharge your brand’s growth with our data-driven digital marketing strategies.",
        logo: "digitalMarketing",
        slug: "digital-marketing",
      },
    ],
  },
  {
    label: "About Us",
    slug: "about-us",
  },
  {
    label: "Marketplace",
    subItems: [
      {
        title: "Rental Marketplace",
        para: "lorem ipsum text",
        logo: "",
        slug: "rental-marketplace",
      },
      {
        title: "Service Marketplace",
        para: "lorem ipsum text",
        logo: "",
        slug: "service-marketplace",
      },
      {
        title: "Product Marketplace",
        para: "lorem ipsum text",
        logo: "",
        slug: "product-marketplace",
      },
      {
        title: "Booking & Events Marketplace",
        para: "lorem ipsum text",
        logo: "",
        slug: "booking-and-events-marketplace",
      },
    ],
  },
  {
    label: "Blog",
    slug: "blog",
  },
  {
    label: "Contact Us",
    slug: "contact-us",
  },
];