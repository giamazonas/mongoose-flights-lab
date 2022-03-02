import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {type: String},
})


const Meal = mongoose.model('meals/new', mealSchema)

export {
  Meal
}