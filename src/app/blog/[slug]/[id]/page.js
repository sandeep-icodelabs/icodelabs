// Assuming API endpoints:
// - Single blog: /api/blogs/:id
// - Recent blogs: /api/blogs

import BlogDetailsClient from "@/component/BlogDetailClient/BlogDetailClient";

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  try {
    if (!params?.id) {
      throw new Error("Missing blog ID");
    }

    const response = await fetch(`https://api.icodestaging.in/api/articles/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.API_TOKEN}`, // Uncomment if needed
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch blog data: ${response.status} ${errorText}`);
    }

    const { data: { data: blog } = {} } = await response.json();

    if (!blog?.attributes) {
      return {
        title: "Blog Not Found | iCode Labs",
        description: "The requested blog post could not be found.",
      };
    }

    return {
      title: blog.attributes?.Title || "Blog Post | iCode Labs",
      description:
        blog.attributes?.metaDescription ||
        blog.attributes?.Content?.slice(0, 160) ||
        "Read the latest insights from iCode Labs on custom web development and more.",
      keywords:
        blog.attributes?.metaKeywords ||
        "web development, custom software, ecommerce development, iCode Labs",
    };
  } catch (error) {
    console.error("Error generating metadata:", error.message);
    return {
      title: "Blog Not Found | iCode Labs",
      description: "The requested blog post could not be found.",
    };
  }
}

export default async function BlogDetails({ params }) {
  try {
    if (!params?.id) {
      throw new Error("Missing blog ID");
    }

    // Fetch single blog post
    const blogResponse = await fetch(`https://api.icodestaging.in/api/articles/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.API_TOKEN}`, // Uncomment if needed
      },
      cache: "no-store",
    });

    if (!blogResponse.ok) {
      const errorText = await blogResponse.text();
      throw new Error(`Failed to fetch single blog data: ${blogResponse.status} ${errorText}`);
    }

    const singleBlog = await blogResponse.json();
    // console.log('singleBlog', singleBlog)

    // Fetch recent blogs
    const recentResponse = await fetch(`https://api.icodestaging.in/api/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.API_TOKEN}`, // Uncomment if needed
      },
      cache: "no-store",
    });

    if (!recentResponse.ok) {
      const errorText = await recentResponse.text();
      throw new Error(`Failed to fetch recent blogs: ${recentResponse.status} ${errorText}`);
    }

    const recentBlogs = await recentResponse.json();

    console.log('recentBlogs', recentBlogs)

    return (
      <BlogDetailsClient
        blogData={singleBlog?.data || null}
        recentBlogs={recentBlogs?.data || []}
        params={params}
      />
    );
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    return <BlogDetailsClient blogData={null} recentBlogs={[]} params={params} />;
  }
}