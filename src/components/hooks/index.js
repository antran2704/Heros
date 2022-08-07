import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(
    window.innerWidth || document.documentElement.offsetWidth
  );

  useEffect(() => {
    const widthCurrent = () => {
      setWidth(window.innerWidth || document.documentElement.offsetWidth);
    };

    window.addEventListener("resize", widthCurrent);
    return () => {
      window.removeEventListener("resize", widthCurrent);
    };
  }, [width]);

  return width;
};
