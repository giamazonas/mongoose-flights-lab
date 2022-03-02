import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({}, function (err, performers){
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
}

export {
  newMeal as new,
}

