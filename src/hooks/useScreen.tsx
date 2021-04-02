import { useEffect, useState } from "react";

interface WidthScreen {
  width: number | undefined;
}

export default function useScreen() {
  const [screenWidth, setScreenWidth] = useState<WidthScreen>({
    width: undefined,
  });

  useEffect(() => {
    function handleSize() {
      setScreenWidth({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleSize);

    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return screenWidth;
}
