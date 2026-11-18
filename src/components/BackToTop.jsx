import { useEffect, useRef, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldBeVisible = window.scrollY > 500;

      if (isVisibleRef.current !== shouldBeVisible) {
        isVisibleRef.current = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type='button'
      aria-label='Back to top'
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
        right: 'calc(1rem + env(safe-area-inset-right))',
      }}
      className={`fixed z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#915eff]/60 bg-[#1d1836]/95 text-[#dfd9ff] shadow-lg shadow-black/30 transition-[opacity,transform,visibility,background-color,border-color] duration-200 hover:border-[#915eff] hover:bg-[#2b2250] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? 'visible scale-100 translate-y-0 opacity-100' : 'invisible scale-90 translate-y-2 opacity-0'
      }`}
    >
      <svg
        aria-hidden='true'
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 19V5M6 11l6-6 6 6' />
      </svg>
    </button>
  );
};

export default BackToTop;
