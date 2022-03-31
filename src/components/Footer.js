import React from "react";
import style from "../style/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.Footer}>
      <div className="row">
        <div className="col-lg-3">
          <div className={style.FooterItem}>
            <h6 className={style.title}>About</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={style.FooterItem}>
            <h6 className={style.title}>COMMUNITY</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={style.FooterItem}>
            <h6 className={style.title}>HOST</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={style.FooterItem}>
            <h6 className={style.title}>SUPPORT</h6>
            <div className="row">
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
              <div className="col-md-4 col-lg-12">
                <a href="#" className={style.link}>
                  abcd
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className={`${style.FooterContent} justify-content-start justify-content-sm-center justify-content-lg-between`}
          >
            <div className="d-flex align-items-center flex-wrap">
              <h6>© 2021 Airbnb, Inc. All rights reserved</h6>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="d-flex align-items-center mr-3 ">
                <i class="fas fa-globe mr-2"></i>
                <a href="" className="text">
                  English (US)
                </a>
              </div>
              <div className="d-flex align-items-center mx-3">
                <span className="mr-2">$</span>
                <a href="#">USD</a>
              </div>
              <div className="d-flex align-items-center ml-3">
                <a href="#" className="mx-2">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" className="mx-2">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
