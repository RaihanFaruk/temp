import React from 'react';
import './Selles.css'
import CountUp from 'react-countup';

const Selles = () => {
    return (
        <div className="mt-5">
            <h2 className="title-sells container mx-auto ">Our Soled Reports</h2>
            <div  className="text-center counting-products  ">
            <span data-aos="fade-up" className="counting-text">Dates :  <CountUp end={1260} /> <br/> Tons </span>
            <span data-aos="fade-up"className="counting-text">Native Fruits :  <CountUp end={2000} /> <br/>Tons</span>
            <span data-aos="fade-up"className="counting-text">Exotic Fruits:  <CountUp end={980} /> <br/> Tons</span>
            <span data-aos="fade-up"className="counting-text">All seasons Fruits :  <CountUp end={690} /> <br/>Tons</span>
           
            </div>
            
            
        </div>
    );
};

export default Selles;