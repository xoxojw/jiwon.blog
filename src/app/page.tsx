import Image from "next/image";
import Link from "next/link";
import { allPosts } from ".contentlayer/generated";
import { compareDesc } from "date-fns";

import MyProfile from "@/public/my_profile.jpeg";
import { RiMailFill, RiGithubFill } from "react-icons/ri";
import PostList from "@/src/components/PostList";

export default async function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
    // 4 most recent
    .filter((_, i) => i < 3);

  return (
    <>
      <section>
        <div className="animate-in flex md:flex-row flex-col md:items-center items-start gap-4 mb-8">
          <Image
            src={MyProfile}
            alt="프로필 이미지"
            priority
            quality={100}
            width={120}
            className="rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="animate-in heading-second" style={{ "--index": 1 } as React.CSSProperties}>
                Jiwon Log
              </h1>
            </div>
            <p className="animate-in" style={{ "--index": 2 } as React.CSSProperties}>
              안녕하세요, 프론트엔드 개발자 박지원입니다. <br />
              기록과 공유의 즐거움을 느끼며 제가 성장하는 매 걸음의 작은 여정들을 남깁니다.
            </p>
            <ul className="animate-in flex gap-2 items-center ml-1">
              <li>
                <Link href="mailto:xoxojw.dev@gmail.com">
                  <RiMailFill className="animate-in" size={22} style={{ "--index": 3 } as React.CSSProperties} />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/xoxojw" target="blank">
                  <RiGithubFill className="animate-in" size={25} style={{ "--index": 4 } as React.CSSProperties} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <PostList posts={posts} index={6} />
    </>
  );
}
