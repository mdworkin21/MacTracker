const router = require('express').Router()
const DailyLog = require('../db/DailyLogModel')

router.post('/', async (req, res, next) => {
  try{
    const foodItem = await DailyLog.create(req.body)
    res.status(201).send(foodItem)
  }catch(err){
    next(err)
  }
})

module.exports = router