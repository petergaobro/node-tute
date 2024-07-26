const { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

const createPeoplePostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
}

const updatePeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((np) => {
        if (np.id === Number(id)) {
            np.name = name
        }
        return np;
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePeople = (req, res) => {
    const person = people.find((p) => p.id === Number(req.params.id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    // res.status(200).json({ success: true, msg: 'success deleted' })
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}