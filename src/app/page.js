// src/app/page.js

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <WhyChooseUs />
      <GetInTouch />
      <FAQ />
      <Footer />
    </>
  );
}
