import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return children || null;
};

export default ScrollToTop;
