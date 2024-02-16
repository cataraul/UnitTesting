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