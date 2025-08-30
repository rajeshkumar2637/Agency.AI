import React from 'react'
import assets from '../assets/assets'
import Title from './Title.jsx'
import ServiceCard from './serviceCard.jsx'
import {motion} from 'motion/react'


const Services = () => {
    const serviecsData=[
        {
            title:'Advertising',
            description:'We turn bold ideas into powerful brands Our team of experts comes with most innovative solutions',
            icon:assets.ads_icon
            
        },
        {
            title:'Content Marketing',
            description:'we help you create a marketing strategy that drives results.',
            icon:assets.content_icon
            
        },
        {
            title:'content Writing',
            description:'wrtie engaging content for your website that resonates with your audience',
            icon:assets.content_icon
            
        },
        {
            title:'Social Media',
            description:'social media is a powerful tool for businesses to connect with their audience and build brand awareness.',
            icon:assets.social_icon
            
        },
    ]
  return (
  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{once:true}}
  transition={{staggerChildren:0.2}}

  id='services' className='relative flex flex-col items-center 
  gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
   text-gray-700 dark:text-white'>
    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1
     dark:hidden' />

     <Title title=' How can we help?' desc='From strategy to excution, we craft 
     digital solutions that move our business forward.' />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {serviecsData.map((service, index)=>
        (
            <ServiceCard key={index} service={service} index={index} />
        ))}
    </div>


  </motion.div>
)
}

export default Services
