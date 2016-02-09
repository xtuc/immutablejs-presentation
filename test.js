import Immutable from "immutable"

var todoList = Immutable.List();

console.log(todoList.contains(1))

// class todo extends Immutable.Record({
// 	content: null
// }) {

// 	constructor(content = "") {
// 		return super({ content: content });
// 	}
// }

// const todo1 = new todo("1");
// const todo2 = new todo("2");

// todoList = todoList.push(todo1);
// todoList = todoList.push(todo2);

// console.log(todoList.inspect());

// todoList = todoList.filter(todo => todo !== todo1)

// console.log(todoList.inspect());