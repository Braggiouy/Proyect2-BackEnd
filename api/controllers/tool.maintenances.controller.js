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

function getToolMaintenancesByToolId (req, res) {
  toolMaintenancesModel
    .find({ toolId: req.params.id })
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
      res.status(200).send(maintenance + 'has been updated')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error updating maintenance' }, err)
    })
}

function deleteToolMaintenance (req, res) {
  toolMaintenancesModel
    .findByIdAndDelete(req.params.id)
    .then(maintenance => {
      res.status(200).send(maintenance + 'has been deleted')
    })
    .catch(err => {
      res.status(500).json({ err: 'Error deleting maintenance' }, err)
    })
}

function getMechanicMaintenaceList (req, res) {
  toolMaintenancesModel
    .find({ userId: req.params.userId })
    .then(maintenance => {
      res.status(200).send(maintenance)
    })
    .catch(err => {
      res.status(500).json({ err: 'Error' }, err)
    })
}

function updateToolMaintenanceMechanic (req, res) {
  toolMaintenancesModel
    .findOneAndUpdate({ $and: [{ _id: req.params.id }, { userId: res.locals.user.id }] }, req.body, { new: true })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).json({ err: 'Error' }, err)
    })
}

module.exports = {
  getAllToolMaintenances,
  getToolMaintenancesByToolId,
  addToolMaintenance,
  updateToolMaintenance,
  deleteToolMaintenance,
  getMechanicMaintenaceList,
  updateToolMaintenanceMechanic
}
