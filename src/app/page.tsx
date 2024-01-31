import Image from "next/image";
import Link from "next/link";
import MyProfile from "../../public/my_profile.png";
import { RiMailFill, RiGithubFill, RiNotionFill } from "react-icons/ri";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <article className="flex flex-col gap-16">
      <div className="animate-in flex items-center gap-4">
        <Image src={MyProfile} alt="프로필 이미지" priority width={120} className="rounded-full" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1
              className="animate-in font-bold text-2xl"
              style={{ "--index": 1 } as React.CSSProperties}>
              Jiwon Park
            </h1>
          </div>
          <p className="animate-in"
            style={{ "--index": 2 } as React.CSSProperties}>
            안녕하세요, 프론트엔드 개발자 박지원입니다. <br />
            기록과 공유의 즐거움을 느끼며 제가 성장하는 매 걸음의 작은 여정들을 남깁니다.
          </p>
          <div className="animate-in flex gap-2 items-center">
            <Link href="mailto:xoxojw.dev@gmail.com">
            <RiMailFill
              className="animate-in w-5 h-5"
              style={{ "--index": 3 } as React.CSSProperties} />
            </Link>
            <Link href="https://github.com/xoxojw" target="blank">
            <RiGithubFill
              className="animate-in w-6 h-6"
              style={{ "--index": 4 } as React.CSSProperties} />
            </Link>
            <Link href="https://xoxojw.notion.site/What-I-Learned-b63ba9e925554f168ef4cc9c387b737d?pvs=4" target="blank">
            <RiNotionFill className="animate-in w-6 h-6"
              style={{ "--index": 5 } as React.CSSProperties} />
            </Link>
          </div>
        </div>
      </div>
      <PostList index={6} />
    </article>
  );
}
