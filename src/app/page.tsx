import Image from "next/image";
import Link from "next/link";
import { allPosts } from ".contentlayer/generated";
import { compareDesc } from "date-fns";

import MyProfile from "../../public/my_profile.png";
import { RiMailFill, RiGithubFill } from "react-icons/ri";
import PostList from "@/src/components/PostList";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    // 4 most recent
    .filter((_, i) => i < 3);

  return (
    <>
      <div className="animate-in flex items-center gap-4">
        <Image src={MyProfile} alt="프로필 이미지" priority width={120} className="rounded-full" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1
              className="animate-in font-bold text-3xl"
              style={{ "--index": 1 } as React.CSSProperties}>
              Jiwon Park
            </h1>
          </div>
          <p className="animate-in"
            style={{ "--index": 2 } as React.CSSProperties}>
            안녕하세요, 프론트엔드 개발자 박지원입니다. <br />
            기록과 공유의 즐거움을 느끼며 제가 성장하는 매 걸음의 작은 여정들을 남깁니다.
          </p>
          <div className="animate-in flex gap-2 items-center ml-1">
            <Link href="mailto:xoxojw.dev@gmail.com">
              <RiMailFill
                className="animate-in"
                size={22}
                style={{ "--index": 3 } as React.CSSProperties} />
            </Link>
            <Link href="https://github.com/xoxojw" target="blank">
              <RiGithubFill
                className="animate-in"
                size={25}
                style={{ "--index": 4 } as React.CSSProperties} />
            </Link>
          </div>
        </div>
      </div>
      <PostList posts={posts} index={6} />
    </>
  );
}
