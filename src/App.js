import React, { useState } from "react";
import PainelDeUsuario from "./components/PainelDeUsuario";

export default function App() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <div>
      <PainelDeUsuario estaLogado={estaLogado} />
      <button onClick={() => setEstaLogado(!estaLogado)}>
        {estaLogado ? "Logout" : "Login"}
      </button>
    </div>
  );
}
