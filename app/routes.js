import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { changeDetailsRoutes } from './routes/change-details.js'

const router = express.Router()
exampleWizardRoutes(router)

export default router
