import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Product from "@/components/Product";
import Products from "@/components/Products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
