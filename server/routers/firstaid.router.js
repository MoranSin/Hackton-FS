const { Router } = require('express');
const { firstAidController } = require('../controllers/firstaid.controller');

const firstAidRouter = new Router();

firstAidRouter.get('/', firstAidController.getAllFirstAid);
firstAidRouter.get('/:firstAidId', firstAidController.getFirstAidById);
firstAidRouter.post('/', firstAidController.createFirstAid);
firstAidRouter.put('/:firstAidId', firstAidController.updateFirstAid);
firstAidRouter.delete('/:firstAidId', firstAidController.deleteFirstAid);

module.exports = { firstAidRouter };