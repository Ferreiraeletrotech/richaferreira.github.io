import { useState, useEffect } from 'react';

interface Repository {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  forks: number;
}

interface GitHubStats {
  username: string;
  name: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  publicRepos: number;
  repositories: Repository[];
  languages: { [key: string]: number };
  loading: boolean;
  error: string | null;
}

/**
 * Hook para buscar estatísticas do GitHub em tempo real
 * Utiliza a GitHub REST API v3 (sem autenticação para dados públicos)
 */
export const useGitHubStats = (username: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    username,
    name: '',
    bio: '',
    avatar: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    repositories: [],
    languages: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Buscar dados do usuário
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Erro ao buscar dados do usuário');
        const userData = await userResponse.json();

        // Buscar repositórios públicos
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=10&type=public`
        );
        if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
        const reposData = await reposResponse.json();

        // Processar repositórios e contar linguagens
        const languages: { [key: string]: number } = {};
        const repositories: Repository[] = [];

        for (const repo of reposData) {
          repositories.push({
            name: repo.name,
            description: repo.description || 'Sem descrição',
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || 'Sem linguagem',
            forks: repo.forks_count,
          });

          // Contar linguagens
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        }

        setStats({
          username,
          name: userData.name || userData.login,
          bio: userData.bio || '',
          avatar: userData.avatar_url,
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          repositories,
          languages,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Erro desconhecido',
        }));
      }
    };

    fetchGitHubData();
  }, [username]);

  return stats;
};
