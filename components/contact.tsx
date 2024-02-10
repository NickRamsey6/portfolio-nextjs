import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact'>
      <SectionHeading>Contact me</SectionHeading>
      <p>Please conact me here through this form or reach me via email at <a className='underline' href='mailto:nramseysc@gmail.com'>nramseysc@gmail.com</a></p>

      <form>
        <input type='email' />
        <textarea />
        <button type='submit'>Submit <FaPaperPlane /></button>
      </form>
    </section>
  )
}
