import React, { useState } from 'react';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <section>
        <div className="logo-e-marca">
          <div className="marca">
            <h1>SmellCare</h1>
          </div>
          <div className="logo">
            <a href="#" className="logo img">
              {/* Nota: Em React, imagens na pasta public usam caminho absoluto iniciados com / */}
              <img src="/Imagens/Logo -Smell Care-min.png" alt="Logo da Perfumaria" />
            </a>
          </div>
        </div>

        <div className="icones">
          <div className="container-busca">
            <input type="text" id="pesquisar" placeholder="digite o produto desejado..." autoComplete="off" />
            <div id="resultados-busca" className="resultado-busca-lista"></div>
          </div>
        </div>

        <nav className="menu-principal">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>

          {/* Lógica do Dropdown convertida para React */}
          <li 
            className="dropdown"
            onMouseEnter={() => setMenuAberto(true)}
            onMouseLeave={() => setMenuAberto(false)}
          >
            <a href="#" className="dropbtn">Produtos ▾</a>
            {/* Renderização Condicional: Só mostra se menuAberto for true */}
            {menuAberto && (
              <ul className="dropdown-content">
                <li><a href="#produto-fem">Feminino</a></li>
                <li><a href="#produto-masc">Masculino</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
              </ul>
            )}
          </li>

          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;