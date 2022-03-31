import React, { useState, useEffect } from "react";
import style from "../style/headerForm.module.css";

export default function HeaderForm({ translateHeader }) {
  const [animated, setAnimated] = useState(false);
  function handleScroll(e) {
    const wScroll = window.scrollY;
    if (wScroll >= 50) {
      setAnimated(true);
    } else {
      setAnimated(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <>
      <div className={`${style.form} ${animated ? style.animated : ""}`}>
        <div
          className={style.links}
          style={{
            marginBottom: translateHeader ? "2.5em" : "",
          }}
        >
          <p
            className={`${style.active} ${translateHeader ? style.color : ""}`}
          >
            Places to stay
          </p>
          <p className={translateHeader ? style.color : ""}>Experiences</p>
          <p className={translateHeader ? style.color : ""}>
            Online Experiences
          </p>
        </div>
        <div
          className={style.HeaderForm}
          style={{
            backgroundColor: animated ? "transparent" : "",
            maxWidth: animated ? "300px" : "853px",
            transition: "200ms all ease-in-out",
            // margin: "auto",
            overflow: "hidden",
            height: animated ? "53px" : "67px",
          }}
        >
          {/* {animated ? ( */}
          <div
            className={style.headerAnimatedForm}
            onClick={() => setAnimated(false)}
            style={{
              width: "100%",
              minWidth: "300px",
              zIndex: animated ? "1" : "0",
              opacity: animated ? "1" : "0",
              position: animated ? "static" : "absolute",
              transition: "200ms all ease-in-out",
            }}
          >
            <p className="mb-0">Start your search</p>
            <span>
              <i class="fas fa-search"></i>
            </span>
          </div>
          {/* ) : ( */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              zIndex: animated ? "0" : "1",
              opacity: animated ? "0" : "1",
              minWidth: "853px",
              transition: "200ms all ease-in-out",
            }}
          >
            <button>
              <h6>Location</h6>
              <p>Where are you going?</p>
            </button>
            <button>
              <h6>Check in</h6>
              <p>Add dates</p>
            </button>
            <button>
              <h6>Check out</h6>
              <p>Add dates</p>
            </button>
            <button className="border-0">
              <h6>Guests</h6>
              <p>Add guests</p>
            </button>
            <button>
              <i class="fas fa-search"></i>
              {/* <span className="ml-2">Search</span> */}
            </button>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
}
