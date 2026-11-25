// Higher order component
import { motion, useReducedMotion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, sectionPadding = styles.padding) =>
function HOC(props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
          variants={staggerContainer()}
          initial={prefersReducedMotion ? 'show' : 'hidden'}
          animate={prefersReducedMotion ? 'show' : undefined}
          whileInView={prefersReducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.25 }}
          className={`${sectionPadding} max-w-7xl mx-auto relative z-0`}
        > 
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>   
          <Component {...props} />
        </motion.section>
    )

}

export default SectionWrapper
