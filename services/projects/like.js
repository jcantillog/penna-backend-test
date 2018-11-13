var Project = require('../../models/project');
var Likes = require('../likes');

/* Increase project likes number. */
increaseProjectLikes = async function (req, res, next) {

    const searchQuery = { _id: req.body.project_id };
    const like = await Likes.createLike(req, res, next);

    const updatedProjectLikes = {
        $inc: {
            likesNumber: 1
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectLikes, function (err, project) {

        if(err)
            res.status(500).json({
                message:        'An error has occurred: '+err,
                newLikesNumber: null,
                lastLike:       null
            });

        if(project){
            res.send({
                message:        'Project likes successfully increased !',
                newLikesNumber: project.likesNumber + 1,
                lastLike:       like
            });
        } else {
            res.status(200).send({
                message:        'Project does not exist !',
                newLikesNumber: null,
                lastLike:       null
            });
        }

    });
};

/* Decrease project likes number. */
decreaseProjectLikes = async function (req, res, next) {

    const searchQuery = { _id: req.body.project_id };
    const like = await Likes.removeLike(req, res, next);

    const updatedProjectLikes = {
        $inc: {
            likesNumber: -1
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectLikes, function (err, project) {

        if(err)
            res.status(500).json({
                message:        'An error has occurred: '+err,
                newLikesNumber: null,
                lastLike:       null
            });

        if(project){
            res.send({
                message:        'Project likes successfully decreased !',
                newLikesNumber: project.likesNumber - 1,
                lastLike:       like
            });
        } else {
            res.status(200).send({
                message:        'Project does not exist !',
                newLikesNumber: null,
                lastLike:       null
            });
        }

    });
};

module.exports = {
    increaseLikes:  increaseProjectLikes,
    decreaseLikes:  decreaseProjectLikes
};