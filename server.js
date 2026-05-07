const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const upload = require('./upload');

const app = express();
const port = 3000;

// Para debugar se o arquivo está rodando
console.log('server.js iniciado');

// Middleware para receber dados do formulário
app.use(express.urlencoded({ extended: true }));

// Configura sessão para controle de login
app.use(session({
  secret: 'umsegredoforteaquie',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 } // 10 minutos
}));

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para proteger rotas
function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

// Rota de login (formulário)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Processar login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validação simples (troque por DB se quiser)
  if (username === 'admin' && password === '1234') {
    req.session.user = username;
    res.redirect('/youtube.html');
  } else {
    res.send('Usuário ou senha inválidos. <a href="/">Tente novamente</a>');
  }
});

// Página protegida (upload + lista de vídeos)
app.get('/youtube.html', checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'youtube.html'));
});

// Upload do vídeo (rota protegida)
app.post('/upload', checkAuth, upload.single('video'), (req, res) => {
  res.redirect('/youtube.html');
});

// Listar vídeos enviados (rota protegida)
app.get('/videos', checkAuth, (req, res) => {
  const uploadDir = path.join(__dirname, 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao listar vídeos' });
    }
    // Retorna só os nomes dos arquivos
    const videoFiles = files.map(filename => ({ filename }));
    res.json(videoFiles);
  });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
