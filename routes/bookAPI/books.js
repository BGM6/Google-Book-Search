const router = require('express').Router();
const {
    findAllBooks,
    create,
    findBookById,
    updateOne,
    remove,

} = require('../../controllers/booksController');

router.route('/')
.get(findAllBooks)
.post(create);

router.route('/:id')
    .get(findBookById)
    .put(updateOne)
    .remove(remove)


module.exports = router;
s
