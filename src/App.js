import React, { useState } from "react";
import PainelDeUsuario from "./components/PainelDeUsuario";

function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [usuario] = useState("Egito");

  const handleLogin = () => setEstaLogado(true);
  const handleLogout = () => setEstaLogado(false);

  return (
    <div>
      <PainelDeUsuario
        estaLogado={estaLogado}
        usuario={usuario}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default App;
