import { Target, Heart, Lightbulb, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import equipeImg from "../assets/equipe.jpeg";

const values = [
  {
    icon: Target,
    title: "Excelência",
    description: "Buscamos a perfeição em cada linha de código e cada pixel de design.",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o que fazemos e isso se reflete em cada projeto que entregamos.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Estamos sempre explorando as últimas tecnologias e metodologias.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos lado a lado com nossos clientes para garantir o sucesso.",
  },
];

const team = [
  {
    name: "Alcides Casemiro",
    role: "CEO & Co-fundador",
    image: "FOTODOMEUAMIGAO.jpg",
    initials: "AC",
  },
  {
    name: "Albert Freitas",
    role: "CTO & Co-fundador",
    image: "fotoalbert.jpeg",
    initials: "AF",
  },
  {
    name: "Vinicius Costa",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    initials: "MC",
  },
  {
    name: "Rafael Santos",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    initials: "RS",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary/80">Sobre Nós</span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Transformando ideias em realidade digital
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          {/* Story */}
          <div className="space-y-6 h-full flex flex-col justify-center">
            <h3 className="mb-4">Nossa História</h3>
            <p className="text-foreground/80 leading-relaxed">
              Fundada em 2025, a QuantumCode nasceu da paixão de  desenvolvedores
              que acreditavam que o software poderia transformar negócios de forma
              significativa. O que começou como um pequeno estúdio hoje é uma equipe
              de profissionais talentosos dedicados a criar soluções digitais excepcionais.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Trabalhamos com empresas de todos os tamanhos, desde startups inovadoras
              até empresas estabelecidas, sempre com o mesmo compromisso: entregar
              qualidade, inovação e resultados mensuráveis.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nossa abordagem é centrada no cliente. Não somos apenas um fornecedor
              de tecnologia - somos parceiros no crescimento do seu negócio. Cada
              projeto é uma oportunidade de aprender, inovar e superar expectativas.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-96 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={equipeImg}
                alt="Nossa equipe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-10">
          <h3 className="text-center mb-12 text-2xl md:text-3xl">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 md:p-8 text-center border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 p-3 bg-primary/5 rounded-full inline-block">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold">{value.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
