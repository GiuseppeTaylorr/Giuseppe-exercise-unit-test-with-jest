
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

let total = sum(14,9);

expect(total).toBe(23);

});
test('adds 1 + 1 to equal 2', () => {

    let total = sum(1,1);
    
    expect(total).toBe(2);
    
    });

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    

    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("one dollar should be 127.9 yenes",function(){
    const { fromDollarToYen} =require('./app.js')
    expect(fromDollarToYen(1)).toBe(127.9)
})

test("one yenes should be 0.006254886630179828 pound",function(){
    const { fromYenToPound} =require('./app.js')
    expect(fromYenToPound(1)).toBe(0.006254886630179828)
})  