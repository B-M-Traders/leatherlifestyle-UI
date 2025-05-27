import type { Metadata } from "next";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderFooter/HeaderWrapper";
import { Bricolage_Grotesque } from "next/font/google";
import BottomTabs from "@/components/layout/BottomTabs/BottomTabs";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/layout/HeaderFooter/Footer";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Shop Premium Leather Goods Online | Jackets, Wallets & Shoes at BM Traders",
  description:
    "Discover high-quality leather goods from top brands at bmtraders.com. Explore our collection of stylish leather jackets, wallets, shoes, and more. Shop now for premium craftsmanship and timeless designs at B M Traders. Free shipping available!",
  openGraph: {
    siteName: "Leather Lifestyle Store",
    title:
      "Shop Premium Leather Goods Online | Jackets, Wallets & Shoes at BM Traders",
    description:
      "Discover high-quality leather goods from top brands at bmtraders.com. Explore our collection of stylish leather jackets, wallets, shoes, and more. Shop now for premium craftsmanship and timeless designs at B M Traders. Free shipping available!",
    url: `${process.env.FRONTEND_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND_URL}/men2.jpg`,
        width: 1200,
        height: 630,
        alt: "Shop Premium Leather Goods Online | Jackets, Wallets & Shoes at BM Traders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shop Premium Leather Goods Online | Jackets, Wallets & Shoes at BM Traders",
    description:
      "Discover high-quality leather goods from top brands at bmtraders.com. Explore our collection of stylish leather jackets, wallets, shoes, and more. Shop now for premium craftsmanship and timeless designs at B M Traders. Free shipping available!",
    images: [`${process.env.FRONTEND_URL}/men2.jpg`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BricolageGrotesque.className} antialiased pb-[55px] lg:pb-0`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <NextTopLoader color="gray" showSpinner={false} />
        <HeaderWrapper />
        {children}
        <BottomTabs />
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
