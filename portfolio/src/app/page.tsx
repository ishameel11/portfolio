import About from "../../components/About";
import MainPage from "../../components/MainPage";
import NavBar1 from "../../components/NavBar1";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <NavBar1 />
      <MainPage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
