import React from 'react'
import Head from 'next/head'
import Carosel from '../components/Carosel'
import Team from '../components/Team'
import Statics from '../components/Statics'
import Testimonials from '../components/Testimonials'
import OurServices from './ourservices'



function About() {
  return (
    <>
    <Head>
      <title>AboutUs_Hunting_Store</title>
      <meta name="description" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
   </Head>
    <div>
      <Carosel/>
      <Statics/>
      <OurServices/>
      <Testimonials/>
      <Team/>
    </div>
    </>
  )
}

export default About