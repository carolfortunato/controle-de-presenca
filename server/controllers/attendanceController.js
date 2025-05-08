const knex = require('../db/knex');

exports.createAttendance = async (req, res) => {
  try {
    const { student_id, lesson_id, status, justification } = req.body;

    const lesson = await knex('lessons').where('id', lesson_id).first();
    const student = await knex('students').where('id', student_id).first();

    if (!lesson || !student) {
      return res.status(400).json({ error: 'Aluno ou aula não encontrados' });
    }

    const newAttendance = await knex('attendance').insert({
      student_id,
      lesson_id,
      status,
      justification
    });

    return res.status(201).json({ message: 'Presença registrada com sucesso', attendance_id: newAttendance[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao registrar presença' });
  }
};

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await knex('attendance')
      .join('students', 'attendance.student_id', '=', 'students.id')
      .join('lessons', 'attendance.lesson_id', '=', 'lessons.id')
      .select('attendance.id', 'students.name as student_name', 'lessons.date as lesson_date', 'attendance.status', 'attendance.justification');

    return res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar presenças' });
  }
};

exports.getAttendanceByStudent = async (req, res) => {
  try {
    const { student_id } = req.params;

    const attendance = await knex('attendance')
      .join('students', 'attendance.student_id', '=', 'students.id')
      .join('lessons', 'attendance.lesson_id', '=', 'lessons.id')
      .where('attendance.student_id', student_id)
      .select('attendance.id', 'students.name as student_name', 'lessons.date as lesson_date', 'attendance.status', 'attendance.justification');

    if (attendance.length === 0) {
      return res.status(404).json({ error: 'Nenhuma presença encontrada para este aluno' });
    }

    return res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar presenças por aluno' });
  }
};

exports.getAttendanceByLesson = async (req, res) => {
  try {
    const { lesson_id } = req.params;

    const attendance = await knex('attendance')
      .join('students', 'attendance.student_id', '=', 'students.id')
      .join('lessons', 'attendance.lesson_id', '=', 'lessons.id')
      .where('attendance.lesson_id', lesson_id)
      .select('attendance.id', 'students.name as student_name', 'lessons.date as lesson_date', 'attendance.status', 'attendance.justification');

    if (attendance.length === 0) {
      return res.status(404).json({ error: 'Nenhuma presença encontrada para esta aula' });
    }

    return res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar presenças por aula' });
  }
};

exports.getAttendanceByDiscipline = async (req, res) => {
  try {
    const { discipline_id } = req.params;

    const lessons = await knex('lessons')
      .where('discipline_id', discipline_id)
      .select('id');

    if (lessons.length === 0) {
      return res.status(404).json({ error: 'Nenhuma aula encontrada para esta disciplina' });
    }

    const attendance = await knex('attendance')
      .join('students', 'attendance.student_id', '=', 'students.id')
      .join('lessons', 'attendance.lesson_id', '=', 'lessons.id')
      .whereIn('attendance.lesson_id', lessons.map(lesson => lesson.id))
      .select('attendance.id', 'students.name as student_name', 'lessons.date as lesson_date', 'attendance.status', 'attendance.justification');

    return res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar presenças por disciplina' });
  }
};