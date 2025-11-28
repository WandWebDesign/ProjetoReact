import React from 'react';

const Hero = () => {
  return (
    <section className="iniciar">
      <div className="conteudo-inicio" id="inicio">
        <h3>PERFUMARIA COM OS MELHORES AROMAS DA REGIÃO</h3>
        <p>Descubra fragrâncias exclusivas que transformam seu momento</p>
        <a href="#produto-masc" className="botao-produtos">Fragrâncias Masculinas</a>
        <a href="#produto-fem" className="botao-produtos">Fragrâncias Femininas</a>
        <a href="#ofertas" className="botao-produtos">Principais Ofertas!</a>
      </div>
    </section>
  );
};

export default Hero;