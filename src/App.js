// import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import NavBarScroll from "./utils/NavBarScroll";

function App() {
  window.onload = NavBarScroll;
  return (
    <div>
      <NavBar />
      <Home />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
