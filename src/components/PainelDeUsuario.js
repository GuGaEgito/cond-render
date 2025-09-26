import React from "react";

// constante mensagem de boas-vindas
const MensagemDeBoasVindas = () => {
  return <h1>Bem-vindo ao Painel de Usuário!</h1>;
};

// mensagem para fazer login
const MensagemLogin = () => {
  return <p>Por favor, faça login para continuar.</p>;
};

// componente principal que usa renderização condicional
function PainelDeUsuario({ estaLogado }) {
  // exemplo 01: operador ternário
  const mensagem = estaLogado ? "Você está logado" : "Você não está logado";

  // exemplo 02: operador &&
  const BotaoDeLogout = () => {
    return estaLogado && <button>Logout</button>;
  };

  // exemplo 03: componentes separados
  const renderizarConteudo = () => {
    if (estaLogado) {
      return (
        <div>
          <MensagemDeBoasVindas />
          <BotaoDeLogout />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Renderização Condicional</h2>
          <MensagemLogin />
          <button>Login</button>
        </div>
      );
    }
  };

  return (
    <div>
      <p>{mensagem}</p>
      {renderizarConteudo()}
    </div>
  );
}

export default PainelDeUsuario;
