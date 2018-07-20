const router = require('express').Router();

//API Routes (so far these 2 are just there as dummies, though they'll be used later)
/*router.use('/users', require('./users'))
router.use('/nutritionInfo', require('./nutritionInfo'))*/


//Handles 404 Errors
router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404; 
  next(err)
})

module.exports = router;