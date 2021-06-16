const toolRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils')
const { checkToolById } = require('../controllers/tool.controller')

const {
  getAllTools,
  addTool,
  updateTool,
  deleteTool,
  getTool

} = require('../controllers/tool.controller')

toolRouter.get('/', checkAuth, checkAdmin, getAllTools)
toolRouter.get('/:id', checkAuth, checkAdmin, getTool)
toolRouter.post('/', checkAuth, checkAdmin, addTool)
toolRouter.put('/:id', checkAuth, checkAdmin, updateTool)
toolRouter.delete('/:id', checkAuth, checkAdmin, checkToolById, deleteTool)

module.exports = { toolRouter }
