import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
})

//- AAU, I want to view a list of all flights (index view) that displays each flight’s airline, airport, flight no., and departure date/time.
//- AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it. When I submit the form I should be taken back to all the flights.
//- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
     //    - `ALL FLIGHTS`, and
     //  - `ADD FLIGHT`