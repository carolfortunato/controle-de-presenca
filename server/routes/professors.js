const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.getAllProfessors);
router.post('/', professorController.createProfessor);

module.exports = router;
