import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Listen for hash changes (navbar clicks)
    const handleHashChange = () => {
      if (currentElement) {
        const rect = currentElement.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          // Reset and re-trigger animation
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [options]);

  return [elementRef, isVisible];
};
