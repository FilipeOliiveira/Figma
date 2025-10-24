import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-commerce Revolution",
    client: "TechStore Brasil",
    description: "Plataforma de e-commerce moderna e escalável que suporta alto volume de vendas durante períodos promocionais, com integração de pagamento, gestão de estoque em tempo real e painel administrativo intuitivo.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    result: "Aumento de 150% nas conversões e redução de 40% no tempo de carregamento",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5NTQxNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "App de Fitness & Bem-estar",
    client: "FitLife App",
    description: "Aplicativo mobile que motiva usuários a manter uma rotina saudável, com gamificação, integração ao Apple Health e Google Fit, sistema de recompensas e planos personalizados.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "HealthKit"],
    result: "Mais de 50.000 downloads nos primeiros 3 meses e avaliação 4.8 nas lojas",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Dashboard Analytics B2B",
    client: "DataInsights Corp",
    description: "Plataforma de análise de dados que processa milhões de registros e apresenta insights de forma visual e intuitiva, com visualizações em tempo real, filtros avançados e exportação de relatórios customizados.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "AWS"],
    result: "Redução de 70% no tempo de análise de dados e aumento de produtividade das equipes",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWdufGVufDF8fHx8MTc1OTU3OTUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary/80">Nosso Portfólio</span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Projetos que transformaram negócios
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Cada projeto é uma história de sucesso. Veja como ajudamos nossos clientes
            a alcançar seus objetivos através da tecnologia.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 md:h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge className="mb-4 w-fit">{project.client}</Badge>
                  <h3 className="mb-4 text-2xl md:text-3xl">{project.title}</h3>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground/60">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-1">Resultado</p>
                    <p className="text-foreground/90">{project.result}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
