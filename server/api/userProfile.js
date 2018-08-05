const router = require('express').Router()
const Profile = require('../db/ProfileModel')

//Route not complete
router.post('/', async (req, res, next) => {
  try{
    console.log("FROM BACK", req.body)
    const addedGoals = await Profile.create({
      calGoal: Number(req.body.dailyGoals.calories),
      proteinGoal: Number(req.body.dailyGoals.protein),
      carbGoal: Number(req.body.dailyGoals.carb),
      fatGoal: Number(req.body.dailyGoals.fat)
    })
    res.status(201).send(addedGoals)
  } catch(err) {
     next(err)
  }
})


module.exports = router 