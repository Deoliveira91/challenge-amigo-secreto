let nomes = [];

let lista = document.getElementById('listaAmigos');
let nomesInseridos = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let amigos = nomesInseridos.value.trim();
    if (amigos == '') {
        alert('Digite o nome de algum amigo');
        return;
    }
    if (nomes.includes(amigos)) {
        alert('Este amigo ja foi adicionado');
        nomesInseridos.value = '';
        return;
    }  

    nomes.push(amigos);
    atualizarLista();
    nomesInseridos.value = '';
}

function atualizarLista() { 
    lista.innerHTML = '';

    nomes.forEach(amigo => {
     let itemLista = document.createElement('li');
     itemLista.textContent = amigo; 
     lista.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (nomes.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * nomes.length);
    resultado.innerHTML = `o amigo sorteado é: ${nomes[nomeSorteado]}`;

}