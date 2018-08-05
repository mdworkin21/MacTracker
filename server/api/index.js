const router = require('express').Router();

//API Routes 
router.use('/dailyLog', require('./dailyLog'))
router.use('/foodGroups', require('./foodGroups'))
router.use('/userProfile', require('./userProfile'))


//Handles 404 Errors
router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404; 
  next(err)
})

module.exports = router;