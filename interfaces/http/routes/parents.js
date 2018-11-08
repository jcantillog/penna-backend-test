var express = require('express');
var router = express.Router();

var { parentsServices } = require('../../../services');

/* CREATE parent. */
router.post('/', function(req, res, next) {
    try {
        parentsServices.crud.create(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* GET parents listing. */
router.get('/', function(req, res, next) {
    try {
        parentsServices.crud.searchAll(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* GET parent by id. */
router.get('/:id', function(req, res, next) {
    try {
        parentsServices.crud.searchById(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;