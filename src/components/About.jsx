import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      gyroscope={false}
      className="w-full min-w-0 sm:w-[250px] sm:mx-0"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-4 px-3 min-h-[150px] flex justify-evenly items-center flex-col sm:py-5 sm:px-12 sm:min-h-[280px]"
        >
          <img src={icon} alt="" aria-hidden="true" width="64" height="64" loading="lazy" decoding="async" className="w-10 h-10 object-contain sm:w-16 sm:h-16"/>
          <h3 className='text-white text-[14px] leading-tight font-bold text-center sm:text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Max Surnin, a Bangkok-based full-stack software engineer and independent AI builder working with international teams. I design and build web applications with React, Next.js, Node.js and TypeScript, and develop AI agents, LLM integrations, AI-powered applications and workflow automation. My work includes software architecture and creative technology. My background also includes content production, visual storytelling, audience strategy and SEO.
      </motion.p>

      <div className='mt-20 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.icon} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
