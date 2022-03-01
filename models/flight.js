import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 150, max: 999}
})


const flightSchema = new Schema ({
  airline: {
    type: String,
    required: true,
  },
  airport: {
    type: String,
    required: true,
  },
  flightNo: {
    type: Number,

  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear()
    },
  },
  tickets: [ticketSchema],
})

//- AAU, I want to view a list of all flights (index view) that displays each flight’s airline, airport, flight no., and departure date/time.
//- AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it. When I submit the form I should be taken back to all the flights.
//- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
     //    - `ALL FLIGHTS`, and
     //  - `ADD FLIGHT`

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}