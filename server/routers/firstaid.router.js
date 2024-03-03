const { Router } = require('express');
const { firstAidController } = require('../controllers/firstaid.controller');

const firstAidRouter = new Router();

firstAidRouter.get('/', firstAidController.getAllFirstAidInstructions);
firstAidRouter.get('/:firstAidId', firstAidController.getFirstAidInstruction);
firstAidRouter.post('/', firstAidController.createFirstAidInstruction);
firstAidRouter.put('/:firstAidId', firstAidController.updateFirstAidInstructions);
firstAidRouter.delete('/:firstAidId', firstAidController.deleteFirstAidInstructions);

module.exports = { firstAidRouter };