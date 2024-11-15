const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  // Add a click event listener to toggle the accordion
  accordion.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded); // Update ARIA attribute

    const content = this.nextElementSibling; // Get the content panel
    content.style.maxHeight = isExpanded ? null : content.scrollHeight + "px"; // Toggle content visibility
  });

  // Add a keydown event listener for keyboard accessibility
  accordion.addEventListener("keydown", function (event) {
    const current = document.activeElement; // Get the currently focused element
    const accordions = Array.from(accordionBtns); // Convert NodeList to Array for navigation

    switch (event.key) {
      case "ArrowDown": { // Move focus to the next accordion
        const nextIndex = (accordions.indexOf(current) + 1) % accordions.length;
        accordions[nextIndex].focus();
        break;
      }
      case "ArrowUp": { // Move focus to the previous accordion
        const prevIndex = (accordions.indexOf(current) - 1 + accordions.length) % accordions.length;
        accordions[prevIndex].focus();
        break;
      }
      case "Home": { // Move focus to the first accordion
        accordions[0].focus();
        break;
      }
      case "End": { // Move focus to the last accordion
        accordions[accordions.length - 1].focus();
        break;
      }
      case "Enter": // Fall through to Space key behavior
      case " ": {
        event.preventDefault(); // Prevent the default scrolling behavior for Space
        current.click(); // Simulate a click event to toggle the accordion
        break;
      }
    }
  });
});
