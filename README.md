# 🚀 Portfólio Pessoal - Richardson Ferreira

Este é o repositório do meu portfólio profissional, desenvolvido com **React 19** e **Tailwind CSS 4**. O site é focado em apresentar minha trajetória em Engenharia de Software e minha sólida base em infraestrutura de redes e hardware.

## 🌐 Site Online
O site é publicado automaticamente e pode ser acessado em:
**[richaferreira.github.io](https://richaferreira.github.io)**

---

## 🛠️ Tecnologias e Ferramentas

-   **Core:** React 19 + TypeScript + Vite
-   **Estilização:** Tailwind CSS 4 + shadcn/ui
-   **Animações:** Framer Motion
-   **Ícones:** Lucide React
-   **Deploy:** GitHub Actions (CI/CD)

---

## 🚀 Fluxo de Deploy (GitHub Pages)

Este repositório utiliza **GitHub Actions** para automatizar o processo de publicação. Você não precisa fazer o build manualmente.

1.  **Push para a Main:** Sempre que um novo código é enviado para a branch `main`, um "Workflow" é disparado.
2.  **Build Automatizado:** O GitHub Actions instala as dependências (via `pnpm`), compila o código TypeScript e gera os arquivos estáticos.
3.  **Publicação:** Os arquivos gerados na pasta `dist/public` são enviados diretamente para os servidores do GitHub Pages.

> **Nota:** Para acompanhar o status do deploy, acesse a aba **Actions** no topo deste repositório.

---

## 💻 Desenvolvimento Local

Se desejar rodar o projeto em sua máquina:

### 1. Requisitos
- Node.js (v20 ou superior)
- pnpm

### 2. Instalação
```bash
git clone https://github.com/richaferreira/richaferreira.github.io.git
cd richaferreira.github.io
pnpm install
```

### 3. Execução
```bash
pnpm dev
```
O site estará disponível em `http://localhost:3000`.

---

## 📂 Estrutura de Pastas

-   `client/`: Todo o código-fonte do frontend (Páginas, Componentes, Estilos).
-   `.github/workflows/`: Script de automação do deploy.
-   `patches/`: Correções necessárias para dependências específicas.
-   `dist/`: (Gerada no build) Pasta que contém o site final que vai para o ar.

---

## ✉️ Contato

-   **LinkedIn:** [Richardson Ferreira](https://www.linkedin.com/in/richardson-ferreira-832a51235/)
-   **GitHub:** [@richaferreira](https://github.com/richaferreira)
