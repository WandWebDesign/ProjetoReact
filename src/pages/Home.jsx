import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import SecaoProdutos from '../components/SecaoProdutos';
import Avaliacoes from '../components/Avaliacoes';
import Footer from '../components/Footer';
import { produtos } from '../dados'; // Importando do arquivo novo

const Home = () => {
  // Seus filtros aqui
  const listaOfertas = produtos.filter(p => p.categoria === 'oferta');
  const listaMasculinos = produtos.filter(p => p.genero === 'masculino' && p.categoria === 'normal');
  const listaFemininos = produtos.filter(p => p.genero === 'feminino' && p.categoria === 'normal');

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <SecaoProdutos titulo="Principais Ofertas!" id="ofertas" lista={listaOfertas} />
      <SecaoProdutos titulo="Produtos Masculinos" id="produto-masc" lista={listaMasculinos} />
      <SecaoProdutos titulo="Produtos Femininos" id="produto-fem" lista={listaFemininos} />
      <Avaliacoes />
      <Footer />
    </>
  );
};
export default Home;