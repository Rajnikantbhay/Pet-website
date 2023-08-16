import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'
import { useState, useEffect } from 'react'

export default function Layout() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Header />
      {<Outlet />}
      {isScreenSmall ? <BottomNavigation /> : ""}
    </div>
  )
}
