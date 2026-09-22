# QA Portfolio — Playwright + TypeScript

Portfólio de automação de testes Web desenvolvido por Lucas Nakano Ernani.

O projeto reúne cenários em aplicações públicas de treinamento, com foco em preenchimento de formulários, integração com API para obtenção de dados fictícios e validação de resultados.

## Tecnologias

- Playwright
- TypeScript
- Node.js e npm
- Git e GitHub

## Cenários implementados

### Practice Software Testing
- Pesquisa de produto pelo nome.
- Verificação da presença do produto pesquisado.

### Walkdog
- Obtenção de dados fictícios por API.
- Preenchimento do formulário de cadastro.
- Upload de documento de teste.
- Envio do cadastro.

### DemoQA
- Obtenção de dados fictícios por API.
- Preenchimento do formulário de cadastro com os dados retornados.
- Upload de documento de teste.
- Envio do cadastro.

## Organização

- `tests/`: cenários de teste e validações.
- `pages/`: seletores e ações das páginas.
- `utils/api/`: integração com APIs para obtenção de dados.
- `utils/documents/`: arquivos fictícios utilizados nos testes de upload.

## Como executar

Pré-requisitos: Node.js 24 LTS e npm.

Após clonar o repositório, execute os comandos na raiz do projeto.

Instalar as dependências:

```bash
npm ci
```

Instalar os navegadores:

```bash
npx playwright install
```

Executar os testes no Chromium:

```bash
npx playwright test --project=chromium
```

Executar com o navegador visível:

```bash
npx playwright test --project=chromium --headed
```

Abrir o modo interativo:

```bash
npx playwright test --ui
```

## Ambientes utilizados

- [Practice Software Testing](https://practicesoftwaretesting.com/)
- [Walkdog](https://walkdog.vercel.app/signup)
- [DemoQA](https://demoqa.com/automation-practice-form)

As aplicações pertencem a terceiros e são utilizadas como ambientes de prática. Mudanças ou indisponibilidade desses serviços e da API de dados podem afetar as execuções.

O documento de upload é fictício e está incluído no repositório para permitir a reprodução dos testes.

## Próximas melhorias

- Revisar e fortalecer as validações de sucesso dos formulários.
- Adicionar cenários negativos e validações de campos obrigatórios.
- Documentar a estratégia de testes e os riscos cobertos.
- Validar a execução dos testes no GitHub Actions.

## Autor

Lucas Nakano Ernani  
QA Analyst | QA Automation
