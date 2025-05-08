const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// GET todas as turmas
router.get('/', classController.getAllClasses);

// POST nova turma
router.post('/', classController.createClass);

module.exports = router;
