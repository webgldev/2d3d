import Link from "next/link";
import { useRouter } from 'next/router'

export default function Card() {
  const router = useRouter()
  const { id } = router.query;
  return (
    <div className='card'>
      <div className='thumbnail'>
        <a href='#' target='_blank'>
        <figure>
          <img
            src="https://blog-meta-og-image.vercel.app/_next/image?url=%2Fflavien.webp&w=640&q=75"
            alt="thumbnail"
            width={140}
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
        <Link href='/post/1'>
          <p className='title'>Title{id}</p>
          <p className='subtitle'>subtitle</p>
          <div>
            <p>#tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag, #tag</p>
            <p>2023.02.17</p>
            <p>click 100</p>
          </div>
        </Link>
      </div>
    </div>
  )
}