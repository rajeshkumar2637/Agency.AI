
import React from 'react'
import {company_logos} from '../assets/assets'
import {motion} from "motion/react"


const TrustedBy = () => {
  return (
    <motion.div
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
    >
      <motion.h3 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5}}
          viewport={{once:true}}
      
      className='font-semibold'>Trusted By Leading Companies</motion.h3>
<motion.div
          initial="hidden"
          whileInView="visible"
          transition={{staggerChildern:0.1}}
          viewport={{once:true}}

className='flex item-center justify-center flex-wrap gap-10 m-4'>
    {company_logos.map((logo, index)=>(
        <motion.img
        
        variants={
          {
            hidden:{opcity:0, y:10},
            visible:{
              opcity:1, y:0
            },
          }

        }
        transition={{duration:0.4}}

        key={index} src={logo} alt="" className='max h-5 sm:max-h-6
        dark:drop-shadow-xl' />
    ))}
</motion.div>

    </motion.div>
  )
}

export default TrustedBy
