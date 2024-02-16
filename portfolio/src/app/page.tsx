import About from "../../components/About";
import Contact from "../../components/Contact";
import MainPage from "../../components/MainPage";
import NavBar1 from "../../components/NavBar1";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="relative md:mx-4 lg:mx-10">
      <NavBar1 />
      <MainPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
