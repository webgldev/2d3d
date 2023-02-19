import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { PageMetadata } from '@/types/type';
import { getAllPublished, getSingleBlogPostBySlug } from "../api/notion";

/*
TODO:
  - [] card component
        /pages/post/all.tsx,
        /pages/tags/[tag].tsx,
        /components/section.tsx
  - [] click increase
  - [] styles
*/

export default function Tag({posts, tag}: any) {
  console.log(posts)
  console.log(tag)
  return (
    <>
      <Head>
        <title>Curated WebGL and CSS</title>
      </Head>
      <Header />
      <main>
        <article>
          <p className='article-title'>{tag.toUpperCase()}</p>
          {posts.map((post: any, index: any) => (
            <div className='card' key={index}>
              <div className='thumbnail'>
                <a href='#' target='_blank'>
                <figure>
                  <img
                    src="https://blog-meta-og-image.vercel.app/_next/image?url=%2Fflavien.webp&w=640&q=75"
                    alt="thumbnail"
                    width={100}
                    height={100}
                    />
                  <figcaption>
                    <p>100</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/7794/7794669.png" alt="icon" />
                  </figcaption>
                </figure>
                </a>
              </div>
              <div className='des'>
                <Link href={`/post/${post.slug}`}>
                  <div>
                    <p className='title'>Title : {post.title}</p>
                    <p>10</p>
                  </div>
                  <div><p className='subtitle'>Description :{post.description}</p></div>
                  <div>
                    <p>ArticleUrl : {post.articleUrl}</p>
                    <p>NotionURL : {post.notionUrl}</p>
                    <p>created : {post.createdDate}</p>
                    <p>updated : {post.updatedDate}</p>
                  </div>
                </Link>
                <div className='tag'>
                  <p>Tag :</p>
                  {post.tags.map((tag: any)=> {
                    return (
                      <Link key={post.id + "/" + tag} href={`/tags/${tag}`}># {tag}</Link>                           
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const data: PageMetadata[] = await getAllPublished()
  console.log(`param in getStaticPaths %o`, data)
  // 전체 태그 페이지
  const a = data.flatMap((item)=>item.tags.map((tag) => tag.toLowerCase()))
  console.log(`aaaaaaaaa`, a);
  const b = new Set(a)
  console.log(`bbbbbbbbb`, b);

  return {
    paths: Array.from(b).map((tag) => {
      return {
        params: {
          tag: tag
        }
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const posts = await getAllPublished();
  // 각 태그 페이지
  const c = posts.filter((item)=>item.tags.map((tag) => tag.toLowerCase()).includes(params.tag));
  console.log(`ccccccccccc`, c)
  return {
    props: {
      tag: params.tag,
      posts: c
    }
  }
};

