"use client"

import { Encoder } from "@/components/Encoder";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <div className="bg-white">
      <Hero/>
      <Encoder/>

      <Footer/>
    </div>
  );
}
