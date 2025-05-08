const knex = require('../db/knex');

exports.getLessonsByDiscipline = async (req, res) => {
  const { discipline_id } = req.params;

  try {
    const lessons = await knex('lessons')
      .where('discipline_id', discipline_id)
      .select('id', 'date', 'start_time', 'end_time', 'discipline_id');

    if (lessons.length === 0) {
      return res.status(404).json({ message: 'Nenhuma aula encontrada para esta disciplina' });
    }

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aulas da disciplina', details: error.message });
  }
};

exports.create = async (req, res) => {
  const { date, start_time, end_time, discipline_id } = req.body;

  if (!date || !start_time || !end_time || !discipline_id) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const disciplineExists = await knex('disciplines').where('id', discipline_id).first();
  if (!disciplineExists) {
    return res.status(400).json({ error: 'Disciplina não encontrada' });
  }

  try {
    const [newLesson] = await knex('lessons')
      .insert({ date, start_time, end_time, discipline_id })
      .returning('*');

    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a aula', details: error.message });
  }
};

exports.getLessonsByClass = async (req, res) => {
  const { class_id } = req.params;

  try {
    const lessons = await knex('lessons')
      .join('class_disciplines', 'lessons.discipline_id', '=', 'class_disciplines.discipline_id')
      .where('class_disciplines.class_id', class_id)
      .select('lessons.id', 'lessons.date', 'lessons.start_time', 'lessons.end_time', 'lessons.discipline_id');

    if (lessons.length === 0) {
      return res.status(404).json({ message: 'Nenhuma aula encontrada para esta classe' });
    }

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aulas da classe', details: error.message });
  }
};
