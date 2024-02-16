let unit = require("unit.js");
let func = require("../code.js")

describe("Testing strings - equality/starts with/ends with/length",function(){
    it("value tested is a string",function(){
        unit.string("This should be a string")
    })
    it("should return the value which is a string",function(){
        unit.string(func.return_string());
    })
    it("should return true",function(){
        unit.string(func.return_string()).isNotEmpty();
    })
    it("should test for equality - using is and isNot",function(){
        unit.string(func.return_string()).is("This is indeed a string");
        unit.string(func.return_string()).isNot("This is NOT the string I needed");
    })
    //Different from equality test because String object instantiated are NOT equal to string literals
    it("should test if it is identical - using isIdenticalTo and isNotIdenticalTo",function(){
        unit.string(func.return_string()).isIdenticalTo("This is indeed a string");
        unit.string(func.return_string()).isNotIdenticalTo("This is NOT Identical");
    })
    //These comparissons will not perform strict type checking
    it("test using isEqualTo and isNotEqualTo",function(){
        unit.string(func.return_string()).isEqualTo("This is indeed a string");
        unit.string(func.return_string()).isNotEqualTo("This is NOT Identical");
    })
    it("test using startsWith and endsWith",function(){
        unit.string(func.return_string()).startsWith("T");
        unit.string(func.return_string()).isNotIdenticalTo("g");
    })
    it("test length of string",function(){
        unit.string(func.return_string()).hasLength(23);
    })
})

describe("Testing strings with match", function(){
    //exact match
    it('should match', function () {
        unit.string(func.return_string()).match("This is indeed a string");
        //can be used with regex aswell
        unit.string(func.return_string()).match(/indeed/);
    });

    it('should not match with a regular expression', function () {
        unit.string(func.return_string()).notMatch(/notAWord/);
    });

    it('string value should match custom function', function () {
        unit.string(func.return_string()).match(function(it) {
        	return it === "This is indeed a string";
        });
    }); 

    it('should match each in a list', function () {
        unit.string(func.return_string()).matchEach([/indeed/i, 'string', function(it) {
        	return it === "This is indeed a string";
        }]);
    });

    it('string has value', function(){
        unit.string(func.return_string()).hasValue('indeed');
    });

    it('string has values', function(){
        unit.string(func.return_string()).hasValues('indeed', 'string');
    });

    it('string contains', function(){
        unit.string(func.return_string()).contains('indeed', 'string');
    });             
});


describe("Testing strings with match, case-sensitivity", function(){

    it('string has values, not case-sensitive', function(){
        unit.string(func.return_string()).hasValues('indeed', 'this');
    });

    //Case insensitive
    it('string has values', function(){
        unit.string(func.return_string()).hasValues('indeed', 'this');
    });                

    it('string contains is case-sensitive', function(){
        unit.string(func.return_string()).contains('indeed', 'This');
    });             
});