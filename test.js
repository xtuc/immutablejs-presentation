import Immutable from "immutable"
import { compose } from "transducers.js"

const double = (x) => x * 2
const increment = (x) => x + 1

const foo = Immutable.List.of(1,2,3);
var a = foo.map(compose(double, increment));