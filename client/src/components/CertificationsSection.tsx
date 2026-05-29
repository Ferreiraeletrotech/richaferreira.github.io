import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  badge: string;
  icon: string;
  link?: string;
}

/**
 * Componente de Certificações com cards interativos
 * Design: Glassmorphism com efeitos hover elegantes
 */
export default function CertificationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Técnico em Fibra Óptica (FTTH)',
      issuer: 'Experiência Prática - Linko & Ok Virtual',
      date: '2020 - 2024',
      description: 'Especialização em instalação, configuração e diagnóstico de infraestrutura de fibra óptica. Experiência com redes TCP/IP, switches, roteadores e garantia de SLA.',
      skills: ['FTTH', 'TCP/IP', 'Fibra Óptica', 'Redes de Dados', 'Diagnóstico de Falhas', 'SLA'],
      badge: '🌐',
      icon: 'network'
    },
    {
      id: 2,
      title: 'Técnico em Hardware & Montagem',
      issuer: 'Experiência Prática - Múltiplas Empresas',
      date: '2020 - 2024',
      description: 'Montagem, diagnóstico e manutenção de computadores e notebooks. Troubleshooting de hardware, upgrades de componentes e otimização de performance.',
      skills: ['Montagem de PCs', 'Diagnóstico', 'Manutenção', 'Upgrades', 'Troubleshooting', 'Performance'],
      badge: '💻',
      icon: 'hardware'
    },
    {
      id: 3,
      title: 'Eletricista Residencial',
      issuer: 'Certificação Prática',
      date: '2020 - 2024',
      description: 'Instalações elétricas residenciais, segurança em trabalhos com eletricidade, normas técnicas e boas práticas de segurança.',
      skills: ['Instalações Elétricas', 'Segurança', 'Normas Técnicas', 'Manutenção', 'Diagnóstico'],
      badge: '⚡',
      icon: 'electrical'
    },
    {
      id: 4,
      title: 'Engenharia de Software (Em Andamento)',
      issuer: 'Universidade de Vassouras',
      date: '2024 - 2028',
      description: 'Graduação em Engenharia de Software com foco em desenvolvimento de aplicações, arquitetura de sistemas, e boas práticas de engenharia.',
      skills: ['Python', 'JavaScript', 'C#', 'Arquitetura', 'Padrões de Design', 'Metodologias Ágeis'],
      badge: '🎓',
      icon: 'education'
    },

  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300 cursor-pointer h-full flex flex-col"
          >
            {/* Sobreposição de gradiente no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Cabeçalho */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.badge}</div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              {/* Emissor */}
              <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>

              {/* Data */}
              <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>

              {/* Descrição */}
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {cert.description}
              </p>

              {/* Tags de Habilidades */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Indicador de verificação */}
              <div className="mt-4 pt-4 border-t border-border/20">
                <div className="flex items-center gap-2 text-xs text-secondary font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  Certificado
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé de Estatísticas */}
      <div className="grid grid-cols-3 gap-4 pt-8">
        <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <div className="text-3xl font-bold text-primary mb-1">4</div>
          <div className="text-xs text-muted-foreground">Certificações</div>
        </div>
        <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <div className="text-3xl font-bold text-secondary mb-1">20+</div>
          <div className="text-xs text-muted-foreground">Habilidades</div>
        </div>
        <div className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 transition-colors text-center">
          <div className="text-3xl font-bold text-primary mb-1">✓</div>
          <div className="text-xs text-muted-foreground">Verificadas</div>
        </div>
      </div>
    </div>
  );
}
