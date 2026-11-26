import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import {styles} from '../styles';
import CanvasChunkFallback from './CanvasChunkFallback';
import ComputerScenePoster from './ComputerScenePoster';

const ComputersCanvas = lazy(() => import('./canvas/Computers'));
const DESKTOP_CANVAS_QUERY = '(min-width: 640px)';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_CANVAS_QUERY).matches
  );
  const [shouldMountComputersCanvas, setShouldMountComputersCanvas] = useState(false);
  const [hasRenderedComputersScene, setHasRenderedComputersScene] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_CANVAS_QUERY);
    let delayId;
    let idleId;

    const cancelScheduledLoad = () => {
      window.clearTimeout(delayId);
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
    };

    const requestScene = () => {
      cancelScheduledLoad();
      if (mediaQuery.matches) setShouldMountComputersCanvas(true);
    };

    const scheduleScene = () => {
      if (!mediaQuery.matches || shouldMountComputersCanvas) return;
      cancelScheduledLoad();
      // Let the page settle before downloading or compiling the desktop scene.
      delayId = window.setTimeout(() => {
        if ('requestIdleCallback' in window) {
          idleId = window.requestIdleCallback(requestScene, { timeout: 5000 });
        } else {
          requestScene();
        }
      }, 8000);
    };

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
      if (event.matches) scheduleScene();
    };

    const scheduleAfterPageLoad = () => scheduleScene();
    if (document.readyState === 'complete') {
      scheduleAfterPageLoad();
    } else {
      window.addEventListener('load', scheduleAfterPageLoad, { once: true });
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      cancelScheduledLoad();
      window.removeEventListener('load', scheduleAfterPageLoad);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [shouldMountComputersCanvas]);

  const handleSceneReady = useCallback(() => setHasRenderedComputersScene(true), []);

  return (
    <section className='relative w-full sm:h-screen xs:h-[22rem] h-[20rem] mx-auto'>
      <div className={`${styles.paddingX} pointer-events-none absolute inset-0 top-[120px] z-20 max-w-7xl max-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#915eff]'>Max Surnin</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            Full-stack software engineer &amp; independent AI builder.{' '}
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

      {isDesktop && !hasRenderedComputersScene && (
        <ComputerScenePoster
          loading={shouldMountComputersCanvas}
          onActivate={() => setShouldMountComputersCanvas(true)}
        />
      )}

      {shouldMountComputersCanvas && (
        <div className='absolute inset-0 z-0 hidden sm:block'>
          <Suspense fallback={<CanvasChunkFallback className='sm:flex sm:pl-12 hidden' label="Loading computer scene" />}>
            <ComputersCanvas onFirstFrame={handleSceneReady} />
          </Suspense>
        </div>
      )}

      <div className='pointer-events-none absolute xs:bottom-10 bottom-32 z-20 w-full sm:flex hidden justify-center items-center'>
          <a href='#about' aria-label='Scroll to About section' className='pointer-events-auto'>
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
