import React, { useState } from "react";
import style from "../style/millionHost.module.css";

export default function MillionHost() {
  const [data, setData] = useState([
    { image: "hostHome.webp", title: "Host your home" },
    { image: "hostOnlineExperience.webp", title: "Host an Online Experience" },
    { image: "hostExperience.webp", title: "Host an Experience" },
  ]);
  return (
    <div className={style.MillionHost}>
      <h1>Join millions of hosts on Airbnb</h1>
      <div style={{ overflowX: "auto" }}>
        <div class="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div className="col-4 px-2">
              <div className={style.MillionHostCard}>
                <img src={`/images/${item.image}`} alt="" />
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
