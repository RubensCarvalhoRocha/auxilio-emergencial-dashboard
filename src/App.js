import React from "react";
import GraficoBeneficiariosPorEnquadramento from "./GraficoBeneficiariosPorEnquadramento";

function App() {
  return (
    <div>
      <GraficoBeneficiariosPorEnquadramento />
      <GraficoValorTotalPorEstado />
      <GraficoPopulacaoPorEstado />
      <GraficoTotalBeneficiariosPorEstado />
    </div>
  );
}

export default App;
