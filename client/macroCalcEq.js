//Calculates Height
export const feetToCm = (feet) => {
   let inches = feet * 12
   return inches * 2.54
}

export const inchesToCm = (inches) => {
  return inches * 2.54
}

export const totalHeight = (inches, feet) => {
  return feetToCm(feet) + inchesToCm(inches)
} 

//Calculates Weight
export const poundsToKg = (pounds) => {
  const kgs = pounds * 0.453592
  return kgs
}

/*Calculates Resting Energy Expenditure According to Mifflin Formula*/
export const MifflinForMen = (age, height, weight ) => {
  return ((10 * weight) + (6.25 * height)) - (5 * age ) + 5
}

export const MifflinForWomen = (age, height, weight ) => {
  return ((10 * weight) + (6.25 * height)) - (5 * age ) - 161
}

/*Calculates Total Daily Energy Expenditure (TDEE) based on activity level*/
export const TDEECalc = (REE, activityLevel) => {
  if (activityLevel === 'sedentary'){
    return REE * 1.2
  } else if (activityLevel === 'light'){
      return REE * 1.375
  } else if (activityLevel === 'moderate'){
      return REE * 1.55
  } else if (activityLevel === 'very'){
      return REE * 1.725
  } else if (activityLevel === 'extremely'){
    return REE * 1.900
  }
}

/*Calorie Intake TDEE and Goals */
export const dailyCalIntake = (TDEE, goal) => {
  if (goal === 'lose'){
    return TDEE * .77
  } else if (goal === 'maintain'){
    return TDEE 
  } else if (goal === 'gain'){
    return TDEE * 1.12
  }
}

/*Macro Goals based on Cal Intake and Goals? */
export const dailyProtein = (dailyCal) => {
  return dailyCal * .3 / 4
}

export const dailyCarb = (dailyCal) => {
  return dailyCal * .4 / 4
}

export const dailyFat = (dailyCal) => {
  return dailyCal * .3 / 9
}


//This probably needs to be researched better and adjusted, but it's fine for now


