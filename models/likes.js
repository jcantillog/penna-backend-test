var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model to manage Like collection, saving likes history.

var schema = new Schema({
    parent_id: {type: String},
    project_id: {type: String},
    creationDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Like', schema);