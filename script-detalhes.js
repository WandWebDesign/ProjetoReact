// 1. PEGAR O ID NA URL (ex: ?id=sauvage)
const params = new URLSearchParams(window.location.search);
const produtoId = params.get('id');

// Se não tiver ID na URL, manda o usuário de volta para o início
if (!produtoId) {
    window.location.href = "index.html";
}

// 2. CONFIGURAÇÃO DO BANCO (Mesmo nome do script anterior)
const dbName = "SmellCareDB";
const dbVersion = 2;
let db;

const request = indexedDB.open(dbName, dbVersion);

request.onerror = (event) => {
    console.error("Erro ao abrir o banco de dados.");
};

request.onsuccess = (event) => {
    db = event.target.result;
    carregarDetalhesDoProduto(produtoId);
};

// 3. FUNÇÃO PARA BUSCAR E EXIBIR O PRODUTO
function carregarDetalhesDoProduto(id) {
    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.get(id);

    request.onsuccess = (event) => {
        const produto = event.target.result;

        if (produto) {
            // Preencher os elementos HTML com os dados do banco
            document.getElementById("produto-imagem").src = produto.imagem;
            document.getElementById("produto-imagem").alt = `Foto do perfume ${produto.nome}`;
            
            document.getElementById("produto-nome").innerText = `${produto.nome} (${produto.tipo})`;
            document.getElementById("produto-marca").innerText = produto.marca;
            
            // Formatação de Moeda
            const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco);
            const originalFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.precoOriginal);
            
            document.getElementById("produto-preco").innerText = precoFormatado;
            document.getElementById("produto-preco-original").innerText = originalFormatado;

            // Gerar uma descrição automática (já que não temos no banco ainda)
            const descricaoTexto = `O perfume <strong>${produto.nome}</strong> da marca <strong>${produto.marca}</strong> é a escolha ideal para quem busca sofisticação. Disponível na versão <strong>${produto.tipo}</strong>, ele oferece uma fragrância marcante e duradoura. Aproveite a oferta exclusiva da SmellCare!`;
            
            document.getElementById("produto-descricao").innerHTML = descricaoTexto;

        } else {
            document.querySelector(".conteiner-comprar-produtos").innerHTML = "<h2>Produto não encontrado!</h2><a href='index.html'>Voltar</a>";
        }
    };

    request.onerror = () => {
        console.log("Erro ao buscar o produto.");
    };
}

// ==============================================================
// LÓGICA DA BUSCA LIVE (TIPO AMAZON)
// ==============================================================

const inputPesquisa = document.getElementById('pesquisar');
const listaResultados = document.getElementById('resultados-busca');

// Função para buscar no banco de dados
function buscarProdutosLive(termo) {
    // Se o termo for muito curto, limpa a lista e para
    if (termo.length < 2) {
        listaResultados.style.display = 'none';
        listaResultados.innerHTML = '';
        return;
    }

    // Garante que o banco 'db' existe (criado no início do script)
    if (!db) return;

    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
        const todosProdutos = event.target.result;
        
        // Filtra produtos pelo nome ou marca
        const produtosFiltrados = todosProdutos.filter(produto => 
            produto.nome.toLowerCase().includes(termo.toLowerCase()) || 
            produto.marca.toLowerCase().includes(termo.toLowerCase())
        );

        exibirResultadosNaLista(produtosFiltrados);
    };
}

// Função que desenha a lista flutuante
function exibirResultadosNaLista(produtos) {
    listaResultados.innerHTML = ''; // Limpa resultados anteriores

    if (produtos.length === 0) {
        listaResultados.style.display = 'none';
        return;
    }

    produtos.forEach(produto => {
        // Formata preço
        const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco);

        // Cria o link clicável (parece um item de lista, mas é um <a>)
        const item = document.createElement('a');
        item.classList.add('item-busca');
        item.href = `pagina-produtos.html?id=${produto.id}`; // Link direto para a página do produto!
        
        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="info-busca">
                <h4>${produto.nome}</h4>
                <span>${produto.marca} - ${preco}</span>
            </div>
        `;

        listaResultados.appendChild(item);
    });

    listaResultados.style.display = 'block'; // Mostra a lista
}

// Evento: Quando o usuário digita
inputPesquisa.addEventListener('input', (e) => {
    buscarProdutosLive(e.target.value);
});

// Evento: Clicar fora da busca fecha a lista
document.addEventListener('click', (e) => {
    if (!inputPesquisa.contains(e.target) && !listaResultados.contains(e.target)) {
        listaResultados.style.display = 'none';
    }
});
