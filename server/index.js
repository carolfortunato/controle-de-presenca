const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// controllers
const professorRoutes = require('./routes/professors');
const studentRoutes = require('./routes/students');
const disciplineRoutes = require('./routes/disciplines');
const classRoutes = require('./routes/classes');
const classDisciplineRoutes = require('./routes/classDisciplines');

//rotas
app.get('/', (req, res) => res.send('API Online'));
app.use('/api/professors', professorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/disciplines', disciplineRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/class-disciplines', classDisciplineRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
