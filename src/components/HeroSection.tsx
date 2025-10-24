import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5598916999491"; // +55 98 9169-9491 (sem formatação)
    const message = encodeURIComponent("Olá! Gostaria de agendar uma reunião para conversar sobre um projeto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748665194498-21a7e3d8ff19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU5NjAxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* <div className="inline-block mb-6 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary/80">Desenvolvimento de Software sob Medida</span>
          </div> */}

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Desenvolvemos software que impulsiona o{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              crescimento
            </span>{" "}
            do seu negócio
          </h1>

          <p className="mb-10 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Transformamos suas ideias em soluções digitais inovadoras.
            Desenvolvimento web, apps mobile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gap-2 px-8"
              onClick={handleWhatsAppClick}
            >
              Entre em Contato
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Social Proof - Client Logos */}
          {/* <div className="mt-20 pt-10 border-t border-border/50">
            <p className="text-sm text-foreground/50 mb-6">Confiado por empresas inovadoras</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
              <div className="text-2xl tracking-tight">TechCorp</div>
              <div className="text-2xl tracking-tight">StartupXYZ</div>
              <div className="text-2xl tracking-tight">InnovateHub</div>
              <div className="text-2xl tracking-tight">DigitalFirst</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
