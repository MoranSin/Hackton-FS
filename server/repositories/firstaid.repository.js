const MongoStorage = require('../db/mongo.storage');

const mongoStorage = new MongoStorage('firstaid');
const findInstructions = () => mongoStorage.find({});

const retrieveInstruction = (id) => mongoStorage.retrieve({ _id: id });

const createInstruction = (instruction) => mongoStorage.create(instruction);

const updateInstruction = (id, instruction) => mongoStorage.update({ _id: id }, instruction);

const deleteInstruction = (id) => mongoStorage.delete({ _id: id });

module.exports = {
    findInstructions, retrieveInstruction, createInstruction, updateInstruction, deleteInstruction,
};
