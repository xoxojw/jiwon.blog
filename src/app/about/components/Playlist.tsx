"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import { YouTubePlaylistItem } from "@/src/types/youtube";
import { playlistId } from "@/src/app/api/youtube/route";

const Playlist = () => {
  const { data, error } = useSWR("/api/youtube");

  console.log(data);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="heading-second">My Playlist</h2>
      <ul className="flex">
        {data.items.map((item: YouTubePlaylistItem) => {
          console.log(item);
          const { id, snippet } = item;
          const { title, thumbnails, resourceId } = snippet;
          const { medium } = thumbnails;
          return (
            <Link key={id} href={`https://www.youtube.com/playlist?list=${playlistId}`}>
              <li className="flex flex-col">
              <h3>{title}</h3>
                <Image
                  src={medium.url}
                  alt="재생목록 썸네일"
                  width={medium.width} height={medium.height}
                />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Playlist