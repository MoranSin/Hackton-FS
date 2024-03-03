const { Schema, model } = require('mongoose');

const instructionSchema = new Schema({
    instruction: { type: Array, required: true }
}, { collection: 'instructions' });

const firstAidSchema = new Schema({
injuryType: { type: String, required: true },
description: { type: String, required: true },
    instructions:instructionSchema
}, { collection: 'FirstAid' });

module.exports = model('firstAid', firstAidSchema);
