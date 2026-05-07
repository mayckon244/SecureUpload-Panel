// Validação do login (cliente)
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');

  if (loginForm && window.location.pathname === '/') {
    loginForm.addEventListener('submit', (e) => {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault();
      }
    });
  }

  // Carregar vídeos na página do YouTube
  if (window.location.pathname === '/youtube.html') {
    fetch('/videos')
      .then(res => res.json())
      .then(videos => {
        const videoList = document.getElementById('videolist');
        if (videos.length === 0) {
          videoList.innerHTML = '<p>Nenhum vídeo enviado ainda.</p>';
        } else {
          videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
              <video controls>
                <source src="/uploads/${video.filename}" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <div class="info">
                <h3>${video.filename}</h3>
                <p class="views">Visualizações: 10 mil</p>
              </div>
            `;
            videoList.appendChild(card);
          });
        }
      });
  }
});
