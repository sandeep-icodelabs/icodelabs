"use client";

import React, { useEffect, useState } from "react";
import css from "./Blog.module.css";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";
import { blogDetail } from "@/services/service";
import Loader from "@/component/Loader"; 
import { format } from 'date-fns';

const Page = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await blogDetail();
        setData(result.data.data || []);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tabHandle = (type) => {
    setSelectedType(type);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Top blog logic
  const topBlog =
    selectedType === "All"
      ? data.find((item) => item.attributes.Promotext === "All")
      : data.find(
          (item) =>
            item.attributes.Type === selectedType &&
            item.attributes.Promotext === "Featured"
        );

  // Grid blogs (filtered list)
  const filteredItems =
    selectedType === "All"
      ? data.filter((item) => item.id !== topBlog?.id)
      : data.filter(
          (item) =>
            item.attributes.Type === selectedType &&
            item.attributes.Promotext !== "Featured" &&
            item.id !== topBlog?.id
        );

  const currentItems = Array.isArray(filteredItems)
    ? filteredItems
        .sort(
          (a, b) =>
            new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
        )
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : []; 

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPageNumbers = (currentPage, totalPages) => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const uniqueItems = [
    { id: 0, attributes: { Type: "All" } },
    ...data
      .sort((a, b) => a?.attributes?.Type?.localeCompare(b?.attributes?.Type))
      .filter(
        (item, index, self) =>
          index ===
          self?.findIndex((t) => t?.attributes?.Type === item?.attributes?.Type)
      ),
  ];

  return (
    <div>
      {/* Blog section */}
      <div className={css.blogMainWrapper}>
        <div className={css.glowbgLeft}>
          <IconCollection name="glowbgLeft" />
        </div>
        <div className={css.glowbgRight}>
          <IconCollection name="glowbgRight" />
        </div>
        <ContentWidth>
          <div className={css.blogContainer}>
            <h5 className={css.blogSubHeading}>BLOG</h5>
            <h1 className={css.blogHeading}>
              <span>Welcome to Icodelabs Blog</span> <br /> Web application
              development, Mobile app Outsource
            </h1>
            <p className={css.blogTitle}>Latest blog by categories</p>
            <div className={css.blogButtonWrapper}>
              {uniqueItems.map((data) => (
                <button
                  onClick={() => tabHandle(data?.attributes?.Type)}
                  key={data?.attributes?.Type}
                  className={`${
                    selectedType === data.attributes.Type
                      ? css.blogButtonActive
                      : ""
                  } ${css.blogButton}`}
                >
                  {data?.attributes?.Type}
                </button>
              ))}
            </div>
          </div>
        </ContentWidth>
      </div>
      {/* Latest section */}
      {topBlog && (
        <ContentWidth>
          <div className={css.blogFeaturedWrapper}>
            <div className={css.blogLeftFeatured}>
              <button className={css.featuredButton}>
                {selectedType === "All" ? "All" : "Featured"}
              </button>
              <Link href={`/blog/${topBlog?.attributes?.Slug}/${topBlog?.id}`} >
              <h1 className={css.featuredHeading}>
                {topBlog?.attributes?.Title}
              </h1>
              <p className={css.featuredDescription}>
                {topBlog?.attributes?.Description}
              </p>
              <div className={css.featuredDate}>
                <p className={css.featureDateBox}>
                  {format(new Date(topBlog.attributes.createdAt), 'dd MMMM yyyy')}
                </p>

                <p className={css.featureDateTime}>
                  <IconCollection name="audioBalanceIcon" />
                  <span>7 min read</span>
                </p>
              </div>
              </Link>
            </div>
            <div className={css.blogRightFeatured}>
            <Link href={`/blog/${topBlog?.attributes?.Slug}/${topBlog?.id}`} >
              <Image
                src={topBlog.attributes?.Image?.data[0]?.attributes?.url}
                alt="featured-img"
                width={500}
                height={300}
              />
              </Link>
            </div>
           
          </div>
        </ContentWidth>
      )}{" "}
      {/* Loader or Blog cards */}
      {loading ? (
        <Loader />
      ) : (
        <ContentWidth>
          <div className={css.featureBorder}></div>
          <div className={css.featureCardWrapper}>
            {currentItems.map((card, index) => (
              <div className={css.featureCardContent} key={index}>
                <Image
                  src={card?.attributes?.Image?.data[0]?.attributes?.url}
                  width={600}
                  height={300}
                  alt="feature-img"
                />
                <div className={css.featureData}>
                  <button className={css.featuredButton}>
                    {card?.attributes?.Type}
                  </button>
                  <p className={css.featureCardDescription}>
                    {card?.attributes?.Title}
                  </p>
                  <Link
                    href={`/blog/${card?.attributes?.Slug}/${card?.id}`}
                    className="textBtn"
                  >
                    <button className={css.readMoreButton}>READ MORE</button>
                    <IconCollection name="arrowUpBlue" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ContentWidth>
      )}
      <ContentWidth>
        <div className={css.buttonWrapper}>
          <button
            className={css.prevButton}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <IconCollection name="LeftGrayArrow" />
          </button>
          {getPageNumbers(currentPage, totalPages).map((number, index) => (
            <button
              key={index}
              className={`${css.pageButton} ${
                number === currentPage ? css.activePage : ""
              }`}
              onClick={() => handlePageChange(number)}
              disabled={number === "..."}
            >
              {number}
            </button>
          ))}
          <button
            className={css.nextButton}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            <IconCollection name="rightGrayArrow" />
          </button>
        </div>
      </ContentWidth>
      <ContentWidth>
        <div className={css.infoCardContainer}>
          <div className={css.contentContainer}>
            <h2>Send Your Proposal Now And Get Free Analysis & Estimation!</h2>
            <p>
              Kickstart your project with a free, no-obligation analysis and
              cost estimate today!
            </p>
            <Link className="primaryBtnWhite" href={"#"}>
              Contact Us <IconCollection name="rightArrowTopDark" />
            </Link>
          </div>
          <div>
            <Image
              width={614}
              height={260}
              className={css.worldImg}
              src="/assests/img/dottedWorld.png "
              alt="world map"
              priority="true"
            />

            <Image
              width={361}
              height={236}
              className={css.womanWorkingImg}
              src="/assests/img/womanWorkingImg.png "
              alt="woman working on screen"
            />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Page;
