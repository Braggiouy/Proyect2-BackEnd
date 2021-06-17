const { machineMaintenancesModel } = require('../models/machine.maintenances.model')

function getAllMachineMaintenances (req, res) {
  machineMaintenancesModel
    .find()
    .then(maintenances => {
      res.status(200).json(maintenances)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

function getMachineMaintenancesByMachineId (req, res) {
  machineMaintenancesModel
    .find({ machineId: req.params.machineId })
    .then((maintenance) => res.json(maintenance))
    .catch((err) => res.json(err))
}

function addMachineMaintenance (req, res) {
  machineMaintenancesModel
    .create(req.body)
    .then((maintenance) => res.json(maintenance))
    .catch((err) => res.json(err))
}

function updateMachineMaintenance (req, res) {
  machineMaintenancesModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(maintenance => {
      res.status(200).send(maintenance + 'has been updated')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error updating maintenance' }, err)
    })
}

function deleteMachineMaintenance (req, res, next) {
  console.log(req.params.id)
  machineMaintenancesModel
    .deleteMany({ machineId: req.params.id })
    .then(maintenance => {
      res.locals.maintenance = maintenance
      next()
    })
    .catch(err => {
      res.status(500).json({ err: 'Error deleting maintenance' }, err)
    })
}

function getMechanicMaintenaceListMachines (req, res) {
  machineMaintenancesModel
    .find({ userId: req.params.userId })
    .then(maintenance => {
      res.status(200).send(maintenance)
    })
    .catch(err => {
      res.status(500).json({ err: 'Error' }, err)
    })
}

function updateMachineMaintenanceMechanic (req, res) {
  console.log(res.locals.user.id)
  machineMaintenancesModel
    .findOneAndUpdate({ $and: [{ _id: req.params.id }, { userId: res.locals.user.id }] }, req.body, { new: true })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).json({ err: 'Error' }, err)
    })
}

module.exports = {
  getAllMachineMaintenances,
  getMachineMaintenancesByMachineId,
  addMachineMaintenance,
  updateMachineMaintenance,
  deleteMachineMaintenance,
  getMechanicMaintenaceListMachines,
  updateMachineMaintenanceMechanic
}
