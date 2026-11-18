import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';
import { technologiesForDesktop, technologiesForMobile } from '../constants';

const TechStack = () => {
   const [visibleTechnologies, setVisibleTechnologies] = useState(technologiesForDesktop);

   useEffect(() => {
     const handleResize = () => {
       const screenWidth = window.innerWidth;
 
       if (screenWidth < 660) {
         setVisibleTechnologies(technologiesForMobile);
       } else {
         setVisibleTechnologies(technologiesForDesktop);
       }
     };
 
     handleResize();
     window.addEventListener('resize', handleResize);
     return () => { window.removeEventListener('resize', handleResize); };
   }, []);

  return (
    <>
      <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Technology Stack.</h2>
      <div className='mt-12 flex flex-row flex-wrap justify-center gap-10'>
        {visibleTechnologies.map((technology) => (
          <div className='w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-xl border border-white/10 bg-white/90 shadow-sm' key={technology.name}>
            <img
              src={technology.icon}
              alt={`${technology.name} logo`}
              width="112"
              height="112"
              loading="lazy"
              decoding="async"
              className='w-full h-full object-contain p-5'
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(TechStack, "");
