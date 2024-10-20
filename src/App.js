import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Accueil from "./components/Accueil";

function App() {
  return (
    <main className='bg-gray-500'>
      <Accueil/>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
