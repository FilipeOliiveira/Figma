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
    };

    // Fechar menu ao rolar a página
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollClose);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollClose);
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
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeSection === item.id
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                )}
                <span className="absolute inset-0 rounded-lg bg-primary/0 hover:bg-primary/5 transition-colors duration-300" />
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
        className={`md:hidden bg-background/98 backdrop-blur-md border-b border-border/50 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-b-0"
          }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all duration-300 ${activeSection === item.id
                ? "bg-primary/15 text-primary shadow-sm scale-[1.02]"
                : "text-foreground/80 hover:text-foreground hover:bg-primary/5 active:scale-95"
                }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
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
              className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
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
