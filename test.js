var Immutable = require("immutable");

var foo = { a: "a"};

setTimeout(() => {

    console.log(foo.a); // "a" ?

}, 1000);


var badFonction = () =>
    delete foo.a;

badFonction()