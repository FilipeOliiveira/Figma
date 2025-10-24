import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar seção ativa
      const sections = ["home", "services", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Fechar menu ao rolar a página
      if (isMobileMenuOpen && window.scrollY > 0) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Prevenir scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Serviços", id: "services" },
    { label: "Projetos", id: "projects" },
    { label: "Sobre", id: "about" },
    { label: "Contato", id: "contact" },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5598916999491"; // +55 98 9169-9491 (sem formatação)
    const message = encodeURIComponent("Olá! Gostaria de agendar uma reunião para conversar sobre um projeto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsMobileMenuOpen(false); // Fechar menu após clicar
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div
            className="cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform inline-block">
              QuantumCode
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                )}
              </button>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="ml-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar Reunião
            </Button>
          </div>          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/98 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
          ? "max-h-[600px] opacity-100 border-b border-border/50"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className={`px-4 py-6 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-5 py-3.5 font-medium transition-all duration-300 ${activeSection === item.id
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
                }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              <span className="flex items-center justify-between">
                {item.label}
                {activeSection === item.id && (
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </span>
            </button>
          ))}
          <div className="pt-4 border-t border-border/30 mt-4">
            <Button
              className="w-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
              onClick={handleWhatsAppClick}
              size="lg"
            >
              Agendar Reunião
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}