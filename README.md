# SecureUpload Panel

Sistema web com autenticação simples, upload de arquivos e backend em Node.js utilizando Express.

---

# 📌 Sobre o Projeto

O projeto foi desenvolvido como um sistema backend simples para estudo de:

* Node.js
* Express
* Upload de arquivos
* Rotas HTTP
* Autenticação básica
* Middleware
* Estrutura backend
* Integração frontend + backend

O sistema possui:

✅ Tela de login
✅ Upload de arquivos
✅ Backend com Express
✅ Organização em rotas e middleware
✅ Interface web simples
✅ Estrutura pronta para expansão

---

# ⚠️ Aviso Importante

Este projeto foi criado para fins educacionais.

A autenticação atual utiliza usuário e senha fixos diretamente no código:

```js
if (username === 'admin' && password === '1234')
```

Isso NÃO é seguro para produção.

Em aplicações reais o ideal seria:

* Banco de dados
* Hash de senha
* JWT
* Sessões
* Criptografia
* Controle de permissões
* Rate limiting
* Proteção CSRF

---

# 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* Multer
* HTML5
* CSS3
* JavaScript

---

# 📂 Estrutura do Projeto

```bash
mayckon/
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   └── script.js
│
├── uploads/
│
├── server.js
├── upload.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Como Executar

## 1. Instalar Node.js

Baixe e instale:

[https://nodejs.org/](https://nodejs.org/)

Verifique se foi instalado:

```bash
node -v
npm -v
```

---

## 2. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

---

## 3. Entrar na pasta

```bash
cd mayckon
```

---

## 4. Instalar dependências

```bash
npm install
```

---

## 5. Executar o servidor

```bash
npm start
```

ou:

```bash
node server.js
```

---

# 🌐 Acessar o Sistema

Abra no navegador:

```bash
http://localhost:3000
```

---

# 🔐 Login do Sistema

Usuário:

```bash
admin
```

Senha:

```bash
1234
```

---

# 📤 Funcionalidades

## Sistema de Login

* Validação simples de usuário
* Redirecionamento de páginas
* Controle básico de acesso

---

## Upload de Arquivos

* Upload utilizando Multer
* Armazenamento local
* Middleware de upload
* Suporte para expansão futura

---

# 📚 Objetivos de Aprendizado

Esse projeto ajuda a praticar:

* Estruturação backend
* Criação de APIs simples
* Middleware no Express
* Upload de arquivos
* Manipulação de rotas
* Servidor HTTP
* Integração frontend/backend
* Organização de projeto Node.js

---

# 🔥 Melhorias Futuras

## Backend

* Banco de dados
* JWT Authentication
* Criptografia de senha
* Middleware de autenticação
* Upload em nuvem
* Logs
* Validação avançada
* Rate limiting

---

## Frontend

* Dashboard moderno
* Responsividade
* Dark mode
* Feedback visual
* Sistema de notificações

---

# 🧠 Problemas Corrigidos

Durante o desenvolvimento foi corrigido um erro crítico no arquivo `upload.js`:

❌ Código incorreto:

```js
"const multer" = require('multer');
```

✅ Código correto:

```js
const multer = require('multer');
```

O erro acontecia porque o JavaScript interpretava:

```js
"const multer"
```

como string, tornando inválida a atribuição.

---

# 📄 Licença

Projeto desenvolvido para fins educacionais.

Uso livre para estudos e aprendizado.

---

# 👨‍💻 Autor

Desenvolvido por Mayckon.

