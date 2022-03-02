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
    min: 10,
    max: 9999,

  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear()
    },
  },
  tickets: {
    type: [ticketSchema],
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}