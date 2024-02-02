import Section from "./ui/Section";
import Playlist from "../components/Playlist";
import Contact from "./Contact";

const About = () => {
  return (
    <Section index={1} sectionTitle="박지원 Jiwon Park" sectionSubTitle="Frontend Developer">
      <Contact index={2} />
      <div className="animate-in flex flex-col gap-6 leading-7 md:leading-9 md:text-base text-sm" style={{ "--index": 5 } as React.CSSProperties}>
        <ul>
          <li>넓은 세상에서 다양하고 새로운 것을 배우는 데 두려움이 없고,</li>
          <li>직면한 문제를 깊게 파고들어 해결하는 것을 즐기며,</li>
          <li>개발자이기 이전에 사용자로서 UX에 대해 끊임없이 고민하려고 노력합니다.</li>
        </ul>
        <p>
          평소의 저는 게임과 이스포츠 시청을 좋아합니다. 책🤓📚을 읽으려고 노력하고, 수영을 시작한 지 얼마 되지 않아 즐겁게 배우고 있습니다. 🏊💦
        </p>
        <p className="highlight-words">
          특히 음악을 좋아하는데요. 좋아하는 장르는 팝, 얼터너티브 록, 모던 록이고 <span>Lauv</span>, <span>Charlie Puth</span>, <span>(여자)아이들</span>, <span>뉴진스</span>의 노래를 즐겨 듣습니다. 🤍
        </p>
        <p className="italic text-gray-400">아래 제 플레이리스트 같이 들어요 ♪</p>
      </div>
      <Playlist index={6} />
    </Section>
  )
}

export default About