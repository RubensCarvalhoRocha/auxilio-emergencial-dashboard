import React from "react";
import GraficoBeneficiariosPorEnquadramento from "./GraficoBeneficiariosPorEnquadramento";
import GraficoValorTotalPorEstado from "./GraficoValorTotalPorEstado";
import GraficoPopulacaoPorEstado from "./GraficoPopulacaoPorEstado";
import GraficoTotalBeneficiariosPorEstado from "./GraficoTotalBeneficiariosPorEstado";

import "./App.css"; // adicionamos estilo aqui

function App() {
  return (
    <div className="container">
      <h1>Dashboard Auxílio Emergencial</h1>
      <div className="grid">
        <div className="card"><GraficoBeneficiariosPorEnquadramento /></div>
        <div className="card"><GraficoValorTotalPorEstado /></div>
        <div className="card"><GraficoPopulacaoPorEstado /></div>
        <div className="card"><GraficoTotalBeneficiariosPorEstado /></div>
      </div>
    </div>
  );
}

export default App;
