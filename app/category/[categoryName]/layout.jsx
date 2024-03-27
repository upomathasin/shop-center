import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      {children}
      <Footer></Footer>
    </div>
  );
}
