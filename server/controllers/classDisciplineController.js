const knex = require('../db/knex');

exports.getAll = async (req, res) => {
  try {
    const classDisciplines = await knex('class_disciplines').select('*');
    res.json(classDisciplines);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relações entre classes e disciplinas', details: error.message });
  }
};

exports.create = async (req, res) => {
  const { class_id, discipline_id } = req.body;

  if (!class_id || !discipline_id) {
    return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const [newClassDiscipline] = await knex('class_disciplines')
      .insert({ class_id, discipline_id })
      .returning('*');

    res.status(201).json(newClassDiscipline);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar relação entre classe e disciplina', details: error.message });
  }
};

exports.getDisciplinesByClass = async (req, res) => {
  const { class_id } = req.params;

  try {
    const disciplines = await knex('class_disciplines')
      .join('disciplines', 'class_disciplines.discipline_id', '=', 'disciplines.id')
      .where('class_disciplines.class_id', class_id)
      .select('disciplines.id', 'disciplines.name', 'disciplines.code', 'disciplines.workload');

    if (disciplines.length === 0) {
      return res.status(404).json({ message: 'Nenhuma disciplina encontrada para esta classe' });
    }

    res.json(disciplines);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas da classe', details: error.message });
  }
};