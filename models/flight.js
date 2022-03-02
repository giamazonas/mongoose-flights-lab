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
    default: Date.now() + 365*24*60*60000 
    },
  tickets: {
    type: [ticketSchema],
  },
  meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
})



const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}