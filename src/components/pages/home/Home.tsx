import About from "./about/About"
import Hero from "./hero/Hero"
import Skills from "./skills/Skills"

const Home = () => {
  return (
    <div className="mt-[80px]">
        <Hero />
        <About />
        <Skills />
    </div>
  )
}

export default Home