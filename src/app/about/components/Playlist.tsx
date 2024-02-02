"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useSWR from "swr";

import { playlistId } from "@/src/constants";

import { motion, AnimatePresence } from "framer-motion";

const rowVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? window.outerWidth + 10 : -window.outerWidth - 10
  }),
  animate: {
    x: 0
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -window.outerWidth - 10 : window.outerWidth + 10
  })
};

const offset = 6;

const Playlist = ({ index }: { index: number; }) => {
  const { data, error } = useSWR("/api/youtube");
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1 < data.items.length ? prevIndex + 1 : 0));
  //   }, 5000); // update index every 2 seconds

  //   return () => clearInterval(interval);
  // }, [data]);

  if (error) {
    console.error("Youtube playlist fetch Error:", error);
    return <div>재생 목록을 불러오는데 문제가 생겼어요. 🥲</div>;
  }

  if (!data) return <></>;

  const item = data.items[currentIndex];
  const { id, snippet } = item;
  const { title, thumbnails, resourceId } = snippet;
  const { high } = thumbnails;

  return (
    <section
      className="animate-in w-full py-8 flex flex-col gap-8"
      style={{ "--index": index } as React.CSSProperties}>
      <h3 className="w-4/5 text-lg font-semibold font-mono text-end">My Playlist ♪</h3>
      <div className="w-full flex flex-col gap-2 items-center hover:drop-shadow-yellow dark:hover:drop-shadow-blue transition ease-out">
        <motion.ul className="flex w-full h-96 items-center justify-center">
          <AnimatePresence>
            <motion.li
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "tween",
                duration: 3
              }}
              key={currentIndex}
            >
              <Link
                key={id}
                href={`https://www.youtube.com/playlist?list=${playlistId}`}
                target="blank"
                className="flex flex-col items-center gap-2"
              >
                <Image
                  src={high.url}
                  alt="재생목록 썸네일"
                  width={high.width}
                  height={high.height}
                  className="rounded-lg"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
              </Link>
            </motion.li>
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
};

export default Playlist;
