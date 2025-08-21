import Image from "next/image";
import NavSection from "../source/Home/navSection.js";
import BlogSection from "../source/Home/blogSection.js";
import HeroSection from "../source/Home/heroSection.js";
import FooterSection from "../source/Home/footerSection.js";
import ServiceSection from "../source/Home/serviceSection.js";
import ShopSection from "../source/Home/shopSection.js";

export default function Home() {
  return (
    <main>
      <NavSection/>
      <HeroSection/>
      <ServiceSection/>
      <ShopSection/>
      <BlogSection/>
      <FooterSection/>
      
    </main>
  );
}
