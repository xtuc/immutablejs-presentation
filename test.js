var Immutable = require("immutable")

function Foo(str) { this.str = str; }

Foo.prototype.hashCode = function() {
	return Math.random();
}

Foo.prototype.equals = function(obj) {
	return this.str === obj.str;
}

var test = new Foo("test");

console.log(test.equals(new Foo("test")), "-->true");

var bar = Immutable.Set.of(test)

console.log(bar.inspect())
console.log(bar.contains(new Foo("test")));

// var bar = new Foo("bar");

// // console.log(bar.valueOf(), "hashCode", bar.hashCode);

// console.log(bar.valueOf);
// console.log(Immutable.is(bar, new Foo("bar")))