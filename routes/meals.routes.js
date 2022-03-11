const express = require('express')
const router = express.Router()
const mealsController = require('../controllers/meals.controller')
const verifyToken = require('../middleware/validate-token.middleware')

router.post('/', [verifyToken.verifyToken, verifyToken.isAdmin], mealsController.createMeals)
router.get('/', mealsController.getMeals)
router.get('/:mealsId', mealsController.getMealsId)
router.put('/:mealsId', [verifyToken.verifyToken, verifyToken.isAdmin], mealsController.updateMealsById)
router.delete('/:mealsId', [verifyToken.verifyToken, verifyToken.isAdmin],  mealsController.deleteMealsById)

module.exports = router