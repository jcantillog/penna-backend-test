var Project = require('../../models/project');
var { crud } = require('../transferences');

/* UPDATE project balance. */
updateProjectBalance = async function (req, res, next) {

    const searchQuery = { _id: req.body.project_id };
    const transference = await crud.create(req, res, next);

    const updatedProjectBalance = {
        $inc: {
            balanceAmount: req.body.amount
        }
    };

    Project.findOneAndUpdate(searchQuery, updatedProjectBalance, function (err, project) {

        if(err)
            res.status(500).json({
                message:            'An error has occurred: '+err,
                newBalance:         null,
                lastTransference:   null
            });

        if(project){
            res.send({
                message:            'Project balance successfully updated !',
                newBalance:         project.balanceAmount + req.body.amount,
                lastTransference:   transference
            });
        } else {
            res.status(200).send({
                message:            'Project does not exist !',
                newBalance:         null,
                lastTransference:   null
            });
        }

    });
};

module.exports = {
    updateBalance:  updateProjectBalance
};