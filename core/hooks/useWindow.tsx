import { useEffect, useState } from "react";

export const useWindow = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const showPlacehoders = () => {
      if (window?.innerWidth <= 501) {
        return setIsDesktop(false);
      }
      setIsDesktop(true);
    };
    showPlacehoders();
    window.addEventListener("resize", showPlacehoders);
    return () => window.removeEventListener("resize", showPlacehoders);
  }, []);

  return isDesktop;
};
