// ==============================================================
// 1. DADOS DOS PRODUTOS (Para criar o banco na primeira vez)
// ==============================================================
const produtosIniciais = [
    // Ofertas
    { id: "ckone", nome: "CK One", tipo: "100ml", marca: "Calvin Klein", preco: 219.90, precoOriginal: 299.90, imagem: "./Imagens/CK-ONE(100ml)-min.webp", categoria: "oferta", genero: "unissex" },
    { id: "lightblue", nome: "Light Blue", tipo: "Fem - 50ml", marca: "Dolce & Gabbana", preco: 349.90, precoOriginal: 429.90, imagem: "./Imagens/DOLCE-LIGHT-BLUE-FEM-min.png", categoria: "oferta", genero: "feminino" },
    { id: "GoldenSecret", nome: "The Golden Secret", tipo: "Masc - 100ml", marca: "Antonio Banderas", preco: 149.90, precoOriginal: 199.90, imagem: "./Imagens/The Golden Secret (Masc - 100ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "individuel", nome: "Individuel", tipo: "Masc - 75ml", marca: "Montblanc", preco: 279.90, precoOriginal: 349.90, imagem: "./Imagens/Individuel (Masc - 75ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "amoramor", nome: "Amor Amor", tipo: "Fem - 50ml", marca: "Cacharel", preco: 259.90, precoOriginal: 319.90, imagem: "./Imagens/Amor Amor (Fem - 50ml)-min.webp", categoria: "oferta", genero: "feminino" },
    { id: "coolwater", nome: "Cool Water", tipo: "Masc - 125ml", marca: "Davidoff", preco: 239.90, precoOriginal: 309.90, imagem: "./Imagens/Cool Water (Masc - 125ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "fantasy", nome: "Fantasy", tipo: "Fem - 100ml", marca: "Britney Spears", preco: 189.90, precoOriginal: 249.90, imagem: "./Imagens/Fantasy (Fem - 100ml)-min.jpeg", categoria: "oferta", genero: "feminino" },
    { id: "azzaro", nome: "Azzaro Pour Homme", tipo: "Masc - 100ml", marca: "Azzaro", preco: 299.90, precoOriginal: 379.90, imagem: "./Imagens/Azzaro Pour Homme (Masc - 100ml)-min.webp", categoria: "oferta", genero: "masculino" },

    // Masculinos
    { id: "sauvage", nome: "Sauvage", tipo: "EDT - 100ml", marca: "Dior", preco: 679.90, precoOriginal: 759.90, imagem: "./Imagens/SauvageDior-min.png", categoria: "normal", genero: "masculino" },
    { id: "lemale", nome: "Le Male", tipo: "EDT - 75ml", marca: "Jean Paul Gaultier", preco: 419.90, precoOriginal: 499.90, imagem: "./Imagens/Le-Male-Eau-De-Toilette-Jean-Paul-Gaultier--min.webp", categoria: "normal", genero: "masculino" },
    { id: "badboy", nome: "Bad Boy", tipo: "EDT - 100ml", marca: "Carolina Herrera", preco: 579.90, precoOriginal: 659.90, imagem: "./Imagens/BadBoy-min.webp", categoria: "normal", genero: "masculino" },
    { id: "theblend", nome: "The Blend", tipo: "EDP - 100ml", marca: "O Boticário", preco: 259.90, precoOriginal: 299.90, imagem: "./Imagens/TheBlend-min.png", categoria: "normal", genero: "masculino" },
    { id: "homemsagaz", nome: "Homem Sagaz", tipo: "Deo Parfum - 100ml", marca: "Natura", preco: 159.90, precoOriginal: 189.90, imagem: "./Imagens/HomemSagaz-min.png", categoria: "normal", genero: "masculino" },
    { id: "coffeman", nome: "Coffee Man", tipo: "Colônia - 100ml", marca: "O Boticário", preco: 149.90, precoOriginal: 179.90, imagem: "./Imagens/CoffeMan-min.png", categoria: "normal", genero: "masculino" },
    { id: "quasar", nome: "Quasar", tipo: "Colônia - 100ml", marca: "O Boticário", preco: 129.90, precoOriginal: 159.90, imagem: "./Imagens/Quasar-min.png", categoria: "normal", genero: "masculino" },

    // Femininos
    { id: "olympea", nome: "Olympéa", tipo: "EDP - 80ml", marca: "Rabanne", preco: 519.90, precoOriginal: 599.90, imagem: "./Imagens/olympea-min.webp", categoria: "normal", genero: "feminino" },
    { id: "viprose", nome: "212 Vip Rosé", tipo: "EDP - 80ml", marca: "Carolina Herrera", preco: 549.90, precoOriginal: 639.90, imagem: "./Imagens/212VipRose-min.webp", categoria: "normal", genero: "feminino" },
    { id: "heroes", nome: "212 Heroes For Her", tipo: "EDP - 80ml", marca: "Carolina Herrera", preco: 569.90, precoOriginal: 659.90, imagem: "./Imagens/212-heroes-min.webp", categoria: "normal", genero: "feminino" },
    { id: "yara", nome: "Yara", tipo: "EDP - 100ml", marca: "Lattafa", preco: 249.90, precoOriginal: 319.90, imagem: "./Imagens/LattaffaYara-min.webp", categoria: "normal", genero: "feminino" },
    { id: "egeored", nome: "Egeo Red", tipo: "Colônia - 90ml", marca: "O Boticário", preco: 119.90, precoOriginal: 144.90, imagem: "./Imagens/Egeo Red-min.jpeg", categoria: "normal", genero: "feminino" },
    { id: "egeodolce", nome: "Egeo Dolce", tipo: "Colônia - 90ml", marca: "O Boticário", preco: 119.90, precoOriginal: 144.90, imagem: "./Imagens/Egeo Dolce-min.jpg", categoria: "normal", genero: "feminino" },
    { id: "ladylily", nome: "Lady Lily", tipo: "Splash - 200ml", marca: "O Boticário", preco: 89.90, precoOriginal: 109.90, imagem: "./Imagens/LadyLily-min.webp", categoria: "normal", genero: "feminino" },
    { id: "encanto", nome: "Encanto", tipo: "Colônia Fascinante", marca: "Avon", preco: 59.90, precoOriginal: 79.90, imagem: "./Imagens/FloralEncanto-min.jpeg", categoria: "normal", genero: "feminino" }
];

// ==============================================================
// 2. CONFIGURAÇÃO DO INDEXEDDB
// ==============================================================
const dbName = "SmellCareDB";
const dbVersion = 2; // Mantemos a versão para garantir a atualização
let db;

const request = indexedDB.open(dbName, dbVersion);

// Executa apenas se o banco não existir ou a versão mudar
request.onupgradeneeded = (event) => {
    db = event.target.result;
    
    // Se já existir a tabela, deleta para recriar limpa
    if (db.objectStoreNames.contains("produtos")) {
        db.deleteObjectStore("produtos");
    }

    const objectStore = db.createObjectStore("produtos", { keyPath: "id" });
    objectStore.createIndex("categoria", "categoria", { unique: false });
    objectStore.createIndex("genero", "genero", { unique: false });

    objectStore.transaction.oncomplete = () => {
        const productStore = db.transaction("produtos", "readwrite").objectStore("produtos");
        produtosIniciais.forEach((produto) => {
            productStore.add(produto);
        });
        console.log("Produtos adicionados ao banco com sucesso!");
    };
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Banco de dados conectado!");
    
    // Só carrega os cards se estivermos na página inicial (onde existem as divs de lista)
    if (document.getElementById("lista-ofertas")) {
        carregarProdutosNaTela();
    }
};

request.onerror = (event) => {
    console.error("Erro ao abrir o banco:", event.target.errorCode);
};

// ==============================================================
// 3. FUNÇÃO PARA CARREGAR OS CARDS NA PÁGINA INICIAL
// ==============================================================
function carregarProdutosNaTela() {
    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
        const produtos = event.target.result;

        const containerOfertas = document.getElementById("lista-ofertas");
        const containerMasc = document.getElementById("lista-masculinos");
        const containerFem = document.getElementById("lista-femininos");

        // Limpa tudo antes de desenhar
        if (containerOfertas) containerOfertas.innerHTML = "";
        if (containerMasc) containerMasc.innerHTML = "";
        if (containerFem) containerFem.innerHTML = "";

        produtos.forEach((produto) => {
            const cardHTML = `
                <article class="card-produtos">
                    <img src="${produto.imagem}" alt="Perfume ${produto.nome}">
                    <h4>${produto.nome}</h4>
                    <h5>${produto.marca}</h5>
                    <p>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</p>
                    <p id="texto-preço-original">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.precoOriginal)}</p>
                    <a href="pagina-produtos.html?id=${produto.id}" class="botao-comprar">Comprar</a>
                </article>
            `;

            if (produto.categoria === "oferta" && containerOfertas) containerOfertas.innerHTML += cardHTML;
            if (produto.genero === "masculino" && containerMasc) containerMasc.innerHTML += cardHTML;
            if (produto.genero === "feminino" && containerFem) containerFem.innerHTML += cardHTML;
        });
    };
}

// ==============================================================
// 4. LÓGICA DA BUSCA AO VIVO (FLUTUANTE)
// ==============================================================
const inputPesquisa = document.getElementById('pesquisar');
const listaResultados = document.getElementById('resultados-busca');

// Função que busca no banco enquanto você digita
function buscarProdutosLive(termo) {
    // Se digitou menos de 2 letras, limpa e esconde
    if (termo.length < 2) {
        listaResultados.style.display = 'none';
        listaResultados.innerHTML = '';
        return;
    }

    // Se o banco não carregou ainda, para tudo
    if (!db) return;

    const transaction = db.transaction(["produtos"], "readonly");
    const objectStore = transaction.objectStore("produtos");
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
        const todosProdutos = event.target.result;
        
        // Filtra: Verifica se o nome ou marca contem o que foi digitado
        const produtosFiltrados = todosProdutos.filter(produto => 
            produto.nome.toLowerCase().includes(termo.toLowerCase()) || 
            produto.marca.toLowerCase().includes(termo.toLowerCase())
        );

        exibirResultadosNaLista(produtosFiltrados);
    };
}

// Função que desenha a listinha branca embaixo do input
function exibirResultadosNaLista(produtos) {
    listaResultados.innerHTML = ''; // Limpa anterior

    if (produtos.length === 0) {
        listaResultados.style.display = 'none';
        return;
    }

    produtos.forEach(produto => {
        const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco);

        // Cria o item da lista (link clicável)
        const item = document.createElement('a');
        item.classList.add('item-busca');
        item.href = `pagina-produtos.html?id=${produto.id}`; 
        
        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="info-busca">
                <h4>${produto.nome}</h4>
                <span>${produto.marca} - ${preco}</span>
            </div>
        `;

        listaResultados.appendChild(item);
    });

    listaResultados.style.display = 'block'; // CSS manda aparecer
}

// EVENTOS (Gatilhos)
if (inputPesquisa) {
    // Quando o usuário solta uma tecla no input
    inputPesquisa.addEventListener('input', (e) => {
        buscarProdutosLive(e.target.value);
    });

    // Se clicar fora, fecha a lista
    document.addEventListener('click', (e) => {
        if (!inputPesquisa.contains(e.target) && !listaResultados.contains(e.target)) {
            listaResultados.style.display = 'none';
        }
    });
}
