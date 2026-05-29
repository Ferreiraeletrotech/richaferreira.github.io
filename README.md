# Portfólio Pessoal - Richardson Ferreira

Este é o portfólio pessoal de Richardson Ferreira, um desenvolvedor em transição de carreira com experiência em infraestrutura, redes FTTH e hardware, atualmente cursando Engenharia de Software. Este projeto serve como uma vitrine para seus projetos, habilidades e experiência profissional.

## Tecnologias Utilizadas

O projeto é construído com as seguintes tecnologias:

-   **Frontend:** React 19, Vite, TypeScript, TailwindCSS
-   **Roteamento:** Wouter
-   **Componentes UI:** shadcn/ui
-   **Ícones:** Lucide React
-   **Animações:** Framer Motion

## Funcionalidades

O portfólio apresenta as seguintes seções:

-   **Sobre Mim:** Uma introdução detalhada sobre Richardson Ferreira, sua trajetória e objetivos.
-   **Projetos:** Destaque para projetos desenvolvidos, incluindo InfraPlus, OndeTem?, e Sistema IoT de Monitoramento.
-   **Habilidades:** Lista de habilidades técnicas e soft skills.
-   **Experiência Profissional:** Detalhes sobre a experiência em diversas áreas, como Técnico de Redes, Hardware e Eletricista Residencial.
-   **Certificações:** Seção dedicada às certificações obtidas.
-   **Contato:** Informações para contato e links para perfis profissionais.

## Como Rodar Localmente

Para configurar e rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o pnpm instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/richaferreira/richaferreira.github.io.git
    cd richaferreira.github.io
    ```

2.  Instale as dependências:
    ```bash
    pnpm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
richaferreira.github.io/
├── client/                 # Código-fonte do frontend (React, Vite)
│   ├── public/             # Arquivos estáticos (favicon, robots.txt, imagens)
│   ├── src/                # Componentes, páginas, contextos, hooks, etc.
│   │   ├── components/     # Componentes reutilizáveis da UI
│   │   ├── contexts/       # Contextos React
│   │   ├── hooks/          # Hooks personalizados
│   │   ├── lib/            # Funções utilitárias
│   │   ├── pages/          # Páginas principais do portfólio
│   │   ├── App.tsx         # Configuração de rotas
│   │   └── main.tsx        # Ponto de entrada do React
│   └── index.html          # Arquivo HTML principal
├── server/                 # Placeholder para compatibilidade com templates (sem funcionalidade de API)
├── shared/                 # Placeholder para compatibilidade com templates (constantes compartilhadas)
├── patches/                # Patches de dependências
├── package.json            # Metadados e scripts do projeto
├── pnpm-lock.yaml          # Bloqueio de dependências do pnpm
└── README.md               # Este arquivo
```

## Contato

Para entrar em contato com Richardson Ferreira, visite o portfólio e utilize a seção de contato ou os links para suas redes sociais e GitHub.
