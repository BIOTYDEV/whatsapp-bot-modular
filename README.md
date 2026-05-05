# ⚙️ Base Modular para Bots de WhatsApp (Enterprise)

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=43853D" alt="Node.js" />
  <img src="https://img.shields.io/badge/whatsapp--web.js-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WA Web JS" />
  <img src="https://img.shields.io/badge/Deploy-VPS%20Ready-007ACC?style=for-the-badge" alt="VPS" />
</p>

## 📌 Visão Geral
Template base e escalável desenvolvido em **Node.js** utilizando a biblioteca `whatsapp-web.js`. Este projeto foi estruturado para ser a fundação de automações de atendimento corporativo, focando em manutenibilidade, segurança e facilidade de deploy.

## 🧱 Por que uma arquitetura Modular?
Bots construídos em um único arquivo (`index.js`) rapidamente se tornam impossíveis de manter. Esta arquitetura divide responsabilidades:
* **Controllers:** Lógica de negócio e respostas.
* **Services:** Integrações externas (APIs, Banco de Dados).
* **Utils:** Funções auxiliares (formatação de texto, validadores).

## 🔒 Segurança e Infraestrutura
Este repositório adota as melhores práticas de mercado para código em produção:
* **Variáveis de Ambiente (`.env`):** Nenhuma credencial ou API Key é exposta no código-fonte.
* **Gerenciamento de Sessão:** A sessão do WhatsApp é salva e restaurada automaticamente, evitando a necessidade de ler o QR Code a cada reinicialização.
* **Preparado para VPS:** Estrutura otimizada para rodar em *background* utilizando gerenciadores de processos como o **PM2** em servidores Linux.

## 🛠️ Instalação Básica
```bash
# Clone o repositório
git clone [https://github.com/BIOTYDEV/whatsapp-bot-modular.git](https://github.com/BIOTYDEV/whatsapp-bot-modular.git)

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie a aplicação
npm run start
