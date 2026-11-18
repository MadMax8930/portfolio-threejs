import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div 
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-center items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img
         src={image}
         alt={`${name} portrait`}
         width="40"
         height="40"
         loading="lazy"
         decoding="async"
         className={'w-10 h-10 rounded-full object-cover'}
        />
      </div>

    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-6 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <div className='flex items-start justify-between gap-4'>
            <p className={styles.sectionSubText}>What others say</p>
            <div
              aria-hidden='true'
              className='mt-1 flex h-11 w-10 shrink-0 items-center justify-center rounded-xl border border-[#915eff]/30 bg-[#915eff]/[0.08]'
            >
              <svg
                viewBox='0 0 24 28'
                width='20'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-[#c4b5fd]'
              >
                <path d='M5 3.75h14v20.5l-7-4.75-7 4.75z' />
                <path d='M9.5 9h2v3h-3v-2a1 1 0 0 1 1-1Zm5 0h2v3h-3v-2a1 1 0 0 1 1-1Z' fill='currentColor' stroke='none' />
              </svg>
            </div>
          </div>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(
  Feedbacks,
  "",
  "sm:px-16 px-6 sm:pt-10 sm:pb-16 pt-6 pb-10"
)
