let unit = require('unit.js');
let func = require('../code.js');


describe("Function testing equality", function() {

    var ref_func = func.perform_add;

    it('function testing with is and isNot', function(){
        unit.function(ref_func).is(func.perform_add);
        unit.function(ref_func).isNot(func.perform_sub);
    });

    it('function testing with isIdenticalTo and isNotIdenticalTo', function(){
        unit.function(ref_func).isIdenticalTo(func.perform_add);
        unit.function(ref_func).isNotIdenticalTo(func.perform_sub);        
    });

    it('function testing with isEqualTo and isNotEqualTo', function(){
        unit.function(ref_func).isEqualTo(func.perform_add);
        unit.function(ref_func).isNotEqualTo(func.perform_sub);        
    });

});

describe("Function testing match", function(){    

    it('function testing with match and notMatch', function(){
    	unit.function(func.perform_add).match(function(it) {
    		return it(3, 4) === 7;
    	});

    	unit.function(func.perform_add).notMatch(function(it) {
    		return it(3, 4) === 5;
    	});
    });   
});

describe("Function testing error", function(){

    it('function testing with isError', function(){
        unit.function(func.throw_error).isError();   
    }); 
});