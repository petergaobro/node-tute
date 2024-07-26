const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople } = require('../controllers/people')

// router.get('/get', getPeople)

// router.post('/add', createPeople)

// router.post('/postman/add', createPeoplePostman)

// router.put('/edit/:id', updatePeople)

// router.delete('/delete/:id', deletePeople)


router.route('/get').get(getPeople)
router.route('/add').post(createPeople)
router.route('/postman/add').post(createPeoplePostman)
router.route('/edit/:id').put(updatePeople)
router.route('/delete/:id').delete(deletePeople)



module.exports = router