import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'

import { getAllPublished } from './api/notion';
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts, tag}: any) {
  return (
    <>
      <Head>
        <title>Curated WebGL and CSS</title>
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
export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};