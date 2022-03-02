import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'



// GET /flights/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.get('/:id', flightsCtrl.edit)

router.patch('/:id', flightsCtrl.update)

export {
  router
}

