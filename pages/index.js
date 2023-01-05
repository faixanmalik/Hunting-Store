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

        {/* for google addsence */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236387827342703"crossorigin="anonymous"></script>
      </Head>

      <Hero/>
      <Statics/>
      <Testimonials/>
    </div>
  )
}
