"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const Comments = () => {
  const { theme } = useTheme();
  const commentTheme = theme === "light" ? "light" : "transparent_dark"
  return (
    <Giscus
      id="comments"
      repo="xoxojw/jiwon.blog"
      repoId="R_kgDOLGbFaw"
      category="Giscus"
      categoryId="DIC_kwDOLGbFa84Cc4o2"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={commentTheme}
      lang="ko"
      loading="lazy"
    />
  )
}

export default Comments