export default class Todo {
    constructor(title, desc, dueDate, priority, completed = false) {
        this._title = title;
        this._desc = desc;
        this._dueDate = new Date(dueDate);
        this._priority = priority;
        this._completed = completed
    }

    get title() {
        return this._title
    }

    set title(newTittle) {
        if (!newTittle) throw new Error("Tittle cannot be empty")
        this._title = newTittle
    }

    set completed(newStatus) {
        this._completed = newStatus
    }

    set priority(newPriority) {
        this._priority = newPriority
    }

}