var Project = require('../../models/project');

/* UPDATE project balance. */
updateProjectBalance = async function (req, res, next) {

    const searchQuery = { _id: req.body._id };

    const updatedProjectBalance = {
        $inc: {
            balanceAmount: req.body.balanceAmount
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectBalance, function (err, project) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                newBalance: null
            });

        if(project){
            res.send({
                message:    'Project balance successfully updated !',
                newBalance: req.body.balanceAmount + project.balanceAmount
            });
        } else {
            res.status(200).send({
                message:    'Project does not exist !',
                newBalance: null
            });
        }

    });
};

module.exports = {
    updateBalance:  updateProjectBalance
};