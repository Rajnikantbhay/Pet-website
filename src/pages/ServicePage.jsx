import React from "react";
import ServiceSlider from "../components/ServiceSlider";
import bgservice from '../img/services/bg.png'

const Services = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center min-h-[862px] py-8 bg-[#f0e4cc]" style={{ backgroundImage: `url(${bgservice})` }}>
      <div className="container mx-auto h-[862px]">
        <h2 className="h2 mb-12">Our Services</h2>
        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;