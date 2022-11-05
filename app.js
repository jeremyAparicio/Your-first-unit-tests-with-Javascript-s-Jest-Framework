
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(euro){
    let dollar = oneEuroIs.USD*euro
    return dollar;
}

function fromDollarToYen(dollar){
    let yen = Math.floor((dollar * oneEuroIs.JPY) / oneEuroIs.USD)
    return yen;
}

function fromYenToPound(yen){
    let pound = Math.floor((yen * oneEuroIs.GBP) / oneEuroIs.JPY)
    return pound
}

module.exports = {fromEuroToDollar,fromDollarToYen, fromYenToPound };