import React from 'react';

const Avaliacoes = () => {
  return (
    <section className="avaliacoes" id="avaliacoes">
      <h2 className="titulo-secoes">Avaliações de Clientes</h2>
      <div className="conteiner-avaliacoes">
        
        <article className="card-avaliacao">
          <h3>Maria Silva</h3>
          <p>
            "Comprei o Olympéa e estou maravilhada! O perfume é ainda melhor do que eu esperava e a
            entrega foi super rápida."
          </p>
        </article>

        <article className="card-avaliacao">
          <h3>João Santos</h3>
          <p>
            "Produtos de alta qualidade e preços justos. Já comprei várias vezes e sempre fico satisfeito com o
            atendimento."
          </p>
        </article>

        <article className="card-avaliacao">
          <h3>Ana Oliveira</h3>
          <p>
            "Amei a variedade de perfumes! A equipe me ajudou a encontrar a fragrância perfeita para presentear
            minha mãe."
          </p>
        </article>

      </div>
    </section>
  );
};

export default Avaliacoes;