import Head from 'next/head'
import Hero from '../components/Hero'
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
      <Statics/>
      <Testimonials/>

      
    </div>
  )
}
