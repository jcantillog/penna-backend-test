var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model to manage Transference collection, saving transfer history.

var schema = new Schema({
    donorParent_id: {type: String},
    project_id: {type: String},
    amount: {type: Number}
});

module.exports = mongoose.model('Transference', schema);