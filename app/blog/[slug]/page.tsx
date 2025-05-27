import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/style/blog.css";
import { Metadata } from "next";

// const getBlogDetail = async (slug: string) => {};

// export async function generateMetadata({ params }: any) {
//   const slug = (await params).slug;
//   try {
//     const data = await getBlogDetail(slug);
//     const { blog } = data;

//     return {
//       title: blog?.title || "defaultTitle",
//       description: blog.meta_description || "defaultDescription",
//       openGraph: {
//         title: blog?.title || "defaultTitle",
//         description: blog?.meta_description || "defaultDescription",
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
//         type: "website",
//         images: [
//           {
//             url:
//               blog.featured_image ||
//               `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logos/logowithwhitebg.png`,
//             width: 1200,
//             height: 630,
//             alt: blog.title || "defaultTitle",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: blog.title || "defaultTitle",
//         description: blog.meta_description || "defaultDescription",
//         images: [
//           blog.featured_image ||
//             `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logos/logowithwhitebg.png`,
//         ],
//       },
//       alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
//       },
//     };
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     return {
//       title: "defaultTitle",
//       description: "defaultDescription",
//       openGraph: {
//         title: "defaultTitle",
//         description: "defaultDescription",
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`,
//         type: "website",
//         images: [
//           {
//             url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logos/logowithwhitebg.png`,
//             width: 1200,
//             height: 630,
//             alt: "defaultTitle",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "defaultTitle",
//         description: "defaultDescription",
//         images: [
//           `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logos/logowithwhitebg.png`,
//         ],
//       },
//       alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`,
//       },
//     };
//   }
// }

const Blogsinglepage = async ({ params }: any) => {
  const slug = (await params).slug;
  //   const data = await getBlogDetail(slug);
  return (
    <div className="templateContainer py-4 md:py-8 lg:py-12 space-y-8">
      <ul className="flex flex-wrap items-center gap-1 justify-start text-sm text-gray-700">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
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
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li className="text-templateBrown underline">Blog Post</li>
      </ul>
      {/* ----------- */}
      <div className="space-y-5">
        <h1 className="text-3xl md:text-4xl font-medium text-templateBrown tracking-wide uppercase ">
          Blog title
        </h1>
        <div className="flex text-sm tracking-wider items-center gap-1">
          <p>Published on </p>
          <p className="text-templateText tracking-wider">24/05/2025</p>
        </div>

        <Image
          src={
            "https://lureurban.b-cdn.net/cache/catalog/slides/lure-collection-2024-1920x900.jpg"
          }
          alt="Featured Image"
          height={600}
          width={1600}
          className="h-auto w-full object-cover "
        />

        <div className="blogDescriptionCSS">
          <h3>Sub Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            est praesentium quisquam cum accusamus consequatur hic enim vero
            quaerat, numquam autem eveniet cupiditate explicabo blanditiis
            nostrum, quis veritatis necessitatibus incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis alias dolore asperiores officiis, aliquid delectus nostrum,
            nam suscipit nobis impedit veritatis at necessitatibus! Repellat
            nobis aliquam veniam at, architecto quas libero! Ipsum, odio impedit
            minima sit maxime assumenda ipsa, natus architecto soluta veritatis,
            quis optio! Blanditiis odio dicta unde, similique inventore
            asperiores quaerat alias maxime autem tempore aliquam ad?
          </p>
          <h3>Sub Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            est praesentium quisquam cum accusamus consequatur hic enim vero
            quaerat, numquam autem eveniet cupiditate explicabo blanditiis
            nostrum, quis veritatis necessitatibus incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis alias dolore asperiores officiis, aliquid delectus nostrum,
            nam suscipit nobis impedit veritatis at necessitatibus! Repellat
            nobis aliquam veniam at, architecto quas libero! Ipsum, odio impedit
            minima sit maxime assumenda ipsa, natus architecto soluta veritatis,
            quis optio! Blanditiis odio dicta unde, similique inventore
            asperiores quaerat alias maxime autem tempore aliquam ad?
          </p>
          <h3>Sub Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            est praesentium quisquam cum accusamus consequatur hic enim vero
            quaerat, numquam autem eveniet cupiditate explicabo blanditiis
            nostrum, quis veritatis necessitatibus incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            omnis alias dolore asperiores officiis, aliquid delectus nostrum,
            nam suscipit nobis impedit veritatis at necessitatibus! Repellat
            nobis aliquam veniam at, architecto quas libero! Ipsum, odio impedit
            minima sit maxime assumenda ipsa, natus architecto soluta veritatis,
            quis optio! Blanditiis odio dicta unde, similique inventore
            asperiores quaerat alias maxime autem tempore aliquam ad?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogsinglepage;
