import { Code2, Smartphone, Palette, Database, Cloud, Zap, Bot } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Criamos aplicações web modernas, responsivas e escaláveis usando as tecnologias mais recentes como React, Next.js e TypeScript.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Desenvolvemos aplicativos mobile nativos e híbridos que oferecem experiências excepcionais em iOS e Android.",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Arquiteturas robustas e APIs RESTful e GraphQL que garantem performance, segurança e escalabilidade para sua aplicação.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Implementação e gerenciamento de infraestrutura em nuvem, CI/CD e automação para garantir entregas contínuas.",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Bot,
    title: "Criação de Bots & Automação",
    description: "Desenvolvemos bots personalizados e soluções de automação para otimizar processos e melhorar a eficiência.",
    technologies: ["Chatbots", "Automação de Processos", "Integrações", "Machine Learning"],
  },
  {
    icon: Zap,
    title: "Otimização & Performance",
    description: "Análise e otimização de aplicações existentes para melhorar velocidade, SEO e experiência do usuário.",
    technologies: ["Performance Audit", "SEO", "Analytics", "Testing"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary/80">Nossos Serviços</span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Soluções completas para seu negócio digital
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de desenvolvimento de software,
            desde a concepção até a implementação e suporte contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card"
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-lg inline-block">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-muted text-sm rounded-full text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-primary text-primary-foreground rounded-2xl text-center">
          <h3 className="mb-3">Nosso Processo de Trabalho</h3>
          <p className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Seguimos uma metodologia ágil e colaborativa que garante transparência e resultados excepcionais
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {[
              { step: "01", title: "Descoberta", desc: "Entendemos suas necessidades" },
              { step: "02", title: "Design", desc: "Criamos a solução ideal" },
              { step: "03", title: "Desenvolvimento", desc: "Construímos com qualidade" },
              { step: "04", title: "Entrega", desc: "Lançamos e damos suporte" },
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2 opacity-60">{phase.step}</div>
                <h4 className="mb-1">{phase.title}</h4>
                <p className="text-sm text-primary-foreground/80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
