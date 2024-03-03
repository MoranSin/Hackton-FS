const mongoose = require('mongoose');
const {
    findInstructions,
    retrieveInstruction,
    createInstruction,
    updateInstruction,
    deleteInstruction,
} = require('../repositories/firstaid.repository');
const { NotFoundError, BadRequestError } = require('../errors/errors');

exports.firstAidController = {
    async getAllFirstAidInstructions(req, res, next) {
        try {
            const firstAids = await findInstructions();
            if (!firstAids || firstAids.length === 0) throw new NotFoundError('firstAids');
            res.status(200).json(firstAids);
        } catch (error) {
            next(error);
        }
    },

    async getFirstAidInstruction(req, res, next) {
        const { firstAidId } = req.params;
        try {
            const isId = mongoose.isValidObjectId(firstAidId);
            if (!isId) throw new BadRequestError('id');
            const firstAid = await retrieveInstruction(firstAidId);
            if (!firstAid || firstAid.length === 0) throw new NotFoundError(`First Aid with id <${firstAidId}>`);
            res.status(200).json(firstAid);
        } catch (error) {
            next(error);
        }
    },

    async createFirstAidInstruction(req, res, next) {
        try {
            if (Object.keys(req.body).length === 0) throw new BadRequestError('create');
            const firstAid = await createInstruction(req.body);
            res.status(200).json(firstAid);
        } catch (error) {
            if (error.name === 'ValidationError') {
                error.status = 400;
            }
            next(error);
        }
    },

    async deleteFirstAidInstructions(req, res, next) {
        try {
            const { firstAidId } = req.params;
            const isId = mongoose.isValidObjectId(firstAidId);
            if (!isId) throw new BadRequestError('id');
            const firstAid = await deleteInstruction(firstAidId);
            if (!firstAid || firstAid.length === 0) throw new NotFoundError(`First Aid with id <${firstAidId}>`);
            res.status(200).json(firstAid);
        } catch (error) {
            next(error);
        }
    },

    async updateFirstAidInstructions(req, res, next) {
        try {
            const { firstAidId } = req.params;
            const isId = mongoose.isValidObjectId(firstAidId);
            if (!isId) throw new BadRequestError('id');
            if (Object.keys(req.body).length === 0) throw new BadRequestError('update');
            const firstAid = await updateInstruction(firstAidId, req.body);
            if (!firstAid || firstAid.length === 0) throw new NotFoundError(`First Aid with id <${firstAidId}>`);
            res.status(200).json(firstAid);
        } catch (error) {
            next(error);
        }
    },
};