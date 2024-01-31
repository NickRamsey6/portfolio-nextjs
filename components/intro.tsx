import React from 'react'
import profilePic from '@/public/pfp.jpg'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image src={profilePic}
                alt='Profile photo'
                priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                <span className='text-4xl'>👋</span>
            </div>
        </div>
    </section>
  )
}
