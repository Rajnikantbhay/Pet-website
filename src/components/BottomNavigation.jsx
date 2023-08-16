import React, { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';
import { FaDog } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai'
import { Context } from '../Context';

export default function BottomNavigation() {
    const {handleContactUs, handleLocateUs, handleFollowUs} = useContext(Context)
  return (
    <div className='bottom-navigation fixed bottom-0 left-0 right-0 p-2 bg-[#f0e4cc] shadow-md border border-white z-10'>
      <nav className='flex items-center justify-evenly'>
        <div className='flex flex-col items-center'>
          <Link to="/services">
            <FaDog className='text-2xl' />
          </Link>
          <span className='text-sm '>Services</span>
        </div>

        <div className='flex flex-col items-center'>
          <Link onClick={handleLocateUs}>
            <FaMapMarkerAlt />
          </Link>
          <span className='text-sm'>Location</span>
        </div>
        <div className='flex flex-col items-center'>
          <Link onClick={handleContactUs}>
            <RiWhatsappFill className='text-2xl' />
          </Link>
          <span className='text-sm'>Contact</span>
        </div>
        <div className='flex flex-col items-center'>
          <Link onClick={handleFollowUs}>
            <AiFillInstagram className='text-2xl' />
          </Link>
          <span className='text-sm'>Follow</span>
        </div>
      </nav>
    </div>
  );
}

