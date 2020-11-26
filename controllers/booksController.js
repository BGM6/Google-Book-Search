const db = require('../models')

//Methods to query books to be exported
module.exports = {

    findAllBooks: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    findBookById: function (req, res) {
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

    updateOne: function (req, res) {
        db.Book
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(400).json('Error: ' + err))
    },

    remove: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbBook => dbBook.deleteOne)
            .then(dbBook => res.send(dbBook))
            .catch(err => res.status(400).json('Error' + err))

    },
};

