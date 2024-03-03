const { Router } = require('express');
const { firstAidController } = require('../controllers/firstaid.controller');

const firstAidRouter = new Router();

firstAidRouter.get('/', reportsController.getAllReports);
firstAidRouter.get('/:firstAidId', reportsController.getReportById);
firstAidRouter.post('/', reportsController.createReport);
firstAidRouter.put('/:firstAidId', reportsController.updateReport);
firstAidRouter.delete('/:firstAidId', reportsController.deleteReport);

module.exports = { firstAidRouter };