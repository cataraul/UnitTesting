let unit = require('unit.js');
let func = require('../code.js');

describe("Array testing 1", function() {

    it('testing array with is, isNot, isNotEmpty, hasLength', function() {

        unit.array(func.return_array()).is(['John', 'David', 'James']);
        unit.array(func.return_array()).isNot(['David', 'James', 'John']);

        unit.array(func.return_array()).isNotEmpty();
        unit.array(func.return_array()).hasLength(3);
    });
});

describe("Array testing 2", function() {

    it('testing array with hasValue, hasValues, contains, notContains', function() {


        unit.array(func.return_array()).hasValue('David');
        unit.array(func.return_array()).notHasValue('Alice');

        unit.array(func.return_array()).hasValues(['David', 'James']);
        unit.array(func.return_array()).notHasValues(['Alice', 'Elise']);

        unit.array(func.return_array()).contains(['David']);
        unit.array(func.return_array()).notContains(['David', 'Alice']);
    });
});

describe("Array testing 3", function() {

    it('testing array with isReverseOf, hasProperty', function() {

        unit.array(func.return_array()).isReverseOf(['James', 'David', 'John']);
        unit.array(func.return_array()).isNotReverseOf(['Alice', 'James', 'John']);

        unit.array(func.return_array()).hasProperty(0);
        unit.array(func.return_array()).hasProperty(0, "John");

        unit.array(func.return_array()).hasNotProperty(3);
        unit.array(func.return_array()).hasNotProperty(1, "John");

    });
});


describe("Array testing 4", function() {

    it('testing array with match, matchEach', function() {

        unit.array(['a', 'b', 'c']).match(/[a-z]/);
        unit.array(['a', 'b', 'c']).notMatch(/[d-z]/);

        unit.array(func.return_array()).match(function(actual) {
            return actual[0] == "John" && actual[2] == "James";
        });


        unit.array([10, 11, 12, 13]).matchEach(function(it) {
            return it >= 10;
        });

        unit.array([10, 11, 12, 13]).notMatchEach(function(it) {
            return it >= 14;
        });

    });
});
