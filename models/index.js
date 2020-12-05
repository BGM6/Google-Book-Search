//This allows the developer to require a whole directory
//In this instance I can require the whole models folder with this index.js export

const db = require("../models");

module.exports = {
    findAllSaved: (req, res) => {
        db.SavedBooks
            .find()
            .then(function(result){
                res.json(result)
            }).catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.SavedBooks
            .create({
                title: req.body.title,
                link: req.body.link,
                thumbnail: req.body.thumbnail,
                author: req.body.author,
                description: eq.body.description,
                key: req.body.key
            }).then(res.end())
    },
    remove: (req, res) => {
        db.SavedBooks
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel=> res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
