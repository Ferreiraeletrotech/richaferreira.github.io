import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Code2, Briefcase, BookOpen, Zap, Download } from "lucide-react";
import { useState } from "react";
import GitHubStats from "@/components/GitHubStats";
import CertificationsSection from "@/components/CertificationsSection";

/**
 * Filosofia de Design: Glassmorphism Elegante (Fundo Fixo Total)
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
      {/* NOVO BACKGROUND GLOBAL FIXO (A FOTO E OS GRADIENTES FIXOS NA TELA TODA) */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        {/* A Foto de Perfil Ocupando 100% da altura e largura proporcional */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/profile.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradiente Lateral para proteger o texto à esquerda (Preto sólido -> Transparente) */}
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

      {/* Navegação */}
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

      {/* Seção Hero (Fundo removido daqui pois agora reflete o Fundo Fixo da página) */}
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

            {/* Estatísticas */}
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

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Sobre Mim</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um profissional apaixonado por <strong className="text-foreground">tecnologia e inovação</strong>, atualmente cursando <strong className="text-foreground">Engenharia de Software</strong> na Universidade de Vassouras. Minha trajetória profissional combina experiência técnica sólida com habilidades interpessoais desenvolvidas em ambientes dinâmicos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especializado em <strong className="text-foreground">infraestrutura de redes FTTH</strong> e <strong className="text-foreground">hardware</strong>, possuo uma base sólida em resolução de problemas complexos e diagnóstico técnico. Atualmente, estou focado em expandir meus conhecimentos para o desenvolvimento de software, aplicando minha experiência prática em novos desafios tecnológicos.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Educação</h4>
                  <p className="text-sm text-muted-foreground">Engenharia de Software<br />Univ. de Vassouras</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Localização</h4>
                  <p className="text-sm text-muted-foreground">Araruama, RJ<br />Brasil</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/40 border-border/20 backdrop-blur-md hover:border-primary/50 transition-all duration-300 group">
                <Code2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focado em Python, JavaScript (React/Node) e C#. Construindo soluções modernas e escaláveis.
                </p>
              </Card>

              <Card className="p-6 bg-card/40 border-border/20 backdrop-blur-md hover:border-primary/50 transition-all duration-300 group">
                <Zap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Infraestrutura</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experiência avançada em redes TCP/IP, fibra óptica (FTTH) e configuração de ativos de rede.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projetos" className="py-20 bg-background/30 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
              <p className="text-muted-foreground">Uma seleção dos meus trabalhos recentes em desenvolvimento e hardware.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-2 text-primary" asChild>
              <a href="https://github.com/richaferreira" target="_blank" rel="noopener noreferrer">
                Ver todos no GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="overflow-hidden bg-card/40 border-border/20 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">
                        {project.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase">
                      {project.status}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-md bg-background/50 border border-border/20 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full gap-2 group/btn" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver Repositório <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section id="habilidades" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Minhas Habilidades</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-8 bg-card/40 border-border/20 backdrop-blur-md hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(item => (
                    <span 
                      key={item}
                      className="px-4 py-2 rounded-lg bg-background/60 border border-border/10 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Experiência */}
      <section id="experiencia" className="py-20 bg-background/30 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Trajetória Profissional</h2>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors group pb-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {exp.period}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Certificações */}
      <section id="certificacoes" className="py-20 border-t border-border/10">
        <CertificationsSection />
      </section>

      {/* Seção GitHub */}
      <section id="github" className="py-20 bg-background/30 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ecossistema GitHub</h2>
            <p className="text-muted-foreground mb-12">Monitoramento em tempo real das minhas contribuições e atividades.</p>
            <GitHubStats />
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Estou em busca da minha primeira oportunidade como <strong className="text-foreground">estagiário em Engenharia de Software</strong>. Se você procura alguém proativo, com base técnica sólida e muita vontade de aprender, vamos nos conectar!
                </p>

                <div className="space-y-6">
                  <a 
                    href="mailto:richardson.ferreira.contato@gmail.com" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border/20 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">E-mail</p>
                      <p className="text-lg font-medium">richardson.ferreira.contato@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/5522997645161" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border/20 hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">WhatsApp</p>
                      <p className="text-lg font-medium">+55 (22) 99764-5161</p>
                    </div>
                  </a>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href="https://www.linkedin.com/in/richardson-ferreira-832a51235/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card/40 border border-border/20 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://github.com/richaferreira" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card/40 border border-border/20 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-card/40 border-border/20 backdrop-blur-md">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Seu Nome</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/20 focus:border-primary outline-none transition-colors"
                      placeholder="Como posso te chamar?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Seu E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/20 focus:border-primary outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="No que posso te ajudar?"
                    />
                  </div>
                  <Button className="w-full py-6 text-lg font-bold" onClick={() => window.open('https://wa.me/5522997645161?text=Olá Richardson, vi seu portfólio e gostaria de conversar.')}>
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 border-t border-border/10 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Richardson Ferreira. Desenvolvido com React, Tailwind e ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
