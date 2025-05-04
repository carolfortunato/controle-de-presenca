const db = require('../db/knex');

// Buscar todos os professores
const getAllProfessors = async (req, res) => {
  try {
    const professors = await db('professors').select('*');
    res.json(professors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Função para criar um novo professor
const createProfessor = async (req, res) => {
  const { name, email, employee_number, status } = req.body;

  // Verifica se os campos obrigatórios estão presentes
  if (!name || !email || !employee_number || !status) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    // Insere um novo professor no banco de dados
    const newProfessor = await db('professors').insert({
      name,
      email,
      employee_number,
      status
    });

    // Retorna o professor recém-criado
    res.status(201).json({ id: newProfessor[0], name, email, employee_number, status });
  } catch (error) {
    console.error('Erro detalhado:', error); // Isso vai ajudar a entender melhor o erro
    res.status(500).json({ error: 'Erro ao criar o professor', details: error.message });
  }
};
module.exports = {
  getAllProfessors,
  createProfessor,
};
