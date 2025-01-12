import Project from "./project.js";
import Todo from "./todo.js";

class ProjectManager {
    constructor() {
        this.projects = [];
    }


    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        if (index < 0 || index >= this.projects.length) throw new Error("Invalid index");
        this.projects.splice(index, 1);
    }

    getAllTodos() {
        return this.projects.flatMap(project => project.getTodos());
    }

    saveToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    sortAllTodosByDate(oder = "asc") {
        if (oder === "asc") {
           return this.getAllTodos().slice().sort((a, b) => a._dueDate - b._dueDate);
        } else if (oder === "desc") {
            return this.getAllTodos().slice().sort((a, b) => b._dueDate - a._dueDate);
        } else {
            throw new Error("Invalid order");
        }
    }

    loadFromLocalStorage() {
        const projectsData = localStorage.getItem('projects');
        if (projectsData) {
            const projectsArray = JSON.parse(projectsData);
            this.projects = projectsArray.map(projectData => {
                const project = new Project(projectData._name);
                projectData._todos.forEach(todoData => {
                    const todo = new Todo(
                        todoData._title,
                        todoData._desc,
                        todoData._dueDate,
                        todoData._priority,
                        todoData._completed
                    );
                    project.addTodo(todo);
                });
                return project;
            });
            return true
        }
        return false
    }
}

const projectManager = new ProjectManager();
export default projectManager;