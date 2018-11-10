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

    parent.save(function (err, newParent) {
        if(newParent)
            res.send({
                message:    'Parent successfully created !',
                parent:     newParent
            });

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            });
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

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            });

        if(parent){
            res.send({
                message:    'Parent successfully recovered !',
                parent:     parent
            });
        } else {
            res.status(200).send({
                message:    'Parent does not exist !',
                parent:     null
            });
        }

    });
};

/* UPDATE parent. */
updateParent = function (req, res, next) {

    const searchQuery = { id: req.body.id };

    const updatedParent = {
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber
    };

    Parent.findOneAndUpdate(searchQuery, updatedParent, function (err, parent) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            });

        if(parent){
            res.send({
                message:    'Parent successfully updated !',
                parent:     parent
            });
        } else {
            res.status(200).send({
                message:    'Parent does not exist !',
                parent:     null
            });
        }

    });
};

/* DELETE parent. */
removeParent = function (req, res, next) {

    const searchQuery = { id: req.body.id };

    Parent.findOneAndRemove(searchQuery, function (err, parent) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                parent:     null
            });

        if(parent){
            res.send({
                message:    'Parent successfully removed !',
                parent:     parent
            });
        } else {
            res.status(200).send({
                message:    'Parent does not exist !',
                parent:     null
            });
        }

    });
};

module.exports = {
    create:     createParent,
    searchAll:  searchAllParents,
    searchById: searchParentById,
    update:     updateParent,
    delete:     removeParent
};