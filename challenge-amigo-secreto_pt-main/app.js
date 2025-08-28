//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []; // Criada a tabela amigos

function adicionarAmigo() {
    let input = document.querySelector('#amigo'); // Seleciona o amigo digitado pelo ID do HTML
    let amigo = input.value.trim(); // Captura o aluno digitado e armazena na variavel amigo
                                    // Usando trim() para remover espaços em branco no início e fim
    if (amigo === "") {
        alert('Preencha com o nome de um amigo!');
        return;
    }
    amigos.push(amigo); // Adiciona o nome capturado na tabela amigos
    limparCampo(); // Chama a função para limpar o campo de entrada (input)
    exibirAmigosNaLista(); // Chama a função para exibir a lista atualizada
}

function limparCampo() {
    document.querySelector('#amigo').value = ''; // Limpa campo de entrada (amigo) com brancos
}

function exibirAmigosNaLista() {    // Recebe o array de amigos como parâmetro

    const lista = document.getElementById("listaAmigos"); // Obtém o elemento <ul> com o id "listaAmigos" 
                                                          // usando document.getElementById()
    lista.innerHTML = ""; // remove todos os elementos filhos da lista, 
                          // garantindo que a lista esteja vazia antes de adicionar novos nomes.

    //  Loop for: Percorre o array de amigos.
    //  Para cada amigo:
    //  Cria um novo elemento <li> usando document.createElement("li").
    //  Define o texto do elemento <li> com o nome do amigo usando itemLista.textContent = amigo;.
    //  Adiciona o elemento <li> à lista <ul> usando lista.appendChild(itemLista);.
    //  exibirAmigosNaLista(amigos); chama a função para exibir os amigos na lista quando a página é carregada.
                      
    for (let i = 0; i < amigos.length; i++) {   
        const amigo = amigos[i];
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
  
    const elementoResultado = document.getElementById("resultado"); // Seleciona o elemento onde o resultado 
                                                                    // será exibido
    if (amigos.length === 0) {  // Verifica se lista de amigos esta vazia
        elementoResultado.innerHTML = 'Lista de amigos vazia!';
        return;
    }

    if (amigos.length === 1) { // Verifica se lista de amigos contem apenas 1 amigo
        elementoResultado.innerHTML = `Não é possível sortear com apenas um amigo: **${amigos[0]}**`;
        return;
    }

    // Gere o índice aleatório usando o array 'amigos'
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio]; // Acessa o amigo sorteado usando o índice gerado

    // Atualiza o conteúdo do elemento de resultado na tela
  
    elementoResultado.innerHTML = `O amigo sorteado é: **${amigoSorteado}**`;

    amigos.splice(indiceAleatorio, 1); // REMOVE o amigo sorteado da lista de amigos

    // document.querySelector('#sortearAmigo').value = ''; // Limpa o campo de exibição após o sorteio
  }
  
// Chame a função de exibição na inicialização para garantir que a lista seja renderizada
// quando a página carregar (se houver amigos pré-definidos).
exibirAmigosNaLista();