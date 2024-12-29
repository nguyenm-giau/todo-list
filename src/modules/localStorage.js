import projectManager from "./projectManager";

export function storageAvailable(type) {
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
      if (projectManager.loadFromLocalStorage()) {
          console.log("Projects loaded from local storage");
      } else {
          console.log("No projects found in local storage, adding default projects");
          defaultProjects.forEach(project => projectManager.addProject(project));
          defaultProjects.forEach(project => {
              defaultTodos.forEach(todo => project.addTodo(todo));
          });
          projectManager.saveToLocalStorage();
      }
  } else {
      console.error("Local storage is not available");
  }
}