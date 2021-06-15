const { toolMaintenancesModel } = require('../models/tool.maintenances.model')

function getAllToolMaintenances (req, res) {
  toolMaintenancesModel
    .find()
    .then(maintenances => {
      res.status(200).json(maintenances)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

function getToolMaintenanceById (req, res) {
  toolMaintenancesModel
    .findById(req.params.id)
    .then((maintenance) => res.json(maintenance))
    .catch((err) => res.json(err))
}

function addToolMaintenance (req, res) {
  toolMaintenancesModel
    .create(req.body)
    .then((maintenance) => res.json(maintenance))
    .catch((err) => res.json(err))
}

function updateToolMaintenance (req, res) {
  toolMaintenancesModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(maintenance => {
      res.status(200).send(maintenance.maintenance + 'has been updated')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error updating maintenance' }, err)
    })
}

function deleteToolMaintenance (req, res) {
  toolMaintenancesModel
    .findByIdAndDelete(req.params.id)
    .then(maintenance => {
      res.status(200).send(maintenance.maintenance + 'has been deleted')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error deleting maintenance' }, err)
    })
}

module.exports = {
  getAllToolMaintenances,
  getToolMaintenanceById,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance
}
