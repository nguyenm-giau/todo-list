export default class createProject {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    addTodo(todo) {
        this._todos.push(todo)
    }

    removeTodo(index) {
        if (index < 0 || index >= this._todos.length) throw new Error("Invalid index")
        this._todos.splice(index, 1)
    }

    getTodos() {
        return this._todos
    }

}
