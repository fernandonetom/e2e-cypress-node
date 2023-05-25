# Teste E2E com Cypress

![Cypress](https://www.cypress.io/images/layouts/navbar-brand.svg)

Este projeto é um exemplo de teste end-to-end (E2E) utilizando o framework de teste Cypress. O Cypress é uma ferramenta moderna e poderosa para realizar testes automatizados em aplicações web.

## Tabela de Conteúdo
- [Dependências](#dependências)
- [Como Iniciar o Projeto](#como-iniciar-o-projeto)
- [Exemplos de Testes](#exemplos-de-testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Dependências
- Node.js v18 ![Node.js Version](https://img.shields.io/badge/Node.js-v18-brightgreen)
- Cypress
- TypeScript

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

## Como Iniciar o Projeto
1. Clone o repositório para o seu ambiente local.

```bash
git clone https://github.com/fernandonetom/e2e-cypress-node
```

2. Acesse o diretório do projeto.
```bash
cd e2e-cypress-node
```

3. Instale as dependências do projeto.
```bash
npm install
```

4. Execute os testes E2E com o Cypress.
npm run cy:run

Isso irá iniciar a execução dos testes automatizados utilizando o Cypress. Os testes são escritos em TypeScript e podem ser encontrados no diretório `./src`. A nomeclatura dos arquivos devem ser `nome-teste.e2e.ts`. Os vídeos e screeshots estarão na pasta `./cypress` após a execução dos testes.

## Exemplos de Testes
O projeto já possui alguns exemplos básicos de testes E2E escritos com Cypress. Eles estão localizados no diretório `src`. 

## Contribuição
Contribuições são bem-vindas! Se você quiser contribuir com melhorias, correções de bugs ou novos recursos para este projeto, sinta-se à vontade para enviar um pull request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).