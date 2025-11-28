import React from 'react';
import { Link } from 'react-router-dom'; // <--- Adicione isso no topo

// Função para formatar dinheiro (R$ 200,00)
const formatarPreco = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
};

const SecaoProdutos = ({ titulo, id, lista }) => {
  return (
    <section className="conteiner-produtos" id={id}>
      
      {/* Verifica se o ID é 'ofertas' para renderizar o título da forma correta */}
      {id === 'ofertas' ? (
        <>
            <div className="titulo-secoes">
                <h2>Nossos produtos:</h2>
            </div>
            <section className="ofertas">
                <h3 className="titulo-secoes">{titulo}</h3>
                <div className="grid-produtos">
                    {lista.map((produto) => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </div>
            </section>
        </>
      ) : (
        // Renderização para seções Masculina e Feminina
        <section className={id}>
             <h3 className="titulo-secoes">{titulo}</h3>
             <div className="grid-produtos">
                {lista.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
             </div>
        </section>
      )}

    </section>
  );
};

// Criei um sub-componente interno para não repetir código do Card



const CardProduto = ({ produto }) => {
    return (
        <div className="card-produtos">
            <img src={produto.imagem} alt={produto.nome} />
            
            {/* Nome do Produto */}
            <h4>{produto.nome}</h4>
            
            {/* Marca (H5 conforme seu CSS) */}
            <h5>{produto.marca} - {produto.tipo}</h5>
            
            {/* Preço Original (Riscado) */}
            {produto.precoOriginal && (
                 <span id="texto-preço-original">
                     {formatarPreco(produto.precoOriginal)}
                 </span>
            )}
            
            {/* Preço Atual (P conforme seu CSS) */}
            <p>{formatarPreco(produto.preco)}</p>
            
            {/* Transformando o botão Comprar em Link */}
            <Link to={`/produto/${produto.id}`} style={{ textDecoration: 'none' }}>
                <button className="botao-comprar">Ver Detalhes / Comprar</button>
            </Link>
        </div>
    );
};



export default SecaoProdutos;