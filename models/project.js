var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model to manage Project collection, saving parents projects.

var schema = new Schema({
    title: {type: String},
    description: {type: String},
    creationDate: {type: Date, default: Date.now},
    likesNumber: {type: Number, default: 0},
    balanceAmount: {type: Number, default: 0},
    parent_id: {type: String, required: true}
});

module.exports = mongoose.model('Project', schema);