//Digs into Deeply nested data to pull out nutrition info
function digDeep(arr) {
  let bucket = [];
  for (let i = 0; i < arr.length; i++) {
    let nutries = {};
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].name === "Energy") {
        nutries.calories = arr[i][j].value;
      } else if (arr[i][j].name === "Protein") {
        nutries.protein = arr[i][j].value;
      } else if (arr[i][j].name === "Total lipid (fat)") {
        nutries.fat = arr[i][j].value;
      } else if (arr[i][j].name === "Carbohydrate, by difference") {
        nutries.carb = arr[i][j].value;
      }
    }
    bucket.push(nutries);
  }
  return bucket;
}

export default digDeep;
