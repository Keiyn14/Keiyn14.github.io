import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Tech from "./Components/Tech.jsx";

function App() {
  return <>
      <div class="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>
  
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />


    </main>
  
  </>;
}

export default App;