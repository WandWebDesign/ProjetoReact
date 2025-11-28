import React from 'react';

const Sobre = () => {
  return (
    <section className="sobre-nos" id="sobre">
      <h2 className="titulo-secoes">Sobre Nós</h2>
      <div className="conteudo-sobre">
        <div className="imagem-sobre">
          {/* Lembre-se: Imagens agora buscam da pasta public com a barra na frente */}
          <img src="/Imagens/Imagem-sobre-min.png" alt="Sobre a SmellCare" />
        </div>
        <div className="texto-sobre">
          <p>
            Há mais de uma década, a SmellCare traz os melhores perfumes importados e nacionais para
            nossos clientes. Nossa missão é proporcionar uma experiência olfativa única, com produtos de
            qualidade e atendimento especializado.
          </p>
          <p>
            Trabalhamos apenas com marcas reconhecidas e produtos originais, garantindo a satisfação de nossos
            clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;