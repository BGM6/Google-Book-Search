const db = require('../models')

//Methods to query books to be exported
module.exports = {
    findAllQuery: function (req, res) {
        db.Books.find(req.query)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    findByIdQuery: function (req, res) {
        db.Books.findById(req.params._id)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    createQuery: function (req, res) {
        db.Books.create(req.body)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    updateQuery: function (req, res) {
        db.Books.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(400).json('Error: ' + err))
    },

    removeQuery: function (req, res) {
        db.Books.findById(req.params._id)
            .then(dbBooks => dbBooks.remove)
            .then(dbBooks => res.send(dbBooks))
            .catch(err => res.status(400).json('Error' + err))

    },
};
