var Parent = require('../../models/parent');

/* CREATE parent. */
createParent = function (req, res, next){
    var parent = new Parent({
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber
    });

    parent.save(function (err, callback) {
        if(callback)
            res.send({
                message:    'Parent successfully created !',
                parent:     callback
            })

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            })
    })
};

/* GET all parents. */
searchAllParents = async function (req, res, next) {
    const allParents = await Parent.find({});
    res.send(allParents);
};

/* GET parent by id. */
searchParentById = function (req, res, next) {
    Parent.findOne({id: req.params.id}, function (err, parent) {

        if(parent)
            res.send({
                message:    'Parent successfully recovered !',
                parent:     parent
            });

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            })

        res.status(204).json({
            message:    'Parent does not exist !',
            parent:     null
        })

    });
};

module.exports = {
    create:     createParent,
    searchAll:  searchAllParents,
    searchById: searchParentById
};