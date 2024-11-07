# In.Orbit - Back-End

## 📝Descrição
Este projeto é uma API criada durante o evento NLW da [Rocketseat](https://github.com/rocketseat) e tem como objetivo:
- Criar metas;
- Mostrar metas pendentes;
- Mostrar metas concluídas;

## 🛠️Ferramentas Utilizadas
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Fastify](https://www.fastify.io/)
- [Drizzle-ORM](https://github.com/drizzle-team/drizzle-orm)
- [Drizzle-kit](https://www.npmjs.com/package/drizzle-kit)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Typescript](https://www.typescriptlang.org/)
- [Postgres](https://github.com/porsager/postgres)
- [Zod](https://zod.dev/)

## Instalação
Clone o repositório
```bash
git clone https://github.com/pauloelf/nlw-in-orbit-backend.git
```

Depois entre no diretório e instale as dependências
```bash
cd nlw-in-orbit-backend
&&
npm install
```

## ⚙️Configuração do banco de dados
Com o docker rodando na sua máquina, execute os seguintes comandos:
```bash
docker-compose up -d
&&
docker ps
```

Crie as migrações utilizando o Drizzle-kit e envie para o banco de dados:
```bash
npx drizzle-kit generate
&&
npx drizzle-kit migrate
```

Insira algumas metas iniciais ao banco de dados:
```bash
npm run seed
```

## Inicie o Servidor
```bash
npm run dev
```
Agora acesse o http://localhost:3333

## Front-End

Acesse o Front-end [aqui](https://github.com/pauloelf/nlw-in-orbit-frontend)
