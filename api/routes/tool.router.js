const toolRouter = require('express').Router()
const { checkAuth, checkAdmin } = require('../../utils/auth')
const { deleteToolMaintenance } = require('../controllers/tool.maintenances.controller')

const {
  addTool,
  getAllTools,
  getTool,
  updateTool,
  deleteTool,
  getToolByStatus

} = require('../controllers/tool.controller')

toolRouter.get('/', checkAuth, checkAdmin, getAllTools)
toolRouter.get('/:id', checkAuth, checkAdmin, getTool)
toolRouter.get('/status/:busy', checkAuth, checkAdmin, getToolByStatus)
toolRouter.post('/', checkAuth, checkAdmin, addTool)
toolRouter.put('/:id', checkAuth, checkAdmin, updateTool)
toolRouter.delete('/:id', checkAuth, checkAdmin, deleteToolMaintenance, deleteTool)

module.exports = { toolRouter }
