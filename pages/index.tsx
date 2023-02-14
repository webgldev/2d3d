import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Curated WebGL and CSS</title>
        <meta name="description" content="curated list of webgl" />
        <meta name="description" content="2d3d dev" />
        <meta name="description" content="cureted webgl and css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <p>Cureted webgl and css</p>
        <Card />
      </main>
      <Footer />
    </>
  )
}
