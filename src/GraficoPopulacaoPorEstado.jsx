import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import axios from "axios";

const GraficoPopulacaoPorEstado = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/populacao-estados/")
      .then(response => {
        const dadosFiltrados = response.data
          .filter(item => item.populacao !== undefined)
          .map(item => ({
            ...item,
            populacao: Number(item.populacao)
          }))
          .sort((a, b) => b.populacao - a.populacao); // ordem decrescente
        setDados(dadosFiltrados);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 600 }}>
      <h2>População Total por Estado</h2>
      {dados.length > 0 && (
        <ResponsiveContainer>
          <BarChart data={dados} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis dataKey="uf" angle={-45} textAnchor="end" interval={0} />
            <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} />
            <Tooltip formatter={(value) => `${value.toLocaleString('pt-BR')} habitantes`} />
            <Legend />
            <Bar dataKey="populacao" fill="#00C49F" name="População" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoPopulacaoPorEstado;
