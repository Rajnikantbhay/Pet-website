import React from "react";
import {  BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiOutlineYoutube} from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLocateUs = () => {
    const url = `https://www.google.com/maps/place/Barking+Lot+Pet+Resort/@28.4160469,77.1166919,17z/data=!3m1!4b1!4m12!1m5!3m4!2zMjjCsDI0JzU3LjgiTiA3N8KwMDcnMTYuOCJF!8m2!3d28.4160534!4d77.121331!3m5!1s0x390d21cd853961bf:0x38eb28013aa37318!8m2!3d28.4160423!4d77.1213053!16s%2Fg%2F11qby3b54z?entry=ttu`;
    window.open(url, '_blank')
  }

  const handleYoutube = () => {
    const url = "https://youtu.be/sCWLrGRIqdA"
    window.open(url, '_blank')
  }

  const handleInstagram = () => {
    const url = "https://www.instagram.com/barkinglotpetresort/"
    window.open(url, '_blank')
  }

  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8">
      <div className="container mx-auto">
        <div className="coflex flex-col lg:flex-row">
          {/* logo */}
          <div className="flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6">
            Barking Lot
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
