let unit = require('unit.js');
let func = require('../code.js');


describe("Object testing 1", function() {

    it('testing objects with is, isIdenticalTo, isEqualTo', function() {

        let triangle = func.return_shape("triangle", "green");
        let referenceCopyTriangle = triangle;
        let anotherTriangle = func.return_shape("triangle", "green");
        let blueTriangle = func.return_shape("triangle", "blue");

        unit.object(triangle);

        unit.object(triangle).is(referenceCopyTriangle);
        unit.object(triangle).is(anotherTriangle);

        // Run

        unit.object(triangle).is(blueTriangle);

        // Run

        unit.object(triangle).isIdenticalTo(referenceCopyTriangle);

        unit.object(triangle).isNotIdenticalTo(anotherTriangle);
        unit.object(triangle).isNotIdenticalTo(blueTriangle);

        // Run

        unit.object(triangle).isEqualTo(referenceCopyTriangle);

        unit.object(triangle).isNotEqualTo(anotherTriangle);
        unit.object(triangle).isNotEqualTo(blueTriangle);

    });
});


describe("Object testing 2", function() {

    it('testing objects with match, notMatch', function() {

        let shape = func.return_shape("triangle", "green");

        let rectangle = func.return_rectangle("blue");
        let circle = func.return_circle("yellow");

        unit.object(shape).match(function(obj) {
          return obj.color == 'green';
        });

        unit.object(rectangle).match(function(obj) {
          return obj.shapeType == 'rectangle';
        });

        unit.object(circle).match(function(obj) {
          return obj.shapeType == 'circle';
        });

        // Run

        unit.object(shape).notMatch(function(obj) {
          return obj.color == 'yellow' && obj.shapeType == "rectangle";
        });

        unit.object(circle).notMatch(function(obj) {
          return obj.shapeType == 'rectangle';
        });

        unit.object(rectangle).notMatch(function(obj) {
          return obj.shapeType == 'circle';
        });

        // Run

        let someObj = {greeting: 'hello', score: 87, id: 123456};

        unit.object(someObj).match(function(obj) {
          return obj.greeting == 'hello';
        });

        unit.object(someObj).match(function(obj) {
          return obj.greeting == 'hello' && obj.score == 87;
        });

        unit.object(someObj).notMatch(function(obj) {
          return obj.greeting == 'hi' && obj.score == 87;
        });

    });
});


describe("Object testing 3", function() {

    it('testing objects with isArguments, isNotArguments', function() {

        let fn = function(a, b, c) {
            unit.object(arguments).isArguments()
                
            unit.object([a, b, c]).isNotArguments();

            unit.object([1, 2, 3]).isNotArguments();
        }

        fn(4, 5, 6);

    });
});


describe("Object testing 4", function() {

    it('testing objects with isEmpty, isNotEmpty, hasLength', function() {

        let emptyObj = {};
        let nonEmptyObj = {greeting: 'hi', score: 34};

        unit.object(emptyObj).isEmpty();

        unit.object(nonEmptyObj).isNotEmpty();

        unit.object(emptyObj).hasLength(0);
        unit.object(nonEmptyObj).hasLength(2);

    });
});


describe("Object testing 5", function() {

    it('testing objects with isInstanceOf, isNotInstanceOf', function() {

        let shape = func.return_shape("triangle", "green");

        let rectangle = func.return_rectangle("blue");
        let circle = func.return_circle("yellow");

        unit.object(shape).isInstanceOf(func.Shape);

        unit.object(rectangle).isInstanceOf(func.Rectangle);
        unit.object(rectangle).isInstanceOf(func.Shape);

        unit.object(circle).isInstanceOf(func.Circle);
        unit.object(circle).isInstanceOf(func.Shape);

        // Run
        unit.object(shape).isNotInstanceOf(func.Rectangle);
        unit.object(shape).isNotInstanceOf(func.Circle);

        unit.object(rectangle).isNotInstanceOf(func.Circle);
        unit.object(circle).isNotInstanceOf(func.Rectangle);

        // Run

    });
});

describe("Object testing 6", function() {

    it('testing objects with hasProperty, hasNotProperty, hasValue, notHasValue', function() {

        let shape = func.return_shape("triangle", "green");

        let rectangle = func.return_rectangle("blue");
        let circle = func.return_circle("yellow");

        unit.object(shape).hasProperty("shapeType");
        unit.object(shape).hasProperty("color");


        unit.object(rectangle).hasProperty("shapeType");
        unit.object(circle).hasProperty("color");

        unit.object(rectangle).hasNotProperty("area");
        unit.object(circle).hasNotProperty("radius");

        // Run

        unit.object(shape).hasValue("triangle");
        unit.object(shape).hasValue("green");

        unit.object(rectangle).hasValue("rectangle");
        unit.object(circle).hasValue("circle");

    });
});
