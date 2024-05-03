import "./App.css";
import Navbar         from "./components/Navbar/Navbar"
import Landing        from "./components/Landing/Landing"
import AboutMe        from "./components/AboutMe/AboutMe"
import Technologies   from "./components/Technologies/Technologies"
import Portfolio      from "./components/Portfolio/Portfolio"
import Contact        from "./components/Contact/Contact"



function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
