import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Section({posts, tag, limit=3, children}: any) {
  const [filteredPosts, setFilteredPosts] = useState([])
  useEffect(() => {
    let filteredPosts = []
    if (tag == "all") {
      filteredPosts = posts
    }
    else {
      filteredPosts = posts.filter((post:any) => post.tags.map((tag: string) => tag.toLowerCase()).includes(tag.toLowerCase()))
    }

    filteredPosts = filteredPosts.slice(0, limit)
    setFilteredPosts(filteredPosts)
  }, [posts, tag, limit])
  
  return (
    <article>
      <p className='article-title'>{tag.toUpperCase()}</p>
        {filteredPosts.map((post: any, index: any) => (
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
                <p className='subtitle'>Description :{post.description}</p>
                <div>
                  <p>ArticleUrl : {post.articleUrl}</p>
                  <p>NotionURL : {post.notionUrl}</p>
                  <p>created : {post.createdDate}</p>
                  <p>updated : {post.updatedDate}</p>
                </div>
              </Link>
              <div>
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
      {children}
    </article>
  )
}
