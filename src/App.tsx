import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/10 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className={`group relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === "home" 
                  ? "bg-white/20 text-white shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '500', 
                letterSpacing: '-0.01em',
                boxShadow: activeSection === "home" ? '0 4px 20px rgba(255, 255, 255, 0.1)' : 'none'
              }}
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`group relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === "projects" 
                  ? "bg-white/20 text-white shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '500', 
                letterSpacing: '-0.01em',
                boxShadow: activeSection === "projects" ? '0 4px 20px rgba(255, 255, 255, 0.1)' : 'none'
              }}
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`group relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === "about" 
                  ? "bg-white/20 text-white shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '500', 
                letterSpacing: '-0.01em',
                boxShadow: activeSection === "about" ? '0 4px 20px rgba(255, 255, 255, 0.1)' : 'none'
              }}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`group relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === "contact" 
                  ? "bg-white/20 text-white shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif', 
                fontWeight: '500', 
                letterSpacing: '-0.01em',
                boxShadow: activeSection === "contact" ? '0 4px 20px rgba(255, 255, 255, 0.1)' : 'none'
              }}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full flex-1">
        <section id="home" className="w-full">
          <Hero />
        </section>
        
        <section id="projects" className="w-full">
          <Projects />
        </section>
        
        <section id="about" className="w-full">
          <About />
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </div>
  );
}
