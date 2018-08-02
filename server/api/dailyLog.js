const router = require('express').Router()
const DailyLog = require('../db/DailyLogModel')

/*When there are multiple users you'll need to add a 'where' with user id (and userID should be associated with dailyLog)*/

router.get('/', async (req, res, next) => {
  try{
    const allFood = await DailyLog.findAll()
    res.status(200).send(allFood)
  } catch(err){
     next(err)
  }

})

router.post('/', async (req, res, next) => {
  try{
    const foodItem = await DailyLog.create(req.body)
    res.status(201).send(foodItem)
  }catch(err){
    next(err)
  }
})

router.delete('/:foodId', async(req, res, next) => {
  console.log('hit', req.params.foodId)
  try{
    await DailyLog.destroy({
      where: {
        id: req.params.foodId
      }
    })
    res.status(202)
  } catch(err){
     next(err)
  }
})

module.exports = router