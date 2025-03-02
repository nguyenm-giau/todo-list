export const setupMenuListeners = () => {
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    const menu = document.querySelector(".menu");
    const openIcon = `<svg class="menu-toggle-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

    menuToggleBtn.innerHTML = openIcon

    menuToggleBtn.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
            menu.classList.add("closing");
            menuToggleBtn.innerHTML = openIcon;
            setTimeout(() => {
                menu.classList.remove("open", "closing");
            }, 300); 
        } else {
            menu.classList.add("open");
            menuToggleBtn.innerHTML = closeIcon;
        }
    });
  
};


const createMenuContent = () => {
    
}