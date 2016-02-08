import Immutable from "immutable"

var faker = require('faker');
var sleep = require('sleep');

const times = [];
const iteration = 10000000;

function benchPlain(object) {

	for (var i = 0; i < iteration; i++) {
		const time = Date.now();

		/**
		 * Operation
		 */
		object === (object[1] = 0)

		times.push(Date.now() - time);
	}
}

function benchImmutable(object) {

	for (var i = 0; i < iteration; i++) {
		const time = Date.now();

		/**
		 * Operation
		 */
		object.equals(object.set(1, 0))

		times.push(Date.now() - time);
	}
}

for (var i = 0; i < 100; i++) {
	var object = {};

	for (var i = 0; i < 1000; i++) {
		object[i] = faker.hacker.noun(); 
	}

	benchPlain(object)
	// benchImmutable(Immutable.fromJS(object))
}

const total = times.reduce((acc, e) => acc + e);

console.log("bench %s s (%s iterations)", total / times.length * 1000, times.length / (1000 * 1000) + "M")