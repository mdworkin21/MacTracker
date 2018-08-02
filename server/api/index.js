const router = require('express').Router();

//API Routes 
// router.use('/search', require('./search'))
router.use('/dailyLog', require('./dailyLog'))

//Handles 404 Errors
router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404; 
  next(err)
})

module.exports = router;