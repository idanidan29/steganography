"use client";

import { useState } from "react";
import { Decoder } from "@/components/Decoder";
import { Encoder } from "@/components/Encoder";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SliderToggle } from "@/components/ui/SliderToggle";

export default function Home() {
  const [selected, setSelected] = useState<"Encrypt" | "Decrypt">("Encrypt");

  return (
    <div className="bg-white">
      <Hero />
      <SliderToggle selected={selected} setSelected={setSelected} /> {selected === "Encrypt" ? <Encoder /> : <Decoder />}
      <Footer />
    </div>
  );
}
