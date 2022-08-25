import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { changeDetailsRoutes } from './routes/change-details.js'

const router = express.Router()
exampleWizardRoutes(router)
export default router

router.post('/alert', function (req, res) {
    console.log(req.session.data.alert);
    req.session.data.alert = '';
    console.log(req.body.alert);
}); 

