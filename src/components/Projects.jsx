import Tilt from 'react-parallax-tilt';
import { motion, useReducedMotion } from 'framer-motion';

import { styles } from '../styles';
import { github_optimized } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, imageSrcSet, source_code_link, prefersReducedMotion }) => {
  return (
    <motion.div 
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        tiltEnable={!prefersReducedMotion}
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        gyroscope={false}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='project-image-frame relative h-[230px] w-full overflow-hidden rounded-2xl'>
          <img
            src={image}
            srcSet={imageSrcSet}
            sizes='(min-width: 640px) 320px, calc(100vw - 88px)'
            alt={`${name} project preview`}
            width="640"
            height="408"
            loading="lazy"
            decoding="async"
            className='project-image h-full w-full object-cover'
          />

          <div aria-hidden='true' className='project-image-overlay pointer-events-none absolute inset-0' />

          <div className='card-img_hover absolute inset-0 z-10 m-3 flex justify-end'>
            <a
             href={source_code_link}
             target="_blank"
             rel="noopener noreferrer"
             aria-label={`View ${name} source code on GitHub`}
             className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-[2px]"
            >
              <img src={github_optimized} alt='' aria-hidden='true' width='20' height='20' />
            </a>
          </div>
        </div>
        
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>  
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
     <motion.div
      //  variants={textVariant()}
     >
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
     </motion.div>

     <div className='w-full flex'>
      <motion.p
      //   variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        These projects demonstrate my full-stack development work across web applications, data-driven interfaces and online services. Each project includes a concise description of what it does, its core technologies and a direct link to its source code.
      </motion.p>
     </div>

     <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard 
          key={`project-${index}`}
          index={index} 
          prefersReducedMotion={prefersReducedMotion}
          {...project}
        />
      ))}
     </div>
    </>
  )
}

export default SectionWrapper(
  Projects,
  "projects",
  "sm:px-16 px-6 sm:pt-16 sm:pb-10 pt-10 pb-6"
);
