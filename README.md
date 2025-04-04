# 💻 Frontend - Visualização Auxílio Emergencial

Interface web desenvolvida com **ReactJS** e **Recharts** para visualização interativa dos dados públicos da API de **Auxílio Emergencial** por estado e tipo de beneficiário.

A aplicação consome dados em tempo real da API desenvolvida em Flask e os apresenta de forma clara por meio de **gráficos dinâmicos e responsivos**.

---

## ✨ Funcionalidades

- 📊 Gráfico de beneficiários por enquadramento (Bolsa Família, CadÚnico, Extra)
- 💰 Gráfico de valor total pago por estado
- 👥 Gráfico da população de cada estado
- 📈 Gráfico do total de beneficiários por UF
- 📦 Integração completa com API REST local
- ⚙️ Layout responsivo estilo dashboard

---

## 🛠️ Tecnologias Utilizadas

- ReactJS
- Recharts (visualização gráfica)
- Axios (requisições HTTP)
- CSS Grid / Flexbox para layout
- Vite ou Create React App (conforme setup)

---

## 🚀 Como rodar o projeto

### 1. Clone este repositório

```bash
git clone https://github.com/SEU_USUARIO/frontend-auxilio-emergencial.git
cd frontend-auxilio-emergencial
```


```bash
npm install
npm start
```

### ⚠️ Requisitos
### A API precisa estar rodando localmente em http://127.0.0.1:5000

### Endpoints utilizados:

### /beneficiarios/

### /valores-totais/

### /populacao-estados/

### /totais-uf/
