import Immutable from "immutable"

var oddSquares = Immutable.List.of(1,2,3,4,5,6,7,8)
                                .filter(x => x % 2)
                                .map(x => x * x);

// Only calls filter twice and map once
console.log(oddSquares.get(1)); // 9