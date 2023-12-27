window.onload = function(){
    fetch('http://localhost:8080/games')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('minhaLista');
            data.forEach(item => {
                const li = document.createElement("li");
                const div = document.createElement("div");
                    const img = document.createElement("img");
                    img.src = item.imgUrl;
                    img.style.width = "100px";
                    
                    div.appendChild(img);
                    const a = document.createElement("a");
                    a.textContent = item.title;
                    a.href = `/pages/GameDetails.html?id=${item.id}`;
                    a.style.textDecoration = 'none';
                    a.style.color = 'black';
                    div.style.display = 'flex';
                    div.style.alignItems = 'center';
                    div.style.justifyContent = 'space-between';
                    div.style.margin = '10px';
                    div.appendChild(a);
                li.appendChild(div);
                lista.appendChild(li);
            });
            lista.style.listStyleType = 'none';
        })
        .catch(error => console.error('Erro:', error));
}