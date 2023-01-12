import React from 'react'
import Carosel from '../components/Carosel'
import Team from '../components/Team'
import Statics from '../components/Statics'
import Testimonials from '../components/Testimonials'



function About() {
  return (
    <div>
      <Carosel/>
      <Statics/>
      <Testimonials/>
      <Team/>
    </div>
  )
}

export default About