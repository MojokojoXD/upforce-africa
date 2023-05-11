import { useEffect, useState, useCallback } from 'react';

const useShowNavbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const visibility = window.scrollY > 60;

    setIsVisible(visibility);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isVisible;
};

export default useShowNavbar;
