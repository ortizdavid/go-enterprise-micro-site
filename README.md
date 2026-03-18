# 🚀 Go Enterprise Micro - Landing Page

Este repositório contém o código-fonte da página oficial do **Go Enterprise Micro**, um template industrial para microserviços em Go (Golang) focado em alta performance, arquitetura limpa (Clean Architecture) e padrões sênior de engenharia.

[🌐 Aceder ao Site Oficial](https://ortizdavid.github.io/go-enterprise-micro-site/)

---

## 🛠️ Sobre o Projeto

O **Go Enterprise Micro** não é apenas um "boilerplate". É um chassis de engenharia desenhado para eliminar 80% do trabalho repetitivo na criação de sistemas distribuídos, garantindo que o seu projeto nasce com padrões de auditoria, resiliência e escalabilidade.

### Key Technical Specs (Template Original):
* **Language:** Go 1.22+
* **Architecture:** CQRS (Command Query Responsibility Segregation)
* **Database:** PostgreSQL com migrações declarativas (Atlas HCL)
* **Messaging:** Transactional Outbox Pattern com RabbitMQ
* **Observability:** Zap Logger & Jaeger Tracing
* **Automation:** Makefile Industrial para Setup, Seed e Migrations

---

## 🏗️ Estrutura deste Repositório (Landing Page)

Esta landing page foi construída com foco em simplicidade e performance:
- **Tailwind CSS:** Estilização via CDN para deploy rápido.
- **Vanilla JS:** Animações de terminal e scroll suave.
- **GitHub Pages:** Alojamento automático e seguro.

```bash
.
├── assets
│   ├── css   # Estilos customizados e animações
│   ├── js    # Lógica de dinamismo e UI
│   └── img   # Screenshots e assets visuais
├── index.html # Estrutura principal
└── README.md