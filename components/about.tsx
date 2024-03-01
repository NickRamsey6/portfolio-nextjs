'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');


  return (
    <motion.section 
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.175}}
        id='about'
        >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      Thanks for visiting my portfolio page! I made the professional switch to software development 5 years ago and have been enjoying every new step in my programming journey ever since! Originally my excel-based skills
      translated well to more statistics-based programming languages like R. But I also branched out further into the world of web development with JavaScript (primarily React.js and Next.js), Ruby (on Rails), and Java. Professionally,
      I have used Python and database languages like SQL and SAS. I come from a test driven development background and believe there is no better feeling in programming than passing all your tests!
      </p>
      <p className='mb-3'>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
       normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use 
       Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
       accident, sometimes on purpose (injected humour and the like).
      </p>
    </motion.section>
  )
}
