import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { getAllPublished } from '../api/notion';

/*
TODO:
  - [] card component
        /pages/post/all.tsx,
        /pages/tags/[tag].tsx,
        /components/section.tsx
  - [] click increase
  - [] styles
*/

export default function allPosts({ posts, tag }: any) {
  return (
    <>
      <Header />
      <main>
        <article>
          <p className='article-title'>All</p>
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
                    {post.tags.map((tag:any)=> {
                      return (
                        <Link key={post.id + "/" + tag} href={`/tags/${tag.toLowerCase()}`}># {tag}</Link>                           
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
export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};