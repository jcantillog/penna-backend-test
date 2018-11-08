var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: String},
    name: {type: String},
    lastName: {type: String},
    birthDate: {type: Date},
    phoneNumber: {type: String}
});

module.exports = mongoose.model('Parent', schema);