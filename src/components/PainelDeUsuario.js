import React from "react";

const MensagemDeBoasVindas = ({ usuario }) => {
  return <h2>🎉 Bem-vindo, {usuario}!</h2>;
};

const MensagemLogin = () => {
  return <p>🔑 Por favor, faça login para continuar.</p>;
};

function PainelDeUsuario({ estaLogado, usuario, onLogin, onLogout }) {
  const mensagem = estaLogado
    ? "✅ Você está logado."
    : "❌ Você não está logado.";

  const renderizarConteudo = () => {
    if (estaLogado) {
      return (
        <div style={styles.caixa}>
          <MensagemDeBoasVindas usuario={usuario} />
          <button style={styles.botaoLogout} onClick={onLogout}>
            🚪 Logout
          </button>
        </div>
      );
    } else {
      return (
        <div style={styles.caixa}>
          <h2>Renderização Condicional</h2>
          <MensagemLogin />
          <button style={styles.botaoLogin} onClick={onLogin}>
            🔓 Login
          </button>
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

const styles = {
  caixa: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    display: "inline-block",
    marginTop: "10px",
    backgroundColor: "#f9f9f9",
  },
  botaoLogin: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  botaoLogout: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default PainelDeUsuario;
