const { machineModel } = require('../models/machines.model')

function addMachine (req, res) {
  machineModel
    .create(req.body)
    .then(machine => res.status(200).json(machine))
    .catch(err => res.status(500).json({ msg: 'Error creating machine or vehicle', err }))
}

module.exports = {
  addMachine
}
