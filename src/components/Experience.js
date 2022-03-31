import React, { useState } from "react";
import style from "../style/experience.module.css";

export default function Experience() {
  const [data, setData] = useState([
    {
      image: "onlineExperience.webp",
      title: "Online Experience",
      description: "Travel the world without leaving home.",
    },
    {
      image: "experience.webp",
      title: "Experiences",
      description: "Things to do wherever you are.",
    },
    {
      image: "adventure.webp",
      title: "Adventures",
      description: "Multi-day trips with meals and stays.",
    },
  ]);
  return (
    <div className={style.Experience}>
      <h1>Experience the world</h1>
      <p>Unique activities with local experts—in person or online.</p>
      <div style={{ overflow: "auto" }}>
        <div className="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div className="col-4 px-2">
              <div className={style.ExperienceCard}>
                <img src={`/images/${item.image}`} alt="" />
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
