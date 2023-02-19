import { ImageResponse } from '@vercel/og';
import { NextRequest } from "next/server";
import OG from "@/components/og";

export const config = {runtime: 'edge',};
const font = fetch(new URL("../../public/assets/JetBrainsMono-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function (req: NextRequest) {
  const fontData = await font
  const { searchParams } = new URL(req.url)

  const title = searchParams.get("title") ?? "Title"
  const subtitle = searchParams.get("subtitle") ?? "Sub title"
  const publicationDate = searchParams.get("publicationDate") ?? "2023.02.17"
  const tags = searchParams.get("tags") ?? "tag"

  return new ImageResponse(
    (
      <OG
        title={title}
        subtitle={subtitle}
        publicationDate={publicationDate}
        tags={tags}
      />
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrainsMono",
          data: fontData,
          style: "normal",
        }
      ],
    },
  );
}