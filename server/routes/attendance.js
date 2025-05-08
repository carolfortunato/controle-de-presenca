const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Rota para criar presença
router.post('/', attendanceController.createAttendance);

// Rota para obter todas as presenças
router.get('/', attendanceController.getAllAttendance);

// Rota para obter presenças de um aluno específico
router.get('/student/:student_id', attendanceController.getAttendanceByStudent);

// Rota para obter presenças de uma aula específica
router.get('/lesson/:lesson_id', attendanceController.getAttendanceByLesson);

// Rota para obter presenças de uma disciplina específica
router.get('/discipline/:discipline_id', attendanceController.getAttendanceByDiscipline);
module.exports = router;
