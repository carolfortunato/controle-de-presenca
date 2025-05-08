const knex = require('../db/knex');

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await knex('classes').select('*');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar classes', details: error.message });
  }
};

exports.createClass = async (req, res) => {
  const { name, semester } = req.body;

  if (!name || !semester) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const [newClass] = await knex('classes')
      .insert({ name, semester })
      .returning('*');

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar classe', details: error.message });
  }
};
