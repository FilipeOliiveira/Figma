import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
