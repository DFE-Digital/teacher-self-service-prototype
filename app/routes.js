import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { changeDetailsRoutes } from './routes/change-details.js'

const router = express.Router()
exampleWizardRoutes(router)
export default router


 router.post('/recieved-data', (req, res) => {
    req.session.data['account-data'] = JSON.parse(req.body['account-data'])
    res.redirect('/v3/dashboard/index')
  }) 