import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import SecaoProdutos from './components/SecaoProdutos';
import Avaliacoes from './components/Avaliacoes';
import Footer from './components/Footer';

function App() {
  // SEUS DADOS REAIS AQUI
  const produtos = [
    // Ofertas
    { id: "ckone", nome: "CK One", tipo: "100ml", marca: "Calvin Klein", preco: 219.90, precoOriginal: 299.90, imagem: "/Imagens/CK-ONE(100ml)-min.webp", categoria: "oferta", genero: "unissex" },
    { id: "lightblue", nome: "Light Blue", tipo: "Fem - 50ml", marca: "Dolce & Gabbana", preco: 349.90, precoOriginal: 429.90, imagem: "/Imagens/DOLCE-LIGHT-BLUE-FEM-min.png", categoria: "oferta", genero: "feminino" },
    { id: "GoldenSecret", nome: "The Golden Secret", tipo: "Masc - 100ml", marca: "Antonio Banderas", preco: 149.90, precoOriginal: 199.90, imagem: "/Imagens/The Golden Secret (Masc - 100ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "individuel", nome: "Individuel", tipo: "Masc - 75ml", marca: "Montblanc", preco: 279.90, precoOriginal: 349.90, imagem: "/Imagens/Individuel (Masc - 75ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "amoramor", nome: "Amor Amor", tipo: "Fem - 50ml", marca: "Cacharel", preco: 259.90, precoOriginal: 319.90, imagem: "/Imagens/Amor Amor (Fem - 50ml)-min.webp", categoria: "oferta", genero: "feminino" },
    { id: "coolwater", nome: "Cool Water", tipo: "Masc - 125ml", marca: "Davidoff", preco: 239.90, precoOriginal: 309.90, imagem: "/Imagens/Cool Water (Masc - 125ml)-min.webp", categoria: "oferta", genero: "masculino" },
    { id: "fantasy", nome: "Fantasy", tipo: "Fem - 100ml", marca: "Britney Spears", preco: 189.90, precoOriginal: 249.90, imagem: "/Imagens/Fantasy (Fem - 100ml)-min.jpeg", categoria: "oferta", genero: "feminino" },
    { id: "azzaro", nome: "Azzaro Pour Homme", tipo: "Masc - 100ml", marca: "Azzaro", preco: 299.90, precoOriginal: 379.90, imagem: "/Imagens/Azzaro Pour Homme (Masc - 100ml)-min.webp", categoria: "oferta", genero: "masculino" },

    // Masculinos
    { id: "sauvage", nome: "Sauvage", tipo: "EDT - 100ml", marca: "Dior", preco: 679.90, precoOriginal: 759.90, imagem: "/Imagens/SauvageDior-min.png", categoria: "normal", genero: "masculino" },
    { id: "lemale", nome: "Le Male", tipo: "EDT - 75ml", marca: "Jean Paul Gaultier", preco: 419.90, precoOriginal: 499.90, imagem: "/Imagens/Le-Male-Eau-De-Toilette-Jean-Paul-Gaultier--min.webp", categoria: "normal", genero: "masculino" },
    { id: "badboy", nome: "Bad Boy", tipo: "EDT - 100ml", marca: "Carolina Herrera", preco: 579.90, precoOriginal: 659.90, imagem: "/Imagens/BadBoy-min.webp", categoria: "normal", genero: "masculino" },
    { id: "theblend", nome: "The Blend", tipo: "EDP - 100ml", marca: "O Boticário", preco: 259.90, precoOriginal: 299.90, imagem: "/Imagens/TheBlend-min.png", categoria: "normal", genero: "masculino" },
    { id: "homemsagaz", nome: "Homem Sagaz", tipo: "Deo Parfum - 100ml", marca: "Natura", preco: 159.90, precoOriginal: 189.90, imagem: "/Imagens/HomemSagaz-min.png", categoria: "normal", genero: "masculino" },
    { id: "coffeman", nome: "Coffee Man", tipo: "Colônia - 100ml", marca: "O Boticário", preco: 149.90, precoOriginal: 179.90, imagem: "/Imagens/CoffeMan-min.png", categoria: "normal", genero: "masculino" },
    { id: "quasar", nome: "Quasar", tipo: "Colônia - 100ml", marca: "O Boticário", preco: 129.90, precoOriginal: 159.90, imagem: "/Imagens/Quasar-min.png", categoria: "normal", genero: "masculino" },

    // Femininos
    { id: "olympea", nome: "Olympéa", tipo: "EDP - 80ml", marca: "Rabanne", preco: 519.90, precoOriginal: 599.90, imagem: "/Imagens/olympea-min.webp", categoria: "normal", genero: "feminino" },
    { id: "viprose", nome: "212 Vip Rosé", tipo: "EDP - 80ml", marca: "Carolina Herrera", preco: 549.90, precoOriginal: 639.90, imagem: "/Imagens/212VipRose-min.webp", categoria: "normal", genero: "feminino" },
    { id: "heroes", nome: "212 Heroes For Her", tipo: "EDP - 80ml", marca: "Carolina Herrera", preco: 569.90, precoOriginal: 659.90, imagem: "/Imagens/212-heroes-min.webp", categoria: "normal", genero: "feminino" },
    { id: "yara", nome: "Yara", tipo: "EDP - 100ml", marca: "Lattafa", preco: 249.90, precoOriginal: 319.90, imagem: "/Imagens/LattaffaYara-min.webp", categoria: "normal", genero: "feminino" },
    { id: "egeored", nome: "Egeo Red", tipo: "Colônia - 90ml", marca: "O Boticário", preco: 119.90, precoOriginal: 144.90, imagem: "/Imagens/Egeo Red-min.jpeg", categoria: "normal", genero: "feminino" },
    { id: "egeodolce", nome: "Egeo Dolce", tipo: "Colônia - 90ml", marca: "O Boticário", preco: 119.90, precoOriginal: 144.90, imagem: "/Imagens/Egeo Dolce-min.jpg", categoria: "normal", genero: "feminino" },
    { id: "ladylily", nome: "Lady Lily", tipo: "Splash - 200ml", marca: "O Boticário", preco: 89.90, precoOriginal: 109.90, imagem: "/Imagens/LadyLily-min.webp", categoria: "normal", genero: "feminino" },
    { id: "encanto", nome: "Encanto", tipo: "Colônia Fascinante", marca: "Avon", preco: 59.90, precoOriginal: 79.90, imagem: "/Imagens/FloralEncanto-min.jpeg", categoria: "normal", genero: "feminino" }
  ];

  // FILTROS CORRIGIDOS PARA O SEU NOVO ARRAY
  // Ofertas: Pega tudo que tem categoria 'oferta'
  const listaOfertas = produtos.filter(p => p.categoria === 'oferta');
  
  // Masculinos: Pega o que tem genero 'masculino' E categoria 'normal' (para não repetir o que já está em ofertas)
  const listaMasculinos = produtos.filter(p => p.genero === 'masculino' && p.categoria === 'normal');
  
  // Femininos: Mesma lógica
  const listaFemininos = produtos.filter(p => p.genero === 'feminino' && p.categoria === 'normal');

  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      
      {/* Passando as listas filtradas para os componentes */}
      <SecaoProdutos titulo="Principais Ofertas!" id="ofertas" lista={listaOfertas} destaque={true} />
      <SecaoProdutos titulo="Produtos Masculinos" id="produto-masc" lista={listaMasculinos} />
      <SecaoProdutos titulo="Produtos Femininos" id="produto-fem" lista={listaFemininos} />
      
      <Avaliacoes />
      <Footer />
    </div>
  );
}

export default App;