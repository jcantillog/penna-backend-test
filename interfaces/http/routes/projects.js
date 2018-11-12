var express = require('express');
var router = express.Router();

var { projectsServices } = require('../../../services');

/* CREATE project. */
router.post('/', function(req, res, next) {
    try {
        projectsServices.crud.create(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* GET projects listing. */
router.get('/:parent_id', function(req, res, next) {
    try {
        projectsServices.crud.searchAll(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* GET projects by filter. */
router.get('/:parent_id/filter', function(req, res, next) {
    try {
        projectsServices.crud.searchByFilter(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* UPDATE parent */
router.put('/', function(req, res, next) {
    try {
        projectsServices.crud.updateInfo(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/* DELETE parent */
router.delete('/', function(req, res, next) {
    try {
        projectsServices.crud.delete(req, res, next);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;