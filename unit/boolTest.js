const unit = require('unit.js');

describe("Boolean testing",function(){
    it("testing boolean isTrue and isNotTrue", function(){
        unit.bool(true).isTrue();
        unit.bool(false).isNotTrue();
    })
    it("testing boolean isFalse and isNotFalse", function(){
        unit.bool(false).isFalse();
        unit.bool(true).isNotFalse();
    })
})
// describe("Boolean testing for null and undefined",function(){
//     it("testing numbers as booleans", function(){
//         unit.bool(0).isFalse();
//         unit.bool(1).isTrue();
//         unit.bool(5).isTrue();
//     })
//     it("testing null as boolean", function(){
//         unit.bool(null).isTrue();;
//     })
//     it("testing undefined as boolean", function(){
//         unit.bool(undefined).isNotTrue();;
//     })
// })
let func = require('../code.js');
describe("Testing boolean return value of func",function(){
    it("testing whether a number is even or not", function(){
        unit.bool(func.is_even(0)).isTrue();
        unit.bool(func.is_even(4)).isTrue();
        unit.bool(func.is_even(9)).isFalse();
        
    })
})