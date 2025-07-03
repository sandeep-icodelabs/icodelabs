import Link from "next/link";
import React from "react";

const About = async () => {
  const data = await fetch(`https://api.icodestaging.in/api/articles`);
  const res = await data.json();
  return (
    <>
      {res?.data?.map((data) => {
        return (
          <Link href={"/about/" + data?.id}>
            <h1>{data?.attributes?.Title}</h1>
          </Link>
        );
      })}
    </>
  );
};

export default About;
