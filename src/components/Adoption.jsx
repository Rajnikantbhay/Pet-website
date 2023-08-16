import React from "react";
import ReviewSlider from "./Review";
import bgadoption from '../img/adoption/bg.png'

const Adoption = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex" style={{ backgroundImage: `url(${bgadoption})` }}>
      <div className="container mx-auto h-[862px]">
        <h2 className="h2 mb-12 text-white">Our Reviews</h2>
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Adoption;
