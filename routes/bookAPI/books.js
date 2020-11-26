const router = require('express').Router();
const {
    findAll,
    create,
    findById,
    update,
    remove,

} = require('../../controllers/booksController');

router.route('/')
.get(findAll)
.post(create);

router.route('/:id')
    .get(findById)
    .put(update)
    .delete(remove)


module.exports = router;
