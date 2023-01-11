import Head from 'next/head'
import Cta from '../components/Cta'
import Cta2 from '../components/Cta2'
import Feedback from '../components/Feedback'
import Hero from '../components/Hero'
import Promo from '../components/Promo'
import Shop from '../components/Shop'
import Shop2 from '../components/Shop2'
import Statics from '../components/Statics'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunting_Store</title>
        <meta name="description" content="Hunting_Store" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
      <Hero/>
      <Shop/>
      <Cta/>
      <Promo/>
      <Shop2/>
      <Cta2/>
      <Statics/>
      <Testimonials/>
      <Feedback/>

      
    </div>
  )
}
