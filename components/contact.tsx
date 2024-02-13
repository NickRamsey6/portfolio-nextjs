'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section id='contact' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{opacity: 0,}} whileInView={{opacity: 1,}} transition={{duration: 1}}>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>Please conact me through this form or reach me via email at <a className='underline' href='mailto:nramseysc@gmail.com'>nramseysc@gmail.com</a></p>

      <form className='mt-10 flex flex-col'>
        <input className='h-14 px-4 rounded-lg borderBlack' type='email' placeholder='Your email' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message'/>
        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all'>
            Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105'/>{' '}
            </button>
      </form>
    </motion.section>
  )
}
