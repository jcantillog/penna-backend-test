var Project = require('../../models/project');

/* Increase project likes number. */
increaseProjectLikes = function (req, res, next) {

    const searchQuery = { _id: req.body._id };

    const updatedProjectLikes = {
        $inc: {
            likesNumber: 1
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectLikes, function (err, project) {

        if(err)
            res.status(500).json({
                message:        'An error has occurred: '+err,
                newLikesNumber: null
            });

        if(project){
            res.send({
                message:        'Project likes successfully increased !',
                newLikesNumber: project.likesNumber + 1
            });
        } else {
            res.status(200).send({
                message:        'Project does not exist !',
                newLikesNumber: null
            });
        }

    });
};

/* Decrease project likes number. */
decreaseProjectLikes = function (req, res, next) {

    const searchQuery = { _id: req.body._id };

    const updatedProjectLikes = {
        $inc: {
            likesNumber: -1
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectLikes, function (err, project) {

        if(err)
            res.status(500).json({
                message:        'An error has occurred: '+err,
                newLikesNumber: null
            });

        if(project){
            res.send({
                message:        'Project likes successfully decreased !',
                newLikesNumber: project.likesNumber - 1
            });
        } else {
            res.status(200).send({
                message:        'Project does not exist !',
                newLikesNumber: null
            });
        }

    });
};

module.exports = {
    increaseLikes:  increaseProjectLikes,
    decreaseLikes:  decreaseProjectLikes
};