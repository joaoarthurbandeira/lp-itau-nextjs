"use client";
import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { SectionService } from "./components/SectionServices";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import React from "react";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionService />
    </>
  );
}
