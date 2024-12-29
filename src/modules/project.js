export default class Project {
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

    sortDateDesc() {
        return [...this._todos].sort((a, b) => b._dueDate - a._dueDate)
    
    }
    
    sortDateAsc() {
        return [...this._todos].sort((a, b) => a._dueDate - b._dueDate)
    }
}
