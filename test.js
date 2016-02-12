var Immutable = require("immutable")

const foo = Immutable.Map({ a: "0", b: "foo" })

console.log(Immutable.is(foo, foo))
console.log(foo.equals(foo))

console.log(foo.hashCode());