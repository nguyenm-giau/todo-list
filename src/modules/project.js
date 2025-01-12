export default class Project {
    constructor(name) {
        this._name = name;
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task)
    }

    removeTask(index) {
        if (index < 0 || index >= this._tasks.length) throw new Error("Invalid index")
        this._tasks.splice(index, 1)
    }

    getTasks() {
        return this._tasks
    }

    sortTasksDateDesc() {
        return [...this._tasks].sort((a, b) => b._dueDate - a._dueDate)
    
    }
    
    sortTasksDateAsc() {
        return [...this._tasks].sort((a, b) => a._dueDate - b._dueDate)
    }
}
