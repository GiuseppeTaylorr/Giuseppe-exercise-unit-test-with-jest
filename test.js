
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

let total = sum(14,9);

expect(total).toBe(23);

});

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    

    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("one dollar should be 127.9 yenes",function(){
    const { fromDollarToYen} =require('./app.js')
    expect(fromDollarToYen()).toBe(4.2)
})

test("one yenes should be 0.8 pound",function(){
    const { fromYenToPound} =require('./app.js')
    expect(fromYenToPound()).toBe(4.2)
})