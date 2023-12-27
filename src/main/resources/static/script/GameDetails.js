window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let gameId = params.get('id');

    fetch(`http://localhost:8080/games/${gameId}`)
        .then(response => response.json())
        .then(data => {
            // Insere os detalhes do jogo na página
            document.getElementById('gameTitle').textContent = `Título ${data.title}`;
            document.getElementById('imagem').src = data.imgUrl;
            document.getElementById('year').textContent = `Ano: ${data.year}`;
            document.getElementById('genre').textContent = `Gênero: ${data.genre}`;
            document.getElementById('platforms').textContent = `Plataformas: ${data.platforms}`;
            document.getElementById('score').textContent = `Score: ${data.score}`;
            document.getElementById('gameDescription').textContent = `Descrição: ${data.longDescription}`;
            // Você pode adicionar mais campos conforme necessário
        })
        .catch(error => console.error('Erro:', error)); 
}
