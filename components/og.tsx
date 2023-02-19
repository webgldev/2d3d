import { OgType } from '@/types/type'
/*
TODO:
  - [] OG metaData
*/

const OG = ({ title, subtitle, tags, publicationDate }: OgType) => {
  const splitTags = tags.replaceAll(" ", "").split(",")

  return (
    <div
      tw="flex h-[630px] w-[1200px] items-center justify-center"
      style={{
        background:
          "linear-gradient(133deg, rgba(107,157,255,1) 0%, rgba(109,208,255,1) 35%, rgba(25,78,182,1) 100%)",
      }}>
      <div
        tw="flex absolute h-[630px] w-[1200px]"
        style={{
          background: "url(https://grainy-gradients.vercel.app/noise.svg)",
        }}></div>
      <div tw="relative flex h-[490px] w-[1060px] flex-col bg-white p-14 py-20"
        style={{
          borderRadius: "10px",
        }}
        >
        <h1
          tw={`mb-10 text-5xl font-bold tracking-wide text-[#292F36]`}
          style={{ fontFamily: "alata" }}>
          {title}
        </h1>
        <h2
          tw={`mb-4 text-3xl tracking-wide text-[#292F36]`}
          style={{ fontFamily: "mulish" }}>
          {subtitle}
        </h2>
        <div
          tw={`flex gap-2 text-lg tracking-wide text-[#292F36]`}
          style={{ fontFamily: "mulish" }}>
          <span>{publicationDate}</span>
          {splitTags && splitTags.length > 0 && (
            <>
              <span tw="ml-2">·</span>
              <ul>
                {splitTags.map((tag) => (
                  <li key={tag} tw="ml-2">
                    #{tag.toLowerCase()}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div tw="absolute bottom-10 right-10 flex justify-end">
          <img
            src='https://user-images.githubusercontent.com/54713067/219627927-49e4bdc8-c1ff-47a9-afd3-4e65f795053e.svg'
            width={85}
            height={90}
            alt="logo"
          />
        </div>
      </div>
    </div>
  )
}

export default OG