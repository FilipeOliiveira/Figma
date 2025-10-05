import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-sm text-primary/80">Entre em Contato</span>
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            Vamos conversar sobre seu projeto
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em contato
            e agende uma reunião sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-sm text-foreground/70">contato@devstudio.com.br</p>
                  <p className="text-sm text-foreground/70">comercial@devstudio.com.br</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">Telefone</h4>
                  <p className="text-sm text-foreground/70">+55 11 1234-5678</p>
                  <p className="text-sm text-foreground/70">+55 11 98765-4321</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">Localização</h4>
                  <p className="text-sm text-foreground/70">
                    Av. Paulista, 1000<br />
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-6">
              <h4 className="mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-input-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-input-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                    rows={6}
                    className="bg-input-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto gap-2">
                  Enviar Mensagem
                  <Send size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl text-center">
          <h3 className="mb-3">Pronto para começar seu projeto?</h3>
          <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
            Agende uma reunião gratuita de 30 minutos para discutirmos como podemos
            ajudar a transformar suas ideias em realidade.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Agendar Reunião Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
