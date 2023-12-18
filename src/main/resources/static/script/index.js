/*
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
*/
window.onload = function(){
    fetch('http://localhost:8080/games')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('minhaLista');
            data.forEach(item => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = item.title;
                a.href = `/pages/GameDetails.html?id=${item.id}`;
                a.style.textDecoration = 'none';
                li.appendChild(a); //'li', não 'document.li'
                li.classList.add("elemento");
                lista.appendChild(li); //'lista', não 'document.lista'
            });
            lista.style.listStyleType = 'none'; // Movido para fora do loop
        })
        .catch(error => console.error('Erro:', error));
}