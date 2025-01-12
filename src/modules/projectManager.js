import Project from "./project.js";
import Task from "./task.js";

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

    getAllTasks() {
        return this.projects.flatMap(project => project.getTasks());
    }

    saveToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }

    sortAllTasksByDate(oder = "asc") {
        if (oder === "asc") {
           return this.getAllTasks().slice().sort((a, b) => a._dueDate - b._dueDate);
        } else if (oder === "desc") {
            return this.getAllTasks().slice().sort((a, b) => b._dueDate - a._dueDate);
        } else {
            throw new Error("Invalid order");
        }
    }

    getProjectByName(name) {
        return this.projects.find(project => project._name === name);
    }

    loadFromLocalStorage() {
        const projectsData = localStorage.getItem('projects');
        if (projectsData) {
            const projectsArray = JSON.parse(projectsData);
            this.projects = projectsArray.map(projectData => {
                const project = new Project(projectData._name);
                projectData._tasks.forEach(taskData => {
                    const task = new Task(
                        taskData._title,
                        taskData._desc,
                        taskData._dueDate,
                        taskData._priority,
                        taskData._completed
                    );
                    project.addTask(task);
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