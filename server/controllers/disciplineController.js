const knex = require('../db/knex');

exports.getAllDisciplines = async (req, res) => {
  try {
    const disciplines = await knex('disciplines').select('*');
    res.json(disciplines);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas', details: error.message });
  }
};

exports.createDiscipline = async (req, res) => {
  const { name, code, workload } = req.body;

  if (!name || !code || !workload) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const [newDiscipline] = await knex('disciplines')
      .insert({ name, code, workload })
      .returning('*');

    res.status(201).json(newDiscipline);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar disciplina', details: error.message });
  }
};
