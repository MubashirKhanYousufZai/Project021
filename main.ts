enum Cake {
    vanilla,
    choclate = 4,
    pineapple,
    chocolava,
    marble
}
let cakeFlavour = Cake.choclate
let cakeIndex = Cake[4]
console.log(cakeIndex);
console.log(cakeFlavour);

enum Car {
    supra,
    gwagon = 5,
    austin_martin,
    revo,
    civic,
    grande,
    city,
    gli
}
let cars = Car.gwagon
let carIndex = Car[5]
console.log(carIndex);
console.log(cars);

enum Calculator {
    addition,
    subtraction,
    multiplication,
    division,
    reminder = 7,
    exponention
}
let operator = Calculator.reminder
let operatorIndex= Calculator[7]
console.log(operatorIndex);
console.log(operator);

