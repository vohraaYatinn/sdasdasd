import Link from "next/link";
import React from "react";

const Breadcrumb = ({ pagename, pagetitle,img }) => {
  return (
    <div
      className="breadcrumb-section"
      style={{
        display:'flex',
        alignItems:"center",
        backgroundImage:
          `linear-gradient(270deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0.3) 101.02%), url(${img!==undefined? img: "/assets/img/activities/banner.png"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="banner-content">
              <h1>{pagename}</h1>
              <ul className="breadcrumb-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{pagetitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
