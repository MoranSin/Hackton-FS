const { Schema, model } = require('mongoose');

const firstAidSchema = new Schema({
injuryType: { type: String, required: true },
description: { type: String, required: true },
    instructions:{ type: [String], required: true },
}, { collection: 'FirstAid' });

module.exports = model('firstAid', firstAidSchema);
