var Immutable = require("immutable")

var test = Immutable.List.of(1);
var test2 = Immutable.List.of(1);

console.log(test.hashCode(), "===", test2.hashCode(), test.hashCode() === test2.hashCode())
// import { compose } from "transducers.js"

// const double = (x) => x * 2
// const increment = (x) => x + 1

// const foo = Immutable.List.of(1,2,3);
// var a = foo.map(compose(double, increment));

// var a = {};
// var b = {};
// var debug = true;

// a.hash = "test";
// b.hash = "test";

// Object.defineProperty(a, "a", { get: function() { return 0; },
// 	                            set: function(val) { },
//                                 enumerable: debug,
//                                 configurable: true });

// Object.defineProperty(b, "a", { get: function() { return 0; },
// 	                            set: function(val) { },
//                                 enumerable: debug,
//                                 configurable: true });

// console.log(JSON.stringify(a), "===", JSON.stringify(b), "->", a === b)