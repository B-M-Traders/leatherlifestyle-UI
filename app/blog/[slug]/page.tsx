import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/style/blog.css";
import { blogData } from "@/lib/blogData";

interface pageProps {
  params: Promise<{ slug: string }>;
}

// ✅ Dynamic metadata for SEO
export async function generateMetadata({ params }: pageProps) {
  const slug = (await params).slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Your Brand",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    openGraph: {
      siteName: "Artisan Hide",
      title: blog.seo?.ogTitle || blog.title,
      description: blog.seo?.ogDescription || blog.excerpt,
      url: `${process.env.FRONTEND_URL}/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.thumbnail,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: blog.seo?.twitterCard || "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.thumbnail],
    },
    alternates: {
      canonical: `${process.env.FRONTEND_URL}/blog/${blog.slug}`,
    },
  };
}

const Blogsinglepage = async ({ params }: pageProps) => {
  const slug = (await params).slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="templateContainer py-12">
        <h1 className="text-2xl font-bold text-red-600">Blog Not Found</h1>
        <p className="mt-2">The blog you are looking for doesn’t exist.</p>
        <Link href="/blog" className="text-templateBrown underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 space-y-8">
      {/* Breadcrumbs */}
      <ul className="flex flex-wrap items-center gap-1 justify-start text-sm text-gray-700">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li className="text-templateBrown underline">{blog.title}</li>
      </ul>

      {/* Blog Header */}
      <div className="space-y-5">
        <h1 className="text-2xl md:text-4xl font-medium text-templateBrown tracking-wide uppercase">
          {blog.title}
        </h1>
        <div className="flex text-sm tracking-wider items-center gap-1">
          <p>Published on</p>
          <p className="text-templateText">{blog.uploadDate}</p>
          <span className="mx-2">•</span>
          <p className="text-templateText">By {blog.uploadBy}</p>
        </div>

        <Image
          src={blog.thumbnail}
          alt={blog.title}
          height={600}
          width={1600}
          className="h-auto w-full object-cover rounded-md"
        />

        {/* Blog Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </div>
  );
};

export default Blogsinglepage;
