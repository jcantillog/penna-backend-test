var Project = require('../../models/project');

/* CREATE project. */
createProject = function (req, res, next){
    var project = new Project({
        title: req.body.title,
        description: req.body.description,
        parent_id: req.body.parent_id
    });

    project.save(function (err, newProject) {
        if(newProject)
            res.send({
                message:    'Project successfully created !',
                project:     newProject
            });

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                project:     null
            });
    })
};

/* GET all parent projects. */
searchAllParentProjects = async function (req, res, next) {
    const searchQuery = { parent_id: req.params.parent_id };
    const allParentProjects = await Project.find(searchQuery);
    res.send({message: 'Projects successfully recovered !', projects: allParentProjects});
};

/* GET project by title or description. */
searchProjectsByInput = function (req, res, next) {
    const title = req.query.title;
    const description = req.query.description;
    const parent_id = req.params.parent_id;
    const titleSearchExpression = { $regex: '.*' + title + '.*', $options: 'i' };
    const descriptionSearchExpression = { $regex: '.*' + description + '.*', $options: 'i' };

    Project.find(
        {
            $and: [
                { parent_id: parent_id },
                {
                    $or: [
                        { title: titleSearchExpression },
                        { description: descriptionSearchExpression }
                    ]
                }
            ]
        }, function (err, projects) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                projects:     null
            });

        if(projects){
            res.send({
                message:    'Projects successfully recovered !',
                projects:     projects
            });
        } else {
            res.status(200).send({
                message:    'No matching result !',
                projects:     null
            });
        }

    });
};

/* UPDATE project. */
updateProjectInfo = function (req, res, next) {

    const searchQuery = { _id: req.body._id };

    const updatedProject = {
        title: req.body.title,
        description: req.body.description
    };

    Project.findOneAndUpdate(searchQuery, updatedProject, function (err, project) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                project:     null
            });

        if(project){
            res.send({
                message:    'Project successfully updated !',
                project:     project
            });
        } else {
            res.status(200).send({
                message:    'Project does not exist !',
                project:     null
            });
        }

    });
};

/* DELETE project. */
removeProject = function (req, res, next) {

    const searchQuery = { _id: req.body._id };

    Project.findOneAndRemove(searchQuery, function (err, project) {

        if(err)
            res.status(500).json({
                message:    'An error has occurred: '+err,
                project:     null
            });

        if(project){
            res.send({
                message:    'Project successfully removed !',
                project:     project
            });
        } else {
            res.status(200).send({
                message:    'Project does not exist !',
                project:     null
            });
        }

    });
};

module.exports = {
    create:             createProject,
    searchAll:          searchAllParentProjects,
    searchByFilter:     searchProjectsByInput,
    updateInfo:         updateProjectInfo,
    delete:             removeProject
};