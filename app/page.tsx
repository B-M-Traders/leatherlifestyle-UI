import IconWithText from "@/components/BasicComps/IconWithText";
import BannerSlider from "@/components/Home/BannerSlider";
import HomeBlog from "@/components/Home/HomeBlog";
import NewArrivals from "@/components/Home/NewArrivals";
import OnSale from "@/components/Home/OnSale";
import ShopByCategory from "@/components/Home/ShopByCategory";
import ShopByCollection from "@/components/Home/ShopByCollection";
import Testimonials from "@/components/Home/Testimonials";
import TrendingProducts from "@/components/Home/TrendingProducts";
import ModeToggle from "@/components/Theme/modeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <IconWithText />
      <ShopByCategory />
      <ShopByCollection />
      <Image
        src={
          "https://lureurban.b-cdn.net/cache/catalog/slides/lure-collection-2024-1920x900.jpg"
        }
        alt=""
        height={600}
        width={1600}
        sizes="100vw"
        className="h-[300px] lg:h-[400px] object-cover object-top w-full"
      />
      <TrendingProducts />
      <NewArrivals />
      <OnSale />
      <Image
        src={
          "https://lureurban.b-cdn.net/cache/catalog/slides/lure-collection-2024-1920x900.jpg"
        }
        alt=""
        height={600}
        width={1600}
        sizes="100vw"
        className="h-[300px] lg:h-[400px] object-cover object-top w-full"
      />
      <Testimonials />
      <HomeBlog />
    </div>
  );
}
