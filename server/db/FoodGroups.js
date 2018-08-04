const db = require('./database')
const Sequelize = require('sequelize')

//Food Group Model

const FoodGroup = db.define('foodGroup', {
  code: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
})

module.exports = FoodGroup


/* Eventually Want to Make This Into Seed File
~0100~^~Dairy and Egg Products~
~0200~^~Spices and Herbs~
~0300~^~Baby Foods~
~0400~^~Fats and Oils~
~0500~^~Poultry Products~
~0600~^~Soups, Sauces, and Gravies~
~0700~^~Sausages and Luncheon Meats~
~0800~^~Breakfast Cereals~
~0900~^~Fruits and Fruit Juices~
~1000~^~Pork Products~
~1100~^~Vegetables and Vegetable Products~
~1200~^~Nut and Seed Products~
~1300~^~Beef Products~
~1400~^~Beverages~
~1500~^~Finfish and Shellfish Products~
~1600~^~Legumes and Legume Products~
~1700~^~Lamb, Veal, and Game Products~
~1800~^~Baked Products~
~1900~^~Sweets~
~2000~^~Cereal Grains and Pasta~
~2100~^~Fast Foods~
~2200~^~Meals, Entrees, and Side Dishes~
~2500~^~Snacks~
~3500~^~American Indian/Alaska Native Foods~
~3600~^~Restaurant Foods~
*/