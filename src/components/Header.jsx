import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdPets } from 'react-icons/md'
import { BsYoutube } from 'react-icons/bs'
import { Context } from "../Context";

const Header = () => {
  const {handleContactUs, handleLocateUs, isScreenSmall} = useContext(Context);
  
  return (
    <header className="lg:bg-[#ebe3cc] lg:w-full lg:left-0 p-4 padnav bg-[#f0e4cc] border border-none">
      <div className="container mx-auto flex gap-y-6 lg:flex-row h-full justify-around items-center relative">
        {/* logo */}
        <Link to="/" className="flex items-center"><MdPets className="mx-2"/><span className="font-bold" >Barking Lot</span></Link>
        {/* nav */}
        {!isScreenSmall ? <nav className="text-xl flex gap-x-4 lg:gap-x-12 font-base ">
          <Link to="/services">Services</Link>
            <Link onClick={handleLocateUs} >Locate us</Link>
            <Link onClick={handleContactUs}>Contact us</Link>
        </nav> : ""}
      </div>
    </header>
  );
};

export default Header;
