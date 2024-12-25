import "./styles.css";
import Project from "./modules/createProject.js"
import Todo from "./modules/createTodo.js"

const projects = [
    new Project("Personal")
]

const todo1 = new Todo("Chasing dogs at 12pm", "very important", "none", "High")
const todo2 = new Todo("Go to the bathroom", "When you gotta go", "none", "Low")

projects[0].addTodo(todo1)
projects[0].addTodo(todo2)

const workProject = new Project("Work")
workProject.addTodo(todo1)
workProject.addTodo(todo2)

todo1.completed = true

console.log(projects)
