import React from "react";
import Playlist from "./components/Playlist";

const AboutPage = () => {
  return (
    <>
      <h1 className="heading-first">About Me</h1>
      <section>
        <h2 className="heading-second">박지원 Jiwon Park</h2>
        <h3 className="text-lg text-gray">Junior Frontend developer</h3>
        <Playlist />
      </section>
      <section>
        <h2 className="heading-second">About</h2>
        <h1>Jiwon Park</h1>
        <h3 className="text-lg text-gray">Junior Frontend developer</h3>
      </section>
      <section>
        <h2 className="heading-second">About</h2>
        <h1>Jiwon Park</h1>
        <h3 className="text-lg text-gray">Junior Frontend developer</h3>
      </section>
    </>
  )
}

export default AboutPage;