import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const GraficoBeneficiarios = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/beneficiarios/")
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 600 }}>
      <h2>Distribuição de Beneficiários por Estado</h2>
      <ResponsiveContainer>
        <BarChart data={dados} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <XAxis dataKey="uf" angle={-45} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bolsa_familia" stackId="a" fill="#8884d8" name="Bolsa Família" />
          <Bar dataKey="cadun_nao_bolsa" stackId="a" fill="#82ca9d" name="CadÚnico Não Bolsa" />
          <Bar dataKey="extra_cadun" stackId="a" fill="#ffc658" name="Extra CadÚnico" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoBeneficiarios;
