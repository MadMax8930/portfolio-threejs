import React, { useState, useEffect } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const TechStack = () => {
   const [visibleTechnologies, setVisibleTechnologies] = useState(technologies);

   useEffect(() => {
     const handleResize = () => {
       const screenWidth = window.innerWidth;
 
       if (screenWidth < 660) {
         setVisibleTechnologies(technologies.slice(0, 6)); // Display the first six items for mobile
       } else {
         setVisibleTechnologies(technologies); // Display all items for desktop
       }
     };
 
     handleResize();
     window.addEventListener('resize', handleResize);
     return () => { window.removeEventListener('resize', handleResize); };
   }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {visibleTechnologies.map((technology) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(TechStack, "");