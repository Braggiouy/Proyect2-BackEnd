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

function deleteMachineMaintenance (req, res) {
  machineMaintenancesModel
    .findByIdAndDelete(req.params.id)
    .then(maintenance => {
      res.status(200).send(maintenance + 'has been deleted')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error deleting maintenance' }, err)
    })
}

module.exports = {
  getAllMachineMaintenances,
  getMachineMaintenancesByMachineId,
  addMachineMaintenance,
  updateMachineMaintenance,
  deleteMachineMaintenance
}
