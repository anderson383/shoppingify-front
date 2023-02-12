import {useEffect, useState} from "react";


export const useDeviceSize = (sizeMin:number) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)


  useEffect(() => {
    const listenWith = () => {
      if(window.innerWidth > sizeMin) {
        setIsMobile(false)
        return;
      }
      setIsMobile(true)
    }

    listenWith()

    window.addEventListener('resize', listenWith)


    return () => {
      window.removeEventListener('resize', listenWith)
    }
  }, [])

  return {isMobile}
}