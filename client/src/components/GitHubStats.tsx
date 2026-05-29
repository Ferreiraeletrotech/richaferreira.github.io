import { useGitHubStats } from '@/hooks/useGitHubStats';
import { Github, Star, GitFork, Code2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface GitHubStatsProps {
  username: string;
}

/**
 * Componente que exibe estatísticas do GitHub em tempo real
 * Mostra: perfil, repositórios populares, linguagens mais usadas
 * Design: Glassmorphism com cards elegantes
 */
export default function GitHubStats({ username }: GitHubStatsProps) {
  const stats = useGitHubStats(username);

  if (stats.error) {
    return (
      <div className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm">
        <div className="text-center text-muted-foreground">
          <Github className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>Erro ao carregar dados do GitHub</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300">
        <div className="flex items-start gap-4">
          <img
            src={stats.avatar}
            alt={stats.name}
            className="w-20 h-20 rounded-full border-2 border-primary/50"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {stats.loading ? <Skeleton className="h-8 w-32" /> : stats.name}
            </h3>
            {stats.bio && (
              <p className="text-muted-foreground mb-4">{stats.bio}</p>
            )}
            <div className="flex gap-6 text-sm">
              <div>
                <span className="font-bold text-primary">{stats.followers}</span>
                <span className="text-muted-foreground ml-1">Seguidores</span>
              </div>
              <div>
                <span className="font-bold text-primary">{stats.following}</span>
                <span className="text-muted-foreground ml-1">Seguindo</span>
              </div>
              <div>
                <span className="font-bold text-primary">{stats.publicRepos}</span>
                <span className="text-muted-foreground ml-1">Repositórios</span>
              </div>
            </div>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors font-semibold text-sm"
          >
            Ver Perfil
          </a>
        </div>
      </div>

      {/* Languages */}
      {Object.keys(stats.languages).length > 0 && (
        <div className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300">
          <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Linguagens Mais Usadas
          </h4>
          <div className="space-y-3">
            {Object.entries(stats.languages)
              .sort(([, a], [, b]) => b - a)
              .map(([lang, count]) => {
                const total = Object.values(stats.languages).reduce((a, b) => a + b, 0);
                const percentage = (count / total) * 100;
                return (
                  <div key={lang}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground">{lang}</span>
                      <span className="text-xs text-muted-foreground">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Achievements */}
      <div className="p-6 rounded-xl bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300">
        <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Achievements & Realizações
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Achievement 1 - 500+ FTTH */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524241517/L2tXxi92q52g7SEHfj8y9z/achievement-ftth-500-4n7GnoaD9rEQ9k45SUuTfy.webp" 
                alt="500+ FTTH Installations Achievement"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h5 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">500+ FTTH</h5>
            <p className="text-xs text-muted-foreground mt-1">Instalações</p>
          </div>

          {/* Achievement 2 - Hardware Expert */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524241517/L2tXxi92q52g7SEHfj8y9z/achievement-hardware-FSubLZRNFQiY59BxaXA8gq.webp" 
                alt="Hardware Expert Achievement"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h5 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Hardware</h5>
            <p className="text-xs text-muted-foreground mt-1">Especialista</p>
          </div>

          {/* Achievement 3 - Full Stack Developer */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524241517/L2tXxi92q52g7SEHfj8y9z/achievement-fullstack-X9fLoUaagEvM2jHB8FkbdS.webp" 
                alt="Full Stack Developer Achievement"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h5 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">Full Stack</h5>
            <p className="text-xs text-muted-foreground mt-1">Developer</p>
          </div>

          {/* Achievement 4 - 99.5% SLA Uptime */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524241517/L2tXxi92q52g7SEHfj8y9z/achievement-uptime-ca2H32MBA4sMzteh3s2Bga.webp" 
                alt="99.5% SLA Uptime Achievement"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h5 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">99.5% SLA</h5>
            <p className="text-xs text-muted-foreground mt-1">Uptime</p>
          </div>
        </div>
      </div>

      {/* Top Repositories */}
      {stats.repositories.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Github className="w-5 h-5 text-primary" />
            Repositórios em Destaque
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {stats.repositories
              .filter((repo) => [
                'richaferreira.github.io',
                'richaferreira',
                'Projeto_IoT',
                'prompt-generator-instagram',
                'ondetem'
              ].includes(repo.name))
              .map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-card/40 border border-border/20 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h5>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-primary whitespace-nowrap ml-2">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">
                    {repo.language}
                  </span>
                  {repo.forks > 0 && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Loading State */}
      {stats.loading && (
        <div className="space-y-4">
          <Skeleton className="h-24 rounded-lg" />
          <Skeleton className="h-32 rounded-lg" />
        </div>
      )}
    </div>
  );
}
