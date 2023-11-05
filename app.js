const sum = (a,b) => {
    return a + b
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const  fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYenes = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYenes;
}
const  fromYenToPound = function(valueInYenes){
    // convertimos el valor a euro
    let valueInEuro = valueInYenes / 127.9;
    //convertimos el aeuro a libra esterlina
    let valorGbp = valueInEuro * 0.8
    // retornamos el valor
    return valorGbp;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}