var Transference = require('../../models/transferences');

/* CREATE transference. */
createTransference = async function (req, res, next){

    var transference = new Transference({
        donorParent_id: req.body.donorParent_id,
        project_id: req.body.project_id,
        amount: req.body.amount
    });

    const newTransference = await transference.save();

    if(newTransference){
        return Promise.resolve({
            message:        'Transference successfully created !',
            transference:   newTransference
        });
    } else {
        return Promise.resolve({
            message:        'An error has occurred, please try again.',
            transference:   null
        });
    }

};

/* GET parent transfer. */
searchProjectTransferHistory = async function (req, res, next) {
    const searchQuery = { project_id: req.params.project_id };
    const transferHistory = await Transference.find(searchQuery);
    res.send({message: 'Transfer history successfully recovered !', projects: transferHistory});
};


module.exports = {
    create:                 createTransference,
    searchProjectTransfer:  searchProjectTransferHistory
};