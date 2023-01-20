/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertLength = document.getElementById("convert-length")
const convertVolume = document.getElementById("convert-volume")
const convertMass = document.getElementById("convert-mass")


function unitConvert(num, type) {
    let conversionNum = 0
    if (type == "length") {
        conversionNum = 3.281
    } else if (type == "volume") {
        conversionNum = 0.264
    } else if (type == "mass") {
        conversionNum = 2.204
    }
    let convOne = num * conversionNum
    let convTwo = num / conversionNum

    return [convOne.toFixed(3), convTwo.toFixed(3)]
}

console.log(unitConvert(20, "length"))


document.getElementById("convert-btn").addEventListener("click", function() {
    let num = document.getElementById("convert-input").value
    const lengthNum = unitConvert(num, "length")
    const volumeNum = unitConvert(num, "volume")
    const massNum = unitConvert(num, "mass")
    convertLength.textContent = `${num} meters = ${lengthNum[0]} feet | ${num} feet = ${lengthNum[1]} meters`
    convertVolume.textContent = `${num} liters = ${volumeNum[0]} gallons | ${num} gallons = ${volumeNum[1]} liters`
    convertMass.textContent = `${num} kilos = ${massNum[0]} pounds | ${num} pounds = ${massNum[1]} kilos`
})