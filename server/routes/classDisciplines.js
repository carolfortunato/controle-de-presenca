const express = require('express');
const router = express.Router();
const classDisciplineController = require('../controllers/classDisciplineController');

// GET all class-discipline relations
router.get('/', classDisciplineController.getAll);

// GET all disciplines of a specific class
router.get('/:class_id', classDisciplineController.getDisciplinesByClass);

// POST a new class-discipline relation
router.post('/', classDisciplineController.create);

module.exports = router;
