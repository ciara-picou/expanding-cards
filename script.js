const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //   when a panel is clicked we will add the className active to the
    //classList of the clicked panel. The CSS for an element with the className
    //"active" increases the size of that panel.
    removeActiveClasses();
    panel.classList.add("active");
  });
});

//This function ensures that all of the panels are retracted before we expand a new panel
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
