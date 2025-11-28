import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { produtos } from '../dados'; // Importando sua lista de perfumes

// Função para formatar dinheiro
const formatarPreco = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

const ProdutoDetalhes = () => {
  // Pega o ID da URL (ex: se a URL for /produto/ckone, o id será "ckone")
  const { id } = useParams();

  // Procura o perfume na lista
  const produto = produtos.find((p) => p.id === id);

  // Rola a página para o topo ao abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }

  return (
    <>
      <Header />
      
      <article className="comprar-produtos">
        <div className="conteiner-comprar-produtos">
          
          <div className="fotos-produtos">
            <img id="produto-imagem" src={produto.imagem} alt={produto.nome} />
          </div>

          <div className="descricao-produtos">
            <h4 id="produto-nome">{produto.nome}</h4>
            <h5 id="produto-marca">{produto.marca} - {produto.tipo}</h5>

            <p id="produto-descricao">
              {produto.descricao || "Uma fragrância incrível que combina com sua personalidade."}
            </p>

            <div className="preco-produtos">
              <p id="produto-preco">{formatarPreco(produto.preco)}</p>
              {produto.precoOriginal && (
                <p id="produto-preco-original" style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9em' }}>
                  {formatarPreco(produto.precoOriginal)}
                </p>
              )}
            </div>

            <button className="botao-comprar-detalhe" onClick={() => alert('Produto adicionado ao carrinho!')}>
              Comprar
            </button>
            
            {/* Botão extra para voltar */}
            <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#333' }}>
                ← Voltar para a loja
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
};

export default ProdutoDetalhes;