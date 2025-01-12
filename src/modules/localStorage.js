import projectManager from "./projectManager";

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}


export function initializeProjects(defaultProjects, defaultTodos) {
  if (storageAvailable("localStorage")) {
    if (!projectManager.loadFromLocalStorage()) {
      console.log("No projects found in local storage, adding default projects");
      addDefaultProjects(defaultProjects, defaultTodos);
      projectManager.saveToLocalStorage();
    } else {
      console.log("Projects loaded from local storage");
    }
  } else {
    console.error("Local storage is not available");
  }
}

function addDefaultProjects(defaultProjects, defaultTodos) {
  defaultProjects.forEach(project => projectManager.addProject(project));
  defaultProjects[0].addTodo(defaultTodos[0]);
  defaultProjects[1].addTodo(defaultTodos[1]);
  defaultProjects[1].addTodo(defaultTodos[2]);
}