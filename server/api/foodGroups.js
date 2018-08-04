const router = require('express').Router()
const FoodGroup = require('../db/FoodGroups')

//Really just need one route to retrieve the IDs maybe 2? Or maybe just the find all. See what makes most sense


router.get('/', async (req, res, next) => {
  try{
    console.log("FROM THE BACKEND")
    const allFoodGroups = await FoodGroup.findAll()
    res.status(200).send(allFoodGroups)
  } catch(err) {
     next(err)
  }
}) 

router.get('/:foodGroupId', async (req, res, next) => {
  try{
    const foodGroup = await FoodGroup.findById(req.params.foodGroupId)
    res.status(200).send(foodGroup)
  } catch(err) {
     next(err)
  }
})

module.exports = router