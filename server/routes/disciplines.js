const express = require('express');
const router = express.Router();
const disciplineController = require('../controllers/disciplineController');

// GET todas as disciplinas
router.get('/', disciplineController.getAllDisciplines);

// POST nova disciplina
router.post('/', disciplineController.createDiscipline);

module.exports = router;
