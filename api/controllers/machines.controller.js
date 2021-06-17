const { machineModel } = require('../models/machines.model')

function addMachine (req, res) {
  machineModel
    .create(req.body)
    .then(machine => res.status(200).json(machine))
    .catch(err => res.status(500).json({ msg: 'Error creating machine or vehicle', err }))
}

function getAllMachines (req, res) {
  machineModel
    .find()
    .then(machines => res.status(200).json(machines))
    .catch(err => res.status(500).json({ msg: 'Error', err }))
}

function getMachineById (req, res) {
  machineModel
    .findById(req.params.id)
    .then(machine => res.status(200).json(machine))
    .catch(err => res.status(500).json({ msg: 'Error', err }))
}

function getMachineByStatus (req, res) {
  machineModel
    .find({ busy: req.params.busy })
    .select({ busy: 1, addressBuildingSite: 1 })
    .then(machines => {
      res.status(200).json(machines)
    })
    .catch(err =>
      res.status(500).json({ msg: 'Error', err })
    )
}

function updateMachine (req, res) {
  machineModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(machine => res.status(200).json(machine)
    )
    .catch(err =>
      res.status(500).json({ msg: 'Error', err })
    )
}

function deleteMchine (req, res) {
  console.log('deleteMchine')
  machineModel
    .findByIdAndDelete(req.params.id)
    .then(machine => res.status(200).send(machine.type + ' has been deleted'))
    .catch(err =>
      res.status(500).json({ msg: 'Error', err })
    )
}

function checkMachineById (req, res, next) {
  machineModel
    .findById(req.params.id)
    .then((machine) => {
      if (!machine) {
        res.json('you cannot maintain what does not exist')
      } else {
        res.locals.machine = machine
        next()
      }
    })
    .catch((err) => res.json(err))
}

module.exports = {
  addMachine,
  getAllMachines,
  getMachineByStatus,
  getMachineById,
  updateMachine,
  deleteMchine,
  checkMachineById
}
