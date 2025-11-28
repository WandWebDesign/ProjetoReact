import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    alert(`E-mail ${email} cadastrado com sucesso!`);
    setEmail('');
  };

  return (
    <footer>
      <div className="rodape">
        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#produtos">Produtos</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="redes-sociais">
          <p><strong>Siga-nos:</strong></p>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://web.whatsapp.com/">WhatsApp</a>
        </div>

        <div className="Formulário">
          <p>Cadastre seu e-mail para receber novidades:</p>
          <form onSubmit={handleCadastro}>
            <input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button id="cadastro" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
      <p id="Fixo-baixo">SmellCare &copy; 2025 - Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;