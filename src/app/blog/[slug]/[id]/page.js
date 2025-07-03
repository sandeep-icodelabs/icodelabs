import BlogDetailsClient from "@/component/BlogDetailClient/BlogDetailClient";
import { singleBlogDeatail, blogDetail } from "@/services/service";

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const id = params?.id;
  try {
    const resp = await singleBlogDeatail(id);
    const blog = resp?.data?.data;

    if (!blog) {
      return {
        title: "Blog Not Found | iCode Labs",
        description: "The requested blog post could not be found.",
      };
    }

    const title = blog.attributes?.Title || "Blog Post | iCode Labs";
    const description =
      blog.attributes?.metaDescription ||
      blog.attributes?.Content?.slice(0, 160) ||
      "Read the latest insights from iCode Labs on custom web development and more.";
    const keywords =
      blog.attributes?.metaKeywords ||
      "web development, custom software, ecommerce development, iCode Labs";

    return {
      title,
      description,
      keywords,
      // openGraph: {
      //   title,
      //   description,
      //   url: `https://yourdomain.com/blog/${params?.slug}/${id}`,
      //   type: "article",
      //   images: [
      //     {
      //       url: blog.attributes?.Image?.data?.[0]?.attributes?.url || "",
      //       width: 1000,
      //       height: 400,
      //       alt: blog.attributes?.Title || "Blog Image",
      //     },
      //   ],
      // },
      // twitter: {
      //   card: "summary_large_image",
      //   title,
      //   description,
      //   images: [blog.attributes?.Image?.data?.[0]?.attributes?.url || ""],
      // },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found | iCode Labs",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function BlogDetails({ params }) {
  const id = params?.id;

  // Fetch blog data for the page
  let blogData = null;
  let recentBlogs = [];
  try {
    const blogResp = await singleBlogDeatail(id);
    blogData = blogResp?.data?.data || null;

    const recentResp = await blogDetail();
    recentBlogs = recentResp.data.data || [];
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  return <BlogDetailsClient blogData={blogData} recentBlogs={recentBlogs} params={params} />;
}