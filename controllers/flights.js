import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })

  function index(req, res) {
    Flight.find({}, function (error, flights) {
      res.render("flights/index", {
        error: error,
        flights: flights,
      })
    })
  }
  

export {
  newFlight as new,
  create,
  index,
}