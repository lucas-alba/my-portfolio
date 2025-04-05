// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ⏳ Small timeout to ensure DOM is fully rendered
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // or 'auto' if you'd rather skip animation
      });
    }, 50); // tweak if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
