import IconWithText from "@/components/BasicComps/IconWithText";
import BannerSlider from "@/components/Home/BannerSlider";
import ShopByCategory from "@/components/Home/ShopByCategory";
import ShopByCollection from "@/components/Home/ShopByCollection";
import ModeToggle from "@/components/Theme/modeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <IconWithText />
      <ShopByCategory />
      <ShopByCollection />
    </div>
  );
}
