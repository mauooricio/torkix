#  Torkix

Sistema de gerenciamento e monitoramento veicular.  
API desenvolvida em Node.js com autenticação JWT, banco de dados PostgreSQL e Prisma ORM.

---

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-000000?style=for-the-badge&logo=railway&logoColor=white)

---

##  Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Railway](https://railway.app/) – hospedagem do banco
- [Postman](https://www.postman.com/) – testes da API

---

##  Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/mauooricio/torkix.git
cd torkix

# 2. Instale as dependências
npm install

# 3. Configure o .env
cp .env.example .env
# ou crie manualmente o arquivo .env com sua DATABASE_URL e JWT_SECRET

# 4. Rode as migrações (criação das tabelas)
npx prisma migrate dev

# 5. Inicie o servidor
node index.js

DATABASE_URL="postgresql://usuario:senha@host:porta/banco"
JWT_SECRET="chave_jwt_super_segura"

torkix/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── config/
├── prisma/
│   └── schema.prisma
├── .env
├── index.js
└── README.md

 Rotas da API
 Auth
POST /auth/registro → cadastro de novo usuário

POST /auth/login → login e retorno do token JWT

 Veículos (protegidas)
Necessário enviar o token no header Authorization: Bearer {token}

POST /api/veiculos → cadastrar veículo

GET /api/veiculos → listar veículos do usuário autenticado


## 👨‍💻 Autor

Desenvolvido por [Mauricio Rodrigues](https://github.com/mauooricio)  
 mauriciorodrigues.dev@gmail.com  
 [LinkedIn](https://www.linkedin.com/in/mauricio-rodrigues-dev/)
