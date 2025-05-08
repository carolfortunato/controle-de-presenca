const db = require('../db/knex');

const getAllProfessors = async (req, res) => {
  try {
    const professors = await db('professors').select('*');
    res.json(professors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfessor = async (req, res) => {
  const { name, email, employee_number, status } = req.body;

  if (!name || !email || !employee_number || !status) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const newProfessor = await db('professors').insert({
      name,
      email,
      employee_number,
      status
    });

    res.status(201).json({ id: newProfessor[0], name, email, employee_number, status });
  } catch (error) {
    console.error('Erro detalhado:', error);
    res.status(500).json({ error: 'Erro ao criar o professor', details: error.message });
  }
};
module.exports = {
  getAllProfessors,
  createProfessor,
};
