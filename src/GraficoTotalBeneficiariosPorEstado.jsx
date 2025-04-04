import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import axios from "axios";

const GraficoTotalBeneficiariosPorEstado = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/totais-uf/")
      .then(response => {
        const dadosTratados = response.data
          .map(item => ({
            ...item,
            total_beneficiarios: Number(item.total_beneficiarios)
          }))
          .sort((a, b) => b.total_beneficiarios - a.total_beneficiarios); // ordem decrescente

        setDados(dadosTratados);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 1000 }}>
      <h2>Total de Beneficiários por Estado</h2>
      {dados.length > 0 && (
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={dados}
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`}
            />
            <YAxis dataKey="uf" type="category" width={80} />
            <Tooltip formatter={(value) => `${value.toLocaleString('pt-BR')} beneficiários`} />
            <Legend />
            <Bar dataKey="total_beneficiarios" fill="#FF8042" name="Total de Beneficiários" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoTotalBeneficiariosPorEstado;
