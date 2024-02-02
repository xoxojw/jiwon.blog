import About from "./components/About";

const AboutPage = () => {
  return (
    <>
      <h1 className="animate-in heading-first">About Me</h1>
      <div className="animate-in flex flex-col gap-20">
        <About />
      </div>
    </>
  )
}

export default AboutPage;