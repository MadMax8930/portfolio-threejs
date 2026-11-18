import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, useReducedMotion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences, education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
   contentStyle={{ background: '#1d1836', color: '#fff'}}
   contentArrowStyle={{ borderRight: '7px solid #232631'}}
   date={experience.date}
   iconStyle={{ background: '#383E56' }}
   icon={<TimelineIcon symbol={experience.iconSymbol} />}
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const TimelineIcon = ({ symbol }) => (
  <div className='flex h-full w-full items-center justify-center'>
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      className='text-white'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{ display: 'block', position: 'static', left: 'auto', top: 'auto', margin: 0, width: 24, height: 24, flex: 'none' }}
    >
      {symbol === 'ai' && <>
        <path d='m6 6 6 3 6-3M6 18l6-3 6 3M6 6v12m12-12v12M12 9v6' />
        <circle cx='6' cy='6' r='2' /><circle cx='18' cy='6' r='2' />
        <circle cx='6' cy='18' r='2' /><circle cx='18' cy='18' r='2' />
        <circle cx='12' cy='12' r='2' />
      </>}
      {symbol === 'code' && <>
        <path d='m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16' />
      </>}
      {symbol === 'graduation' && <>
        <path d='m2 9 10-6 10 6-10 6zM6 12v5c3 3 9 3 12 0v-5M22 9v7' />
        <circle cx='22' cy='18' r='1' />
      </>}
      {symbol === 'marketplace' && <>
        <path d='M3 20h18M5 17l4-5 4 3 6-8' />
        <path d='M15 7h4v4M5 20V9m5 11v-4m5 4v-6m4 6V9' />
      </>}
      {symbol === 'cinema' && <>
        <path d='M3 8h18v12H3zM3 8l2-5h16l-2 5M8 3 6 8m8-5-2 5m8-5-2 5' />
        <path d='m10 12 5 2.5-5 2.5z' />
      </>}
      {symbol === 'university' && <>
        <path d='m2 9 10-6 10 6M4 10h16M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18M2 22h20' />
      </>}
      {symbol === 'school' && <>
        <path d='M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5a2.5 2.5 0 0 1 2.5 2.5z' />
        <path d='M6 7h3m-3 4h3m6-4h3m-3 4h3' />
      </>}
    </svg>
  </div>
)

const EducationCard = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={item.date}
    iconStyle={{ background: '#383E56' }}
    icon={<TimelineIcon symbol={item.iconSymbol} />}
  >
    <h3 className='text-white text-[20px] font-bold'>{item.title}</h3>
    {item.institution && (
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{item.institution}</p>
    )}
    {item.details && <p className='text-white-100 text-[14px] mt-3'>{item.details}</p>}
  </VerticalTimelineElement>
)

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();
  const workHeadingVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <>
     <motion.div
      variants={workHeadingVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView='show'
      viewport={{ once: true, amount: 0.38 }}
      className='text-left'
     >
      <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
     </motion.div>

     <div className='mt-10 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.date}-${experience.title}`} experience={experience} />
        ))}
      </VerticalTimeline>
     </div>

     <motion.div variants={textVariant()} className='mt-16 text-left'>
      <p className={styles.sectionSubText}>ACADEMIC BACKGROUND</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
     </motion.div>

     <div className='mt-10 flex flex-col'>
      <VerticalTimeline>
        {education.map((item) => (
          <EducationCard key={`${item.date}-${item.title}`} item={item} />
        ))}
      </VerticalTimeline>
     </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
