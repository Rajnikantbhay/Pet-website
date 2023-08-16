import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Pets from './Pets'
import Adoption from './Adoption'
import Footer from './Footer'
import Newsletter from "./Newsletter";
import { BsYoutube } from "react-icons/bs";
import { Context } from "../Context";

const Hero = () => {
  const {handleYoutube} = useContext(Context)
  return (
    <>
    <section
      className="bg-cream lg:bg-hero lg:bg-cover
  lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]"
    >
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0">
          {/* image */}
          <div className="hidden xl:flex w-full relative">
          </div>
          <h1 className="text-5l lg:text-7xl uppercase font-bold -tracking-[0.05em] mb-10">
            Where Tails Wag and Smiles Shine: <br />
            <span className="text-orange font-normal">Your Pet's Perfect Haven!</span> <br />
          
          </h1>
          
          <button className="btn btn-orange mx-auto lg:mx-0" onClick={handleYoutube}><BsYoutube/> </button>
        </div>
      </div>
    </section>
    <Pets />
    <Adoption />
    <Newsletter />
    
    </>
  );
};

export default Hero;
