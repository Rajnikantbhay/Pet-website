import React from "react";
import DogImg from '../../src/img/newsletter/dog.png';
import bgnewsletter from '../img/newsletter/bg-yellow.png'

const Newsletter = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]">
        <div className="bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full" style={{ backgroundImage: `url(${bgnewsletter})` }}>
          <img src={DogImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
