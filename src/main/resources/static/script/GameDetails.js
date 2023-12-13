let params = new URLSearchParams(window.location.search);
let gameId = params.get('id');
print(gameId  );
fetch(`http://localhost:8080/games/${gameId}`)
    .then(response => response.json())
    .then(data => {
        // Insere os detalhes do jogo na página
        document.getElementById('gameTitle').textContent = data.title;
        document.getElementById('gameDescription').textContent = data.shortDescription;
        // Você pode adicionar mais campos conforme necessário
    })
    .catch(error => console.error('Erro:', error));