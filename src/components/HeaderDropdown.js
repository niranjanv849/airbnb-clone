import React from "react";
import style from "../style/headerDropdown.module.css";

export default function HeaderDropdown() {
  return (
    <div className={style.HeaderDropdown}>
      <div className={style.city}>
        <img src="/images/location.webp" alt="" />
        <p>Explore nearby destinations</p>
      </div>
      <h6>GETAWAYS NEAR YOU</h6>
      <div className={style.city}>
        <img src="/images/lahore.webp" alt="" />
        <div>
          <p>Lahore</p>
          <span>4 hour drive</span>
        </div>
      </div>
      <div className={style.city}>
        <img src="/images/lahore.webp" alt="" />
        <div>
          <p>Lahore</p>
          <span>4 hour drive</span>
        </div>
      </div>
      <div className={style.city}>
        <img src="/images/lahore.webp" alt="" />
        <div>
          <p>Lahore</p>
          <span>4 hour drive</span>
        </div>
      </div>
    </div>
  );
}
