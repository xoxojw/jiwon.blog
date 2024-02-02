"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import { playlistId } from "@/src/constants";
import { YouTubePlaylistItem } from "@/src/types/youtube";

const Playlist = () => {
  const { data, isLoading, error } = useSWR("/api/youtube");

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.error("SWR Error:", error);
    return <div>Error: {error.response ? error.response.statusText : "Unknown error"}</div>;
  }
  
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex flex-col">
      <h2 className="heading-second">My Playlist</h2>
      <ul className="grid grid-cols-3">
        {data?.items.map((item: YouTubePlaylistItem) => {
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