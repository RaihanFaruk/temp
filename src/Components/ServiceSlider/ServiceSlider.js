import React from "react";
import "./ServiceSlider.css";
import img from "../../Images/banner2.jpg";
import img4 from "../../Images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ServiceSlider = () => {
  return (
    <div className="services container">
        <h1 className="title mx-auto ">Seasonal Fruits</h1>
      <div className="serviceSlider row  ">
        <div data-aos="zoom-in-down" className="col-lg-6 col-12 service-slider-text ">
        <h1>Advantages of having seasonal fruits of Bangladesh</h1>
        <h3>Exotic Vegetables</h3>
        <h3>Season Sale</h3>
        <h3>100% Organic</h3>
        <h3>100% fresh</h3>
        <h3>Hot Deals</h3>
        <h3>Special Offers</h3>

  

        </div>
        <div data-aos="zoom-in-down" className="col-lg-6 col-12 service-img p-0">
          <img src={img} alt="" />
        </div>
      </div>
      <h1 className="title mx-auto">best dates in the world</h1>
      <div className="serviceSlider row container service-slider1">
        <div data-aos="zoom-in-down" className="col-md-6 service-img p-0">
          <img src={img4} alt="" />
        </div>

        <div data-aos="zoom-in-left" className="col-md-6 service-slider-text">
            
         <h2>They are large, soft, and considered to be the most flavorful dates among all different varieties grown. They taste excellent when eaten fresh because of their high moisture content. Medjool Dates stays good for 12-15 days at room temperature.</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
