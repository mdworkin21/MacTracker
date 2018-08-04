const router = require('express').Router()
const FoodGroup = require('../db/FoodGroups')

//Really just need one route to retrieve all food groups for drop down


router.get('/', async (req, res, next) => {
  try{
    const allFoodGroups = await FoodGroup.findAll()
    res.status(200).send(allFoodGroups)
  } catch(err) {
     next(err)
  }
}) 

module.exports = router