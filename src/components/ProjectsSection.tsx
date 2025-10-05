import { ExternalLink, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-commerce Revolution",
    client: "TechStore Brasil",
    challenge: "Necessidade de uma plataforma de e-commerce moderna e escalável que pudesse suportar alto volume de vendas durante períodos promocionais.",
    solution: "Desenvolvemos uma plataforma completa usando Next.js, com integração de pagamento, gestão de estoque em tempo real e painel administrativo intuitivo.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    result: "Aumento de 150% nas conversões e redução de 40% no tempo de carregamento.",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5NTQxNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Conversões", value: "+150%" },
      { label: "Performance", value: "+40%" },
      { label: "Satisfação", value: "98%" },
    ],
  },
  {
    title: "App de Fitness & Bem-estar",
    client: "FitLife App",
    challenge: "Criar um aplicativo mobile que motivasse usuários a manter uma rotina saudável, com gamificação e acompanhamento personalizado.",
    solution: "Desenvolvemos um app nativo usando React Native com integração ao Apple Health e Google Fit, sistema de recompensas e planos personalizados.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "HealthKit"],
    result: "Mais de 50.000 downloads nos primeiros 3 meses e avaliação 4.8 nas lojas.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Downloads", value: "50k+" },
      { label: "Avaliação", value: "4.8★" },
      { label: "Retenção", value: "85%" },
    ],
  },
  {
    title: "Dashboard Analytics B2B",
    client: "DataInsights Corp",
    challenge: "Plataforma complexa de análise de dados que precisava processar milhões de registros e apresentar insights de forma visual e intuitiva.",
    solution: "Criamos um dashboard interativo com visualizações em tempo real, filtros avançados e exportação de relatórios customizados.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "AWS"],
    result: "Redução de 70% no tempo de análise de dados e aumento de produtividade das equipes.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWdufGVufDF8fHx8MTc1OTU3OTUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Eficiência", value: "+70%" },
      { label: "Dados/seg", value: "1M+" },
      { label: "Usuários", value: "500+" },
    ],
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
              className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className={`p-6 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge className="mb-4 w-fit">{project.client}</Badge>
                  <h3 className="mb-4">{project.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm mb-2 text-foreground/60">O Desafio</h4>
                      <p className="text-foreground/80">{project.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm mb-2 text-foreground/60">Nossa Solução</h4>
                      <p className="text-foreground/80">{project.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm mb-2 text-foreground/60">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl mb-1 text-primary">{metric.value}</div>
                        <div className="text-xs text-foreground/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary cursor-pointer hover:gap-3 transition-all">
                    <span>Ver caso completo</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            Ver Todos os Projetos
            <ExternalLink size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
