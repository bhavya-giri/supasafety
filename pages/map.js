import React from "react";
import Navbar from "../components/Navbar";

const map = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="w-full h-screen"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=connaught%20place&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
          <br />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default map;
