import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { FloatingHireMe } from "./components/FloatingHireMe";
import { LoadingScreen } from "./components/LoadingScreen";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Certifications } from "./sections/Certifications";
import { Achievements } from "./sections/Achievements";
import { TechTimeline } from "./sections/TechTimeline";
import { Contact } from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-paper dark:bg-ink text-paper-text dark:text-ink-text font-body antialiased">
      <LoadingScreen visible={loading} />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <TechTimeline />
        <Contact />
      </main>
      <Footer />
      <FloatingHireMe />
    </div>
  );
}

export default App;
