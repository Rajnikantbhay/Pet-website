import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const handleLocateUs = () => {
        const url = `https://www.google.com/maps/place/Barking+Lot+Pet+Resort/@28.4160469,77.1166919,17z/data=!3m1!4b1!4m12!1m5!3m4!2zMjjCsDI0JzU3LjgiTiA3N8KwMDcnMTYuOCJF!8m2!3d28.4160534!4d77.121331!3m5!1s0x390d21cd853961bf:0x38eb28013aa37318!8m2!3d28.4160423!4d77.1213053!16s%2Fg%2F11qby3b54z?entry=ttu`;
        window.open(url, '_blank')
      }
    
      const handleContactUs = () => {
        const url = "https://api.whatsapp.com/send?phone=919315638272";
        window.open(url, '_blank')
      }

      const handleFollowUs = () => {
        const url = "https://www.instagram.com/barkinglotpetresort/"
        window.open(url, '_blank')
      }

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

    const handleYoutube = () => {
        const url = "https://youtu.be/sCWLrGRIqdA";
        window.open(url, '_blank')
    }

    return <Context.Provider value={{handleContactUs, handleLocateUs, handleFollowUs, isScreenSmall, handleYoutube}}>
        {children}
    </Context.Provider>
}