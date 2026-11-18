import {motion} from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full sm:h-screen xs:h-80 h-72 mx-auto'>
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
            className='mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#915eff]/60 px-5 text-[11px] font-medium tracking-[0.16em] text-[#dfd9ff] transition-colors duration-200 hover:border-[#915eff] hover:bg-[#915eff]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:z-10'
          >
            MORE ABOUT ME ↗
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full sm:flex hidden justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
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
