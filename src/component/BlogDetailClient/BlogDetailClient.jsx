"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import BuildDreamForm from "@/component/BuildDreamForm/BuildDreamForm";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FB from "../../assets/imgs/icons/darkSocialIcons/fb.svg";
import IG from "../../assets/imgs/icons/darkSocialIcons/ig.svg";
import LD from "../../assets/imgs/icons/darkSocialIcons/in.svg";
import X from "../../assets/imgs/icons/darkSocialIcons/x.svg";
import css from "./BlogDetails.module.css";

const BlogDetailsClient = ({ blogData, recentBlogs, params }) => {
  const [result, setResult] = useState(blogData);
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);
  const sectionRefs = useRef({});

  const normalizeText = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    if (!result) return;

    const content = result?.attributes?.Content || "";
    const headingMatches = content.match(/^##\s*.+/gm) || [];
    const extractedHeadings = headingMatches.map((heading, index) => {
      const text = heading.replace(/^##\s*/, "").trim();
      return {
        id: `heading-${index}-${nanoid()}`,
        text,
        normalized: normalizeText(text),
      };
    });
    setHeadings(extractedHeadings);
  }, [result]);

  const assignRef = useCallback(
    (id) => (el) => {
      if (el) {
        sectionRefs.current[id] = el;
      }
    },
    []
  );

  const renderers = {
    h2: ({ children }) => {
      const text = children[0]?.toString() || "";
      const normalizedText = normalizeText(text);
      const heading = headings.find((h) => h.normalized === normalizedText) || {
        id: nanoid(),
      };

      return (
        <h2 id={heading.id} ref={assignRef(heading.id)}>
          {children}
        </h2>
      );
    },
  };

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      }
    );

    const timeout = setTimeout(() => {
      headings.forEach((heading) => {
        const el = sectionRefs.current[heading.id];
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timeout);
      headings.forEach((heading) => {
        const el = sectionRefs.current[heading.id];
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  const sortedRecentBlogs = Array.isArray(recentBlogs)
    ? recentBlogs.sort(
        (a, b) =>
          new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
      )
    : [];

  return (
    <React.Fragment>
      <div className={css.blogSinglePagebanner}>
        <div className={css.glowLeft} />
        <div className={css.glowRight} />
        <ContentWidth>
          <div className={css.contentContainer}>
            <span className="subTitle">Blog / Custom Software Development</span>
            <h1>{result?.attributes?.Title}</h1>
            <div className={css.bottomTextBanner}>
              <p>Melanie Hickle</p>
              <span />
              <p>April 15, 2025</p>
            </div>
          </div>
        </ContentWidth>
      </div>

      <ContentWidth>
        <div className={css.BlogSinglePageContentWrapper}>
          {/* Left Sidebar */}
          <div className={css.leftContainer}>
            <div className={`${css.customScroll} ${css.listWrapper}`}>
              <h6>In This History</h6>
              {headings.map((heading) => (
                <p
                  key={heading.id}
                  className={
                    activeHeading === heading.id
                      ? css.activeTab
                      : css.inactiveTab
                  }
                  onClick={() => {
                    const element = sectionRefs.current[heading.id];
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {heading.text}
                </p>
              ))}
            </div>

            <div className={css.dropdownWrapper}>
              <select
                id="security-dropdown"
                className={css.customSelect}
                onChange={(e) => {
                  const headingId = headings[e.target.value]?.id;
                  const element = sectionRefs.current[headingId];
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveHeading(headingId);
                  }
                }}
              >
                {headings.map((item, index) => (
                  <option key={item.id} value={index}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>

            <div className={css.socialMediaWrapper}>
              <p>SHARE</p>
              <span />
              <div className={css.Iconswrapper}>
                <Link href="">
                  <Image src={LD} width={12} height={12} alt="LinkedIn" />
                </Link>
                <Link href="">
                  <Image src={FB} width={12} height={12} alt="Facebook" />
                </Link>
                <Link href="">
                  <Image src={IG} width={12} height={12} alt="Instagram" />
                </Link>
                <Link href="">
                  <Image src={X} width={12} height={12} alt="X" />
                </Link>
              </div>
            </div>

            <BuildDreamForm />
          </div>

          {/* Right Content */}
          <div className={css.rightContainer}>
            {result && (
              <React.Fragment>
                {result?.attributes?.Image?.data?.[0]?.attributes?.url && (
                  <Image
                    src={result?.attributes?.Image?.data[0]?.attributes?.url}
                    width={1000}
                    height={400}
                    alt="Blog Image"
                    className={css.blogContentImage}
                  />
                )}

                <div className="markdown-content">
                  <Markdown components={renderers}>
                    {result?.attributes?.Content}
                  </Markdown>
                </div>

                {result.attributes.points?.map((pt, index) => (
                  <div key={index}>
                    <h5>{pt?.point}</h5>
                    <p>{pt?.description}</p>
                    <p>{pt?.description2}</p>
                  </div>
                ))}

                <p>{result.attributes.consclusion}</p>
                <p>{result.attributes.consclusion2}</p>
              </React.Fragment>
            )}
          </div>
        </div>

        <div className={css.recentBlog}>
          <div className={css.contentContainer}>
            <h2>Related Blogs</h2>
          </div>
          <div className={css.recentBlogWrapper}>
            <Swiper
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                600: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="mySwiper"
            >
              {sortedRecentBlogs.map((i, index) => (
                <SwiperSlide key={index}>
                  <div className={css.cardContainer}>
                    <Image
                      src={i?.attributes?.Image?.data[0]?.attributes?.url}
                      width={600}
                      height={300}
                      alt={i.attributes?.Title || "Blog Image"}
                    />
                    <div className={css.badge}>{i.attributes.Type}</div>
                    <h6>{i?.attributes?.Title}</h6>
                    <div className={css.badgeNdate}>
                      <Link
                        href={`/blog/${i?.attributes?.Slug}/${i?.id}`}
                        className="textBtn"
                      >
                        Read More <IconCollection name="arrowUpBlue" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </ContentWidth>
    </React.Fragment>
  );
};

export default BlogDetailsClient;