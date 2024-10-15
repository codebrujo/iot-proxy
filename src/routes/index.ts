import * as express from 'express'
import appRoutes from './app.route'
import deviceRoutes from './device.route'
import reportRoutes from './report.route'
const router = express.Router()

router.use('/', appRoutes)
router.use('/device', deviceRoutes)
router.use('/report', reportRoutes)

export default router