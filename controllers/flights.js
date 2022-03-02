// import { escapeRegExpChars } from 'ejs/lib/utils'
import methodOverride from 'method-override'
import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'


function newFlight(req, res) {
  res.render('flights/new', {
    title: 'New Flight',
  })
}

function create(req, res) {
  for(let key in req.body){
    if (req.body[key] === "") delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(error) {
    console.log(error)
    if (error) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function createTicket(req, res){
  Flight.findById(req.params.id, function(error, flight){
    flight.tickets.push(req.body)
    flight.save(function(error){
      res.redirect(`/flights/${req.params.id}`)
    })
  })
}

function addSeat(req, res) {
  Flight.findById(req.params.id, function(error, tickets) {
    tickets.seat.push(req.body)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function index(req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error: error,
      flights: flights,
      title: 'All Flights',
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate('meal')
    .exec(function(error, flight) {
      Meal.find({_id: {$nin:flight.meal}},function(error, meal) {
        res.render('flights/show', { title: 'Meal Selection', 
        meal: meal, 
        flight })
      })
    })
}

function edit(req, res) {
  Flight.findById(req.params.id, function (error, flight) {
    res.render("flights/show", {
      flight, 
      error,
      title: "Choose a differet seat.."
    })
  })
}

function update(req, res) {
  req.body.tickets = !!req.body.tickets
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(error, flight) {
    res.redirect('/flights/:id')
  })
}

function addMeal(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    flight.meal.push(req.body.mealId)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  addSeat,
  edit,
  update,
  createTicket,
  addMeal,

}