const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


// Importar as rotas
const professorRoutes = require('./routes/professors');
app.use('/api/professors', professorRoutes);

// Teste de rota
app.get('/', (req, res) => res.send('API Online'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
