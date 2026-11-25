import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologiesForDesktop } from '../constants';

const technologyDisplayNames = {
  'HTML 5': 'HTML5',
  'CSS 3': 'CSS3',
  'Next JS': 'Next.js',
  'React JS': 'React',
  figma: 'Figma',
  'Node JS': 'Node.js',
  Postgres: 'PostgreSQL',
  docker: 'Docker',
};

const getTechnologyLabel = (technology) =>
  technologyDisplayNames[technology.name] || technology.name;

const TechStack = () => {
   const prefersReducedMotion = useReducedMotion();

   const gridVariants = {
     hidden: {},
     show: {
       transition: {
         staggerChildren: prefersReducedMotion ? 0 : 0.06,
       },
     },
   };

   const cardVariants = {
     hidden: {
       opacity: prefersReducedMotion ? 1 : 0,
       y: prefersReducedMotion ? 0 : 12,
     },
     show: {
       opacity: 1,
       y: 0,
       transition: { duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' },
     },
   };

  return (
    <>
      <motion.div
        variants={gridVariants}
        initial={prefersReducedMotion ? 'show' : 'hidden'}
        animate={prefersReducedMotion ? 'show' : undefined}
        whileInView={prefersReducedMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.15 }}
        className='grid w-full grid-cols-4 justify-items-center gap-2 md:grid-cols-6 md:gap-5 lg:grid-cols-8'
      >
        {technologiesForDesktop.map((technology) => (
          <motion.figure
            variants={cardVariants}
            whileHover={prefersReducedMotion ? undefined : {
              y: -5,
              scale: 1.02,
              transition: { duration: 0.22, ease: 'easeOut' },
            }}
            whileFocus={prefersReducedMotion ? undefined : {
              y: -5,
              scale: 1.02,
              transition: { duration: 0.22, ease: 'easeOut' },
            }}
            className='tech-card group relative flex aspect-square w-full max-w-[80px] items-center justify-center justify-self-center overflow-hidden rounded-xl border border-white/10 bg-white/90 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] focus-visible:ring-offset-2 focus-visible:ring-offset-primary md:max-w-[96px] lg:max-w-[112px]'
            key={technology.name}
            tabIndex={0}
            aria-labelledby={`technology-label-${technology.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          >
            <img
              src={technology.icon}
              alt=''
              aria-hidden='true'
              width="112"
              height="112"
              loading="lazy"
              decoding="async"
              className='tech-card-logo h-full w-full object-contain p-4 md:p-5'
            />
            <figcaption
              id={`technology-label-${technology.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className='tech-card-label absolute inset-x-0 bottom-0 z-10 flex min-h-6 items-center justify-center bg-[#100c24]/90 px-1 py-1 text-center text-[9px] font-medium tracking-wide text-white backdrop-blur-sm sm:text-[10px]'
            >
              {getTechnologyLabel(technology)}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(TechStack, "");
