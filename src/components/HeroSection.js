import React from "react";
import style from "../style/heroSection.module.css";

export default function HeroSection() {
  return (
    <div
      className={style.HeroSection}
      style={{ backgroundImage: "url('/images/heroSectionBg.png')" }}
    >
      <h1>Go Near</h1>
      <button>Explore nearby stays</button>
    </div>
  );
}
