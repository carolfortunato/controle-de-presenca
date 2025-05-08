const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// GET all lessons of a specific discipline
router.get('/discipline/:discipline_id', lessonController.getLessonsByDiscipline);

// GET all lessons of a specific class (through discipline)
router.get('/class/:class_id', lessonController.getLessonsByClass);

// POST a new lesson associated with a discipline
router.post('/', lessonController.create);

module.exports = router;
