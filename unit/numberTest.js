let unit = require('unit.js');

describe("Testing numbers ", function() {

    it('testing numbers with is and isNot', function(){
        unit.number(100).is(100);
        unit.number(100).is(10*10);

        unit.number(100).isNot(101);
        unit.number(100).isNot('100');
    });

    it('testing numbers with match', function(){
        unit.number(121).match(121);
        unit.number(121).match(12);
        unit.number(121).match(21);
    });

    it('testing numbers with matchEach', function(){
        unit.number(12334).matchEach(1, 2, 3, 4);
    });

    it('testing numbers with isValid', function(){
        unit.number(12334).isValid(34);
        unit.number(12334).isValid(/12+[3-3-4]/);
    });

});

describe("Testing numbers - difference between isEqualTo and isIdenticalTo", function() {

    it('testing number with isIdenticalTo', function(){
        unit.number(100).isIdenticalTo(100);
    });

    it('testing number with isIdenticalTo with calculation', function(){
        unit.number(100).isIdenticalTo(1000/10);
    });

    it('testing number with isIdenticalTo - will fail since it checks types', function(){
        unit.number(100).isIdenticalTo('100');
    });

    // Comment out the failing code
    // Run

    it('testing number with isEqualTo', function(){
        unit.number(100).isEqualTo(100);
    });

    it('testing number with isEqualTo with calculation', function(){
        unit.number(100).isEqualTo(1000/10);
    });

    it('testing number with isEqualTo - will pass since it does not check types', function(){
        unit.number(100).isEqualTo('100');
    });

});


// step 2: 

describe("Number testing with between, before, after, less than", function() {

    it('testing number with isBetween', function(){
        unit.number(100).isBetween(90, 110);
        unit.number(100).isBetween(100, 110);
        unit.number(100).isBetween(90, 100);
    });

    it('testing number with isNotBetween', function(){
        unit.number(100).isNotBetween(110, 120);
        unit.number(100).isNotBetween(200, 3000);
    });

    it('testing number with isBefore', function(){
        unit.number(100).isBefore(110);
    });

    it('testing number with isAfter', function(){
        unit.number(100).isAfter(99);
    });

    it('testing number with isLessThan', function(){
        unit.number(100).isLessThan(150);
    });

    it('testing number with isLessThan', function(){
        unit.number(100).isGreaterThan(50);
    });
});

// step 3: 

describe("Number testing with other methods", function() {

    it('testing number with isApprox', function(){
        unit.number(88.89).isApprox(90, 1.11);
    });

    it('testing number with isInfinite', function(){
        unit.number(100/0).isInfinite();
    });

    it('testing number with isNotInfinite', function(){
        unit.number(100/10).isNotInfinite();
    });

    it('testing number with isNaN ans isNotNaN', function(){
        unit.number(NaN).isNaN();
        unit.number(0/0).isNaN();

        unit.number(0).isNotNaN();
    });

});

