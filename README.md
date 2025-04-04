#  Torkix

Sistema de gerenciamento e monitoramento veicular.  
Frontend em **React + Vite**, backend em **Node.js/Express**, banco de dados **PostgreSQL (Railway)** e ORM com **Prisma**.

---

##  Tecnologias Utilizadas

###  Backend:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Railway](https://railway.app/) – Banco de dados hospedado

###  Frontend:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

---

##  Funcionalidades

- Registro de usuário com criptografia de senha (bcrypt)
- Login com geração de token JWT
- Proteção de rotas via token
- Cadastro de veículos (modelo e placa)
- Listagem dos veículos cadastrados pelo usuário
- Exclusão e edição de veículos
- Logout com limpeza de sessão
- Integração total entre frontend e backend

---

##  Como rodar o projeto localmente

###  Backend

```bash
# 1. Vá até a pasta backend
cd backend

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env
touch .env
```

**Exemplo de conteúdo para o `.env`:**
```
DATABASE_URL=postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DB
JWT_SECRET=sua_chave_jwt_segura
```

```bash
# 4. Rode as migrações do Prisma
npx prisma db push

# 5. Inicie o servidor
node index.js
```

---

###  Frontend

```bash
# 1. Vá até a pasta frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm run dev
```

Acesse o app em: [http://localhost:5173](http://localhost:5173)

---

##  Desenvolvedor

Mauricio Rodrigues  
    mauriciorodrigues.dev@gmail.com  
    [https://www.linkedin.com/in/mauricio-rodrigues-dev](https://www.linkedin.com/in/mauricio-rodrigues-dev)
