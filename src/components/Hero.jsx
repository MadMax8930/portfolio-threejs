import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import {styles} from '../styles';
import CanvasChunkFallback from './CanvasChunkFallback';

const ComputersCanvas = lazy(() => import('./canvas/Computers'));
const DESKTOP_CANVAS_QUERY = '(min-width: 640px)';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [shouldMountComputersCanvas, setShouldMountComputersCanvas] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_CANVAS_QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_CANVAS_QUERY);
    const handleMediaQueryChange = (event) => {
      if (event.matches) setShouldMountComputersCanvas(true);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <section className='relative w-full sm:h-screen xs:h-[22rem] h-[20rem] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#915eff]'>Max Surnin</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            Full-stack software engineer &amp; independent AI builder.
            <br className='sm:block hidden' />
            Bangkok-based, working with international teams.
          </p>
          <a
            href='https://linktr.ee/maxsurnin'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='More about me (opens in a new tab)'
            className='relative z-30 mt-6 ml-auto flex min-h-[44px] w-fit items-center justify-center rounded-full border border-[#915eff]/60 px-5 text-[11px] font-medium tracking-[0.16em] text-[#dfd9ff] transition-colors duration-200 hover:border-[#915eff] hover:bg-[#915eff]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] focus-visible:ring-offset-2 focus-visible:ring-offset-primary pointer-events-auto sm:absolute sm:right-0 sm:top-[22px] sm:mt-0 sm:ml-0 sm:z-30 lg:top-[35px]'
          >
            MORE ABOUT ME ↗
          </a>
        </div>
      </div>

      {shouldMountComputersCanvas && (
        <Suspense fallback={<CanvasChunkFallback className='sm:flex sm:pl-12 hidden' label="Loading computer scene" />}>
          <ComputersCanvas />
        </Suspense>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full sm:flex hidden justify-center items-center'>
          <a href='#about' aria-label='Scroll to About section'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={prefersReducedMotion ? undefined : {
                y: [0, 24, 0]
              }}
              transition={prefersReducedMotion ? undefined : {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
