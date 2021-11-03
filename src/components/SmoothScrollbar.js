import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; //debe ser ...-dom
import ScrollBar from "react-smooth-scrollbar";

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  //para que las paginas se muestren por defecto desde el inicio
  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <ScrollBar ref={ref} damping={0.09}>
      {children}
    </ScrollBar>
  );
}
