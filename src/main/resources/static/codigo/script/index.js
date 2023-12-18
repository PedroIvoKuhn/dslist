window.onload = function(){
    fetch('http://localhost:8080/games')
            .then(response => response.json())
            .then(data => {
                var lista = document.getElementById('minhaLista');
                data.forEach(item => {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.textContent = item.title
                    a.href = `/pages/GameDetails.html?id=${item.id}`
                    document.li.appendChild(a);
                    li.classList.add("elemento")
                    document.lista.appendChild(li);
                    lista.style.listStyleType = 'none';
                });
            })
            .catch(error => console.error('Erro:', error));
}