   /*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
//whatIsThis('hello', 'world');
// * "this" is a window object
// * because I dont know




// * Problem 2
//window.whatIsThis('hello', 'world');
// * "this" is a window object 
// * because I dont know




// * Problem 3
//inAnObject.test1('face', 'book');
// * "this" is an object called "inAnObject"
// * because the object "inanObject" calls the method 'whatIsThis'.




// * Problem 4
//inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is throwing an error 
// * because there is no test1 within anotherObject. 




// * Problem 5
//inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is an Object called "anotherObject"
// * because the object inAnObject contains anotherObject.




// * Problem 6
//whatIsThis.call();
// * "this" is an object called Window.
// * because I dont know




// * Problem 7
//whatIsThis.call(trickyTricky);
// * "this" is an object called trickyTricky
// * because the function whatIsThis is calling the trickyTricky constructor.




// * Problem 8
//whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is an object called trickyTricky.
// * because the function whatIsThis is calling the trickyTricky constructor.






// * Problem 9
//whatIsThis.call(confusing);
// * "this" is an object called confusing
// * because the function whatIsThis is calling the confusing constructor.




// * Problem 10
//whatIsThis.call(confusing, 'hello');
// * "this" is an object called confusing  
// * because the function whatIsThis is calling the confusing constructor.





// * Problem 11
//whatIsThis.apply(trickyTricky);
// * "this" is an object called trickyTricky
// * because the function whatIsThis is applying the trickyTricky constructor.




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is an object called confusing
// * because the function whatIsThis is applying the confusing constructor




// * Problem 13
//whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is throwing an error
// * because ...




// * Problem 14
//inAFunction('what will', 'happen?');
// * "this" is a window object.  
// * because ...




// * Problem 15
//inAFunction.test3('A', 'B');
// * "this" is throwing an error.
// * because inAFunction.test3 is not a function




// * Problem 16
//var newObject = new inAFunction('what will', 'happen?');
// * "this" is a window object
// * because I dont know.




// * Problem 17
//var newObject = new inAFunction('what will', 'happen?');
//newObject.test3('C', 'D');
// * "this" is an object named Sally.  
// * because a new inAFunction object is crated named Sally.




// * Problem 18
//inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is an object called trickyTricky
// * because the inAnObject object's method test1 is calling the constructor for a trickyTricky object.




// * Problem 19
//inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is an object called confusting.
// * because the inAnObject object is constructing anotherObject object and that is ... I dont know.  

