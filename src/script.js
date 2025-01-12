import "./styles.css";
import Project from "./modules/project.js";
import Todo from "./modules/todo.js";
import projectManager from "./modules/projectManager.js";
import { format } from "date-fns";
import { initializeProjects } from "./modules/localStorage.js";

const defaultProjects = [
    new Project("Personal"),
    new Project("Work")
];

const defaultTodos = [
    new Todo("Clean the house", "A demo task", "2023-10-10", "High"),
    new Todo("Fix bug", "A demo task", "2021-09-21", "Low"),
    new Todo ("Test1", "Test", "2021-09-22", "High"),
];

initializeProjects(defaultProjects, defaultTodos);

projectManager.getAllTodos().forEach(todo => console.log(format(todo._dueDate, "dd/MM/yyyy")));
projectManager.saveToLocalStorage()

console.log(projectManager.getAllTodos())

