const knex = require('../db/knex');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await knex('students').select('*');
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos', details: error.message });
  }
};

exports.createStudent = async (req, res) => {
  const { name, email, registration_number, status } = req.body;

  try {
    await knex('students').insert({
      name,
      email,
      registration_number,
      status,
    });

    res.status(201).json({ message: 'Aluno criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o aluno', details: error.message });
  }
};
