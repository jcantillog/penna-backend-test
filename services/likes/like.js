var Like = require('../../models/likes');

/* CREATE like. */
exports.createLike = async function (req, res, next){

    var like = new Like({
        parent_id: req.body.parent_id,
        project_id: req.body.project_id,
    });

    const newLike = await like.save();

    if(newLike){
        return Promise.resolve({
            message:    'Like successfully created !',
            like:       newLike
        });
    } else {
        return Promise.resolve({
            message:    'An error has occurred, please try again.',
            like:       null
        });
    }

};

/* GET parent transfer. */
exports.removeLike = async function (req, res, next) {
    const searchQuery = { $and: [ {parent_id: req.body.parent_id} , {project_id: req.body.project_id} ] };

    const removedLike = await Like.findOneAndRemove(searchQuery);

    if(removedLike){
        return Promise.resolve({
            message:    'Like successfully removed !',
            like:       removedLike
        });
    } else {
        return Promise.resolve({
            message:    'Like does not exist !',
            like:       null
        });
    }
};