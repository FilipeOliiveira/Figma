import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl mb-4 tracking-tight">QuantumCode</div>
            <p className="text-sm text-foreground/70">
              Transformando ideias em soluções digitais inovadoras desde 2025.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Projetos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm">Serviços</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Desenvolvimento Web</li>
              <li>Apps Mobile</li>
              <li>Consultoria UX/UI</li>
              <li>Backend & APIs</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm">Contato</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>o.quantum.code@gmail.com</li>
              <li>+55 98 9169-9491</li>
              <li>+55 98 8463-1881</li>
              <li>São Luís - MA</li>
              <li className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary hover:underline"
                >
                  Enviar mensagem
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 flex items-center gap-1">

          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
