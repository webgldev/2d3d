import { useState } from "react";
import { useRouter } from 'next/router'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Tooltip from '@mui/material/Tooltip';

import { PageMetadata } from '@/types/type';
import { getAllPublished, getSingleBlogPostBySlug } from "../api/notion";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Post({ markdown,  metadata }: { markdown: string, metadata: PageMetadata }, {posts, tag, limit=3}:any) {
  const router = useRouter()

  //clipboard
  const share = useRouter();
  // const base = "http://localhost:3000";
  const base = "https://webgldev.github.io/2d3d/";
  const links = base + share.asPath;
  const [open, setOpen] = useState(false);
  const copyLinkClose = () => {
    setOpen(false);
  };
  const copylink = (e:any) => {
    navigator.clipboard.writeText(links)
    setOpen(true);
  }

  // markdown
  const CodeBlock = ({ language, codestring }: { language: string, codestring: string }) => {
    return (
      <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
        {codestring}
      </SyntaxHighlighter>
    )
  }

  return (
    <>
      <Header />
      <main className='post'>
        <article>
          <button onClick={() => router.back()}>
            <img src="https://cdn-icons-png.flaticon.com/512/545/545680.png" alt="button icon" />
            Back
          </button>
          <section>
            <div className='post-title'>
              <h1>{metadata.title}</h1>
              <p>{metadata.description}</p>
              <p>ArticleUrl : {metadata.articleUrl}</p>
              <p>NotionURL : {metadata.notionUrl}</p>
              <p>created : {metadata.createdDate}</p>
              <p>updated : {metadata.updatedDate}</p>
            </div>
            <div className='copy'>
              <p className='tag'>{metadata.tags}</p>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={copyLinkClose}
                open={open}
                disableFocusListener
                disableHoverListener
                title="Clipboard Copy"
              >
                <button onClick={copylink}><img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="copy icon" /></button>
              </Tooltip>
            </div>
          </section>
          <hr />
          <div>
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <CodeBlock
                    codestring={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    />
                ) : (
                    <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}>{markdown}</ReactMarkdown>
            </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const data: PageMetadata[] = await getAllPublished()
  console.log(`param in getStaticPaths %o`, data)

  return {
    paths: data.map((metadata) => {
      return {
        params: {
          slug: metadata.slug
        }
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  console.log(`param in getStaticProps %o`, params)
  const post = await getSingleBlogPostBySlug(params.slug)
  console.log(`post in getStaticProps: %o`, post)

  return {
    props: {
      ...post
    },
    revalidate: 60
  };
};

