document.addEventListener("DOMContentLoaded", function () {
  // JavaScript code for DOM manipulation practice
  const container = document.getElementById("container");
  const siblings = document.getElementById("siblings");

  function addAnElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "Newly Added Element";
    container.appendChild(newElement);
  };

  // Add Element
  document.getElementById("addButton").addEventListener("click", addAnElement);
  document.getElementById("addButton").addEventListener("mouseenter", () => console.log("Mouse Enter"));
  document.getElementById("addButton").addEventListener("mouseleave", () => console.log("Mouse Leave"));

  // Remove Element
  document
    .getElementById("removeButton")
    .addEventListener("click", function () {
      const elements = container.querySelectorAll("p");
      if (elements.length > 0) {
        container.removeChild(elements[elements.length - 1]);
      }
    });

  // Insert Before
  document
    .getElementById("insertBeforeButton")
    .addEventListener("click", function () {
      const newSibling = document.createElement("div");
      newSibling.textContent = "New Sibling";
      siblings.insertBefore(newSibling, siblings.firstElementChild);
    });

  // Insert After
  document
    .getElementById("insertAfterButton")
    .addEventListener("click", function () {
      const newSibling = document.createElement("div");
      newSibling.textContent = "New Sibling";
      if (siblings.nextElementSibling) {
        siblings.parentElement.insertBefore(
          newSibling,
          siblings.nextElementSibling
        );
      } else {
        siblings.parentElement.appendChild(newSibling);
      }
    });

  // Remove Sibling
  document
    .getElementById("removeSiblingButton")
    .addEventListener("click", function () {
      if (siblings.nextElementSibling) {
        siblings.nextElementSibling.remove();
      }
    });
});
