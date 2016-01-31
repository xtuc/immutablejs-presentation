var Immutable = require("immutable")

var foo = Immutable.List.of(1, 2, 3);

foo = foo.set(2, "bar")

console.log(foo.inspect());