import IconWithText from "@/components/BasicComps/IconWithText";
import BannerSlider from "@/components/Home/BannerSlider";
import GalleryWall from "@/components/Home/GalleryWall";
import HomeBlog from "@/components/Home/HomeBlog";
import NewArrivals from "@/components/Home/NewArrivals";
import OnSale from "@/components/Home/OnSale";
import ShopByCategory from "@/components/Home/ShopByCategory";
import ShopByCollection from "@/components/Home/ShopByCollection";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import Image from "next/image";

export default function Home() {
  const uspData = [
    {
      name: "Premium Leather",
      icon: "/icons/leather.png",
      description: "Sourced from the finest tannerie.",
    },
    {
      name: "Secure Payment",
      icon: "/icons/secure-payment.png",
      description: "Contact support team 24x7 365 days.",
    },
    {
      name: "Easy returns",
      icon: "/icons/return.png",
      description: "Not what expected Return & get full refund.",
    },
    {
      name: "Free Delivery",
      icon: "/icons/free-shipping.png",
      description: "Receive your products within 5-6 Days.",
    },
  ];
  const podData = [
    {
      name: "1272+",
      icon: "/icons/reviews.png",
      description: "Positive Review",
    },
    {
      name: "10000+",
      icon: "/icons/review.png",
      description: "Customers Served",
    },
    {
      name: "24x7",
      icon: "/icons/online-chat.png",
      description: "Chat Support",
    },
    {
      name: "Handcrafted",
      icon: "/icons/business.png",
      description: "Customize Products",
    },
  ];
  const gallery = [
    "/men1.jpg",
    "/men2.jpg",
    "/women1.jpg",
    "/women2.jpg",
    "/product.jpg",
    "/product2.jpg",
    "/men1.jpg",
    "/men2.jpg",
    "/women1.jpg",
    "/women2.jpg",
    "/product.jpg",
    "/product2.jpg",
  ];
  return (
    <div>
      <BannerSlider />
      <IconWithText data={uspData} />
      <ShopByCategory />
      <ShopByCollection />
      {/* <Image
        src={
          "https://www.thejacketmaker.com/cdn/shop/files/2048_x_1024_-_TJM.webp?v=1695726287"
        }
        alt=""
        height={600}
        width={1600}
        sizes="100vw"
        className="h-[250px] lg:h-[600px] object-cover object-center w-full"
      /> */}
      {/* <div className="h-[300px] md:h-[400px] lg:h-[600px] w-full">
        <video
          muted
          loop
          autoPlay
          controls={false}
          className="h-full w-full object-cover"
          src="https://www.thejacketmaker.com/cdn/shop/videos/c/vp/b6b8ed414b754c10baf95cf8466c9d89/b6b8ed414b754c10baf95cf8466c9d89.HD-720p-4.5Mbps-48307499.mp4?v=0"
        ></video>
      </div> */}
      <TrendingProducts />
      <NewArrivals />
      <OnSale />
      <GalleryWall items={gallery as any} />
      <Testimonials />

      <HomeBlog />
      <IconWithText data={podData} />
    </div>
  );
}
