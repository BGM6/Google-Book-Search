const db = require('../models')

//Methods to query books to be exported
module.exports = {

    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    findById: function (req, res) {
        db.Book
            .findById(req.params._id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    update: function (req, res) {
        db.Book
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err))
    },

    delete: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbBook => dbBook.deleteOne)
            .then(dbBook => res.send(dbBook))
            .catch(err => res.status(400).json('Error' + err))

    },
};

