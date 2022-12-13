import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hunting_Store</title>
        <meta name="description" content="Hunting_Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>

      
      
    </div>
  )
}
