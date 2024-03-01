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
      I consider myself the ultimate team player. That means no task or responsibility is too small or beneath my skill level as long as it helps the team. I draw so much energy from being a part of a strong team. Whenever I join a new team,
      I always start out just looking to learn as much as I can from my teammates. Then I want to find ways that my work can make their lives easier. Whether in a leadership position or just as an individual contributor, I want to look for ways
      to maximize the talents of all my teammates. I am open to all opportunities, project-based, contract-based or full-time positions. I look forward to my next challenge!
      </p>
    </motion.section>
  )
}
