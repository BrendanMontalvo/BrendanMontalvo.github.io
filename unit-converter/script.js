let inputNumber = null

function inchesToCentimeters() {
  let inches = inputNumber
  let centimeters = 2.54
  let totalCentimeters = inches * centimeters
  console.log(totalCentimeters)
  document.getElementById("el-centimeter1").innerText = totalCentimeters.toFixed(2)
}
function centimetersToInches() {
  let centimeters = inputNumber
  let inches = 0.393701
  let totalInches = centimeters * inches
  console.log(totalInches)
  document.getElementById("el-inch2").innerText = totalInches.toFixed(2)
}
function ouncesToLiters() {
  let ounces = inputNumber
  let liters = 0.0295735
  let totalLiters = ounces * liters
  console.log(totalLiters)
  document.getElementById("el-liter1").innerText = totalLiters.toFixed(2)
}
function litersToOunces() {
  let liters = inputNumber
  let ounces = 33.814
  let totalOunces = liters * ounces
  console.log(totalOunces)
  document.getElementById("el-ounce2").innerText = totalOunces.toFixed(2)
}
function milesToKilometers() {
  let miles = inputNumber
  let kilometers = 1.60934
  let totalKilometers = miles * kilometers
  console.log(totalKilometers)
  document.getElementById("el-kilometer1").innerText = totalKilometers.toFixed(2)
}
function kilometersToMiles() {
  let kilometers = inputNumber
  let miles = 0.621371
  let totalMiles = kilometers * miles
  console.log(totalMiles)
  document.getElementById("el-mile2").innerText = totalMiles.toFixed(2)
}
function convert() {
  inputNumber = document.getElementById("numberConverter").value
  
  document.getElementById("el-inch1").innerText = inputNumber;
  document.getElementById("el-centimeter2").innerText = inputNumber;
  document.getElementById("el-ounce1").innerText = inputNumber;
  document.getElementById("el-liter2").innerText = inputNumber;
  document.getElementById("el-mile1").innerText = inputNumber;
  document.getElementById("el-kilometer2").innerText = inputNumber;
  
  inchesToCentimeters()
  centimetersToInches()
  ouncesToLiters()
  litersToOunces()
  milesToKilometers()
  kilometersToMiles()
  
}