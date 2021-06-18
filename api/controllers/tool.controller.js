const { toolModel } = require('../models/tools.model')

function getAllTools (req, res) {
  toolModel
    .find()
    .then(tools => {
      res.status(200).json(tools)
    })
    .catch(err =>
      res.status(500).json({ err: 'Error' }, err)
    )
}

function getToolByStatus (req, res) {
  toolModel
    .find({ busy: req.params.busy })
    .select({ busy: 1, addressBuildingSite: 1 })
    .then(tool => {
      res.status(200).json(tool)
    })
    .catch(err =>
      res.status(500).json({ msg: 'Error', err })
    )
}

function addTool (req, res) {
  toolModel
    .create({
      type: req.body.type,
      brand: req.body.brand,
      model: req.body.model,
      serialNumber: req.body.serialNumber,
      acquisitionDate: req.body.acquisitionDate,
      provider: req.body.provider,
      busy: req.body.busy,
      addressBuildingSite: req.body.addressBuildingSite
    })
    .then(tool => {
      return res.json(tool)
    })
    .catch(err => {
      res.status(500).json({ msg: 'Error creating tool', err })
    })
}

function updateTool (req, res) {
  toolModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

function deleteTool (req, res) {
  toolModel
    .findByIdAndDelete(req.params.id)
    .then(tool => {
      res.status(200).send(tool.type + ' has been deleted')
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

function getTool (req, res) {
  toolModel
    .findById(req.params.id)
    .then((tool) => res.status(200).json(tool))
    .catch((err) => res.json(err))
}

function checkToolById (req, res, next) {
  toolModel
    .findById(req.params.id)
    .then((tool) => {
      if (!tool) {
        res.json('you cannot maintain what does not exist')
      } else {
        res.locals.tool = tool
        next()
      }
    })
    .catch((err) => res.json(err))
}

module.exports = {
  getAllTools,
  getToolByStatus,
  addTool,
  updateTool,
  deleteTool,
  getTool,
  checkToolById
}
