import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import axios from "axios";

const GraficoValorTotalPorEstado = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/valores-totais/")
      .then(response => {
        // Remove o total nacional (BR) e ordena do maior para o menor
        const filtradoOrdenado = response.data
          .filter(item => item.uf !== "BR")
          .map(item => ({
            ...item,
            valor_total: Number(item.valor_total)
          }))
          .sort((a, b) => b.valor_total - a.valor_total);

        setDados(filtradoOrdenado);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 600 }}>
      <h2>Valor Total Pago por Estado</h2>
      {dados.length > 0 && (
        <ResponsiveContainer>
          <BarChart data={dados} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis dataKey="uf" angle={-45} textAnchor="end" interval={0} />
            <YAxis tickFormatter={(value) => `R$ ${(value / 1_000_000_000).toFixed(1)}Bi`} />
            <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
            <Legend />
            <Bar dataKey="valor_total" fill="#0088FE" name="Valor Total Pago" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoValorTotalPorEstado;
