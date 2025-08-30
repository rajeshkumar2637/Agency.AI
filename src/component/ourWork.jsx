import React from 'react'
import Title from './Title.jsx'
import assets from '../assets/assets'
import {motion} from "motion/react"

const ourWork = () => {

    const workData=[
        {
            title:'Mobile app marketing',
            description:'We turn bold ideas into powerful brands Our team of experts comes with most innovative solutions',
            image:assets.work_mobile_app
        },
        {
            title:'Dashboard management',
            description:'Dashboard management is the process of organizing and maintaining a dashboard to ensure it is effective and efficient.',
            image:assets.work_dashboard_management
        },
        {
            title:'fitness app promotion',
            description:'Fitness app promotion is the process of marketing and advertising a fitness app to increase its visibility and downloads.',
            image:assets.work_fitness_app
        }
    ]

  return (
   <motion.div
   initial="hidden"
   whileInView="visible"
   transition={{staggerChildren:0.2}}
   viewport={{once:true}}

   id='our-work' className='flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    <Title title='Our latest work' 
    desc='From strategy to execution, we craft digital solutions that
     move your business forward.' />


   <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
  {workData.map((work, index) => (
    <motion.div 
    
    initial={{opcity:0, y:30}}
   whileInView={{opcity:1, y:0}}
   transition={{duration:0.5, delay:index*0.2}}
   viewport={{once:true}}
      key={index} 
      className='hover:scale-102 duration-500 transition-all cursor-pointer'
    >
      <img src={work.image} className='w-full rounded-xl' alt="" />
      <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
      <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
    </motion.div>
      ))}
</div>

</motion.div>
  )
}

export default ourWork
