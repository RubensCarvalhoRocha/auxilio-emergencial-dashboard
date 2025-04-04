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
    <div style={{ width: '100%', height: 1000 }}>
      <h2>Valor Total Pago por Estado</h2>
      {dados.length > 0 && (
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={dados}
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => `R$ ${(value / 1_000_000_000).toFixed(1)}Bi`}
            />
            <YAxis dataKey="uf" type="category" width={80} />
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
