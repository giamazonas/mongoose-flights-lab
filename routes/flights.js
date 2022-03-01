import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.render()
// })

// GET /flights/new
router.get('/index', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)
router.post(':id', flightsCtrl.addSeat)
router.get('/:id', flightsCtrl.edit)
// router.get('id/edit', flightsCtrl.edit)
router.patch('/:id', flightsCtrl.update)

export {
  router
}

