import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Code2, Briefcase, BookOpen, Zap, Download } from "lucide-react";
import { useState } from "react";
import GitHubStats from "@/components/GitHubStats";
import CertificationsSection from "@/components/CertificationsSection";

/**
 * Design Philosophy: Glassmorphism Elegante (Full Fixed Background)
 * - Imagem de fundo fixa ocupando a página inteira
 * - Gradiente escuro linear para máxima legibilidade do texto à esquerda
 * - Cards flutuantes com efeito de vidro fosco (backdrop blur)
 * - Apenas o conteúdo textual e os blocos rolam na tela
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "💧 InfraPlus",
      subtitle: "Plataforma Web (Full Stack)",
      description: "Plataforma de utilidade pública para monitoramento e denúncia de problemas hídricos. Projeto acadêmico com foco em impacto social.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      link: "https://github.com/richaferreira/Projeto_Infraplus_V1",
      status: "Em Desenvolvimento"
    },
    {
      id: 2,
      title: "💻 Portfólio Pessoal",
      subtitle: "HTML, CSS & GitHub Pages",
      description: "Site profissional para apresentar trajetória, repositórios e habilidades práticas em tecnologia.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/richaferreira/richaferreira.github.io",
      status: "Concluído"
    },
    {
      id: 3,
      title: "📍 OndeTem?",
      subtitle: "Node.js, Express, PWA",
      description: "PWA de agendamento de serviços estéticos com mapa de proximidade, pagamento online e chat com IA.",
      tech: ["Node.js", "Express", "Leaflet", "Google Gemini"],
      link: "https://github.com/richaferreira/ondetem",
      status: "Em Desenvolvimento"
    },
    {
      id: 4,
      title: "🔥 Sistema IoT de Monitoramento",
      subtitle: "Arduino, C/C++ & Hardware",
      description: "Sistema integrado de alarme de incêndio e monitoramento de temperatura com sensores físicos.",
      tech: ["Arduino", "C/C++", "Hardware", "Sensores"],
      link: "https://github.com/richaferreira/Projeto_IoT",
      status: "Em Desenvolvimento"
    }
  ];

  const skills = [
    {
      category: "🌐 Infraestrutura & Redes",
      items: ["TCP/IP", "FTTH", "Fibra Óptica", "Redes de Dados", "Switches", "Roteadores", "VLANs", "QoS"]
    },
    {
      category: "💻 Hardware & Sistemas",
      items: ["Montagem de PCs", "Notebooks", "Diagnóstico", "Manutenção", "Troubleshooting", "Upgrades"]
    },
    {
      category: "🤝 Soft Skills",
      items: ["Trabalho Em Equipe", "Resolução de Problemas", "Liderança", "Proatividade", "Comprometimento"]
    }
  ];

  const experience = [
    {
      title: "Recepcionista Hospitalar",
      company: "Unimed Araruama",
      period: "Set 2024 – Atual",
      location: "Araruama, RJ",
      description: "Primeiro ponto de contato em ambiente de saúde com foco em atendimento humanizado, admissão de pacientes e gestão de fluxo. Responsável por receber pacientes, agendar consultas e manter a organização do fluxo hospitalar.",
      achievements: [
        "Atendimento humanizado a mais de 100 pacientes/dia",
        "Gestão eficiente de fluxo de entrada",
        "Feedback positivo de pacientes e equipe"
      ]
    },
    {
      title: "Técnico em Hardware e Eletricista Residencial",
      company: "Autônomo / Prestação de Serviços",
      period: "Atuação Contínua",
      location: "Araruama, RJ",
      description: "Atendimento a clientes particulares para diagnóstico, montagem e manutenção de computadores e notebooks, além de execução de reparos e novas instalações elétricas residenciais.",
      achievements: [
        "Montagem de computadores (Workstations e Gamers) e upgrades",
        "Manutenção preventiva e corretiva (limpeza, troca de pasta térmica, formatação)",
        "Diagnóstico preciso de falhas em componentes físicos e sistemas operacionais",
        "Instalação, reparo e manutenção de quadros e circuitos elétricos residenciais seguindo normas de segurança"
      ]
    },
    {
      title: "Técnico de Redes / FTTH",
      company: "Linko",
      period: "Mar 2023 – Set 2024",
      location: "Araruama, RJ",
      description: "Diagnóstico de falhas em redes TCP/IP, instalação de infraestrutura FTTH e configuração de ativos de rede. Responsável pela manutenção e expansão da infraestrutura de fibra óptica.",
      achievements: [
        "Diagnóstico e resolução de 95% das falhas de rede",
        "Instalação de 500+ pontos de FTTH",
        "Manutenção de SLA de 99.5% de uptime"
      ]
    },
    {
      title: "Ajudante de Caminhão",
      company: "Vidraçaria Elace",
      period: "Abr 2022 – Jan 2023",
      location: "Araruama, RJ",
      description: "Suporte logístico e operacional em atividades de transporte e entrega. Trabalho em equipe e responsabilidade com prazos.",
      achievements: [
        "Suporte logístico em entregas",
        "Operações de carga e descarga",
        "Trabalho em equipe e responsabilidade com prazos",
        "Manipulação segura de produtos frágeis"
      ]
    },
    {
      title: "Técnico de Redes / FTTH",
      company: "Ok Virtual",
      period: "Ago 2020 – Nov 2021",
      location: "Araruama, RJ",
      description: "Diagnóstico de falhas lógicas em redes TCP/IP e expansão de infraestrutura crítica. Suporte técnico para clientes corporativos e residenciais.",
      achievements: [
        "Resolução de problemas complexos de rede",
        "Expansão de infraestrutura em 3 cidades",
        "Treinamento de novos técnicos"
      ]
    },
    {
      title: "Operador de Loja",
      company: "Casa & Vídeo",
      period: "Abr 2017 – Fev 2020",
      location: "Araruama, RJ",
      description: "Atendimento ao cliente com foco em resolução de problemas e operações logísticas de estoque. Colaboração em equipe para atingimento de metas e organização de processos de vendas.",
      achievements: [
        "Atendimento ao cliente com excelência",
        "Resolução de problemas e reclamações",
        "Gestão de estoque e logística",
        "Atingimento de metas de vendas"
      ]
    },
    {
      title: "Caixa e Atendimento",
      company: "Papelaria Mattos",
      period: "Abril 2014 – Jan 2017",
      location: "Araruama, RJ",
      description: "Responsabilidade financeira no fechamento de caixa e conferência rigorosa de inventário. Atendimento direto ao público, desenvolvendo comunicação clara e objetiva.",
      achievements: [
        "Fechamento de caixa com precisão financeira",
        "Conferência e controle de inventário",
        "Atendimento direto ao público",
        "Responsabilidade com valores"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-foreground relative">
      
      {/* ========================================================================= */}
      {/* BACKGROUND GLOBAL FIXO */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        {/* A MÁGICA ESTÁ AQUI: Limitamos a caixa da foto a 60% da tela (lg:w-[60%]).
          Isso impede o zoom extremo e faz a foto ficar do tamanho perfeito.
        */}
        <div 
          className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full"
          style={{
            backgroundImage: 'url(/profile.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top right', // Cola no teto para não cortar a cabeça
            backgroundRepeat: 'no-repeat',
            // Máscara que apaga a borda esquerda para mesclar perfeitamente com o fundo preto
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
          }}
        />
        
        {/* Gradiente Lateral para proteger o texto à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 md:via-background/85 to-transparent" />
        
        {/* Camada escura geral suave para dar contraste nas outras seções durante a rolagem */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Toque sutil de azul escuro profundo para dar o clima do design */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-color-add"
          style={{
            background: "linear-gradient(135deg, #020410 0%, #0c102b 100%)"
          }}
        />
      </div>
      {/* ========================================================================= */}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/10 bg-background/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            RF
          </div>
          <div className="flex gap-6 text-sm font-medium overflow-x-auto">
            <a href="#sobre" className="hover:text-primary transition-colors whitespace-nowrap">Sobre</a>
            <a href="#projetos" className="hover:text-primary transition-colors whitespace-nowrap">Projetos</a>
            <a href="#habilidades" className="hover:text-primary transition-colors whitespace-nowrap">Habilidades</a>
            <a href="#experiencia" className="hover:text-primary transition-colors whitespace-nowrap">Experiência</a>
            <a href="#certificacoes" className="hover:text-primary transition-colors whitespace-nowrap">Certificações</a>
            <a href="#github" className="hover:text-primary transition-colors whitespace-nowrap">GitHub</a>
            <a href="#contato" className="hover:text-primary transition-colors whitespace-nowrap">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="space-y-2 mb-6 animate-in fade-in slide-in-from-left duration-700">
              <p className="text-primary font-mono text-sm font-semibold">Bem-vindo ao meu portfólio</p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Olá, sou <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Richardson Ferreira</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-6 animate-in fade-in slide-in-from-left duration-700 delay-100">
              Desenvolvedor em transição de carreira com <strong className="text-foreground">7+ anos de experiência</strong> em infraestrutura, redes FTTH e hardware. Atualmente cursando <strong className="text-foreground">Engenharia de Software</strong> e focado em <strong className="text-foreground">Python, JavaScript e C#</strong>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 animate-in fade-in slide-in-from-left duration-700 delay-200">
              Combino experiência técnica sólida com habilidades interpessoais desenvolvidas em ambientes dinâmicos. Busco minha primeira oportunidade de estágio para integrar resolução de problemas com desenvolvimento de software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left duration-700 delay-300">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base"
              >
                <a href="#contato">Entrar em Contato</a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-semibold px-8 py-6 text-base"
              >
                <a href="https://github.com/richaferreira" target="_blank" rel="noopener noreferrer">
                  Ver Projetos
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 text-secondary font-semibold px-8 py-6 text-base inline-flex items-center gap-2"
              >
                <a href="/curriculo.pdf" download="Curriculo_Richardson_Ferreira.pdf">
                  <Download className="w-4 h-4" />
                  Download Currículo
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-12 animate-in fade-in slide-in-from-left duration-700 delay-500">
              <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-xs text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-xs text-muted-foreground">Projetos em Destaque</div>
              </div>
              <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-xs text-muted-foreground">Disposição de Aprender</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Sobre Mim</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um profissional apaixonado por <strong className="text-foreground">tecnologia e inovação</strong>, atualmente cursando <strong className="text-foreground">Engenharia de Software</strong> na Universidade de Vassouras. Minha trajetória profissional combina experiência técnica sólida com habilidades interpessoais desenvolvidas em ambientes dinâmicos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especializado em <strong className="text-foreground">infraestrutura de redes FTTH</strong> e <strong className="text-foreground">diagnóstico de problemas TCP/IP</strong>, tenho experiência prática em configuração de ativos de rede, instalação de fibra óptica e garantia de SLA de conectividade.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: "🌐", title: "Infraestrutura & Redes", desc: "TCP/IP, FTTH, fibra óptica, configuração de ativos" },
                { icon: "💻", title: "Hardware & Sistemas", desc: "Montagem, manutenção, diagnóstico de componentes" },
                { icon: "⚙️", title: "Desenvolvimento", desc: "HTML, CSS, JavaScript, Python, C#, GitHub" },
                { icon: "🤝", title: "Soft Skills", desc: "Atendimento, trabalho em equipe, comunicação clara" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projetos em Destaque</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-mono">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs font-semibold text-secondary">{project.status}</span>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      Ver Repositório
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Habilidades Técnicas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span 
                      key={sidx}
                      className="px-3 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Experiência Profissional</h2>
          
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                  <span className="text-sm font-mono text-secondary whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                
                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Principais Realizações:</p>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificacoes" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Certificações & Credenciais</h2>
          <CertificationsSection />
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section id="github" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Atividade no GitHub</h2>
          <GitHubStats username="richaferreira" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou aberto a oportunidades de estágio, projetos e colaborações. Vamos criar algo incrível juntos!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <a href="mailto:richardsonferreira1995@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-semibold"
            >
              <a href="https://wa.me/5522999273766" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-semibold"
            >
              <a href="https://github.com/richaferreira" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-semibold"
            >
              <a href="https://www.linkedin.com/in/richardson-ferreira-464571264" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/10 bg-background/40 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 Richardson Ferreira. Desenvolvido com dedicação, inovação e paixão por tecnologia.</p>
        </div>
      </footer>
    </div>
  );
}