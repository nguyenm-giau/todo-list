import "./styles.css";
import Project from "./modules/project.js";
import Task from "./modules/task.js";
import projectManager from "./modules/projectManager.js";
import { format } from "date-fns";
import { initializeProjects } from "./modules/localStorage.js";
import { setupMenuListeners } from "./modules/ui/menu.js";

const defaultProjects = [
    new Project("Personal"),
    new Project("Work")
];

const defaultTask = [
    new Task("Clean the house", "A demo task", "2023-10-10", "High"),
    new Task("Fix bug", "A demo task", "2021-09-21", "Low"),
    new Task ("Test1", "Test", "2021-09-22", "High"),
];

initializeProjects(defaultProjects, defaultTask);

projectManager.getAllTasks().forEach(task => console.log(format(task._dueDate, "dd/MM/yyyy")));


let currentTab = "All Task"


function createTask(title, desc, dueDate, priority, projectName = null) {
    const newTask = new Task(title, desc, dueDate, priority);
    if (currentTab === "All Task" && projectName) {
        const project = projectManager.getProjectByName(projectName);
        if (project) {
            project.addTask(newTask);
        } else {
            console.error("Project not found");
        }
    } else {
        const currentProject = projectManager.getProjectByName(currentTab);
        if (currentProject) {
            currentProject.addTask(newTask);
        } else {
            console.error("Current project not found");
        }
    }
    projectManager.saveToLocalStorage();
}


const initializeEventListeners = () => {
    setupMenuListeners();
};

console.log(projectManager.getAllTasks())

initializeEventListeners()
