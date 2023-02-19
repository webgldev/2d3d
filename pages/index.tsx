import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Section from '@/components/section'

import { getAllPublished } from './api/notion';
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts, tag}: any) {
  // console.log(posts)
  console.log(tag)
  return (
    <>
      <Head>
        <title>Curated WebGL and CSS</title>
      </Head>
      <Header />
      <main>
        <Section tag="all" posts={posts} limit={4}>
          <Link href='/post/all' className='more'>
            All Posts
            <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="more button" />
          </Link>
          </Section>
        <Section tag="webgl" posts={posts} limit={2}>
          <Link href='/tags/webgl' className='more'>
            Webgl
            <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="more button" />
          </Link>
        </Section>
        <Section tag="css" posts={posts} limit={2}>
          <Link href='/tags/css' className='more'>
            CSS
            <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="more button" />
          </Link>
        </Section>
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