const spans = document.querySelectorAll(".container span");
const move = document.getElementById("move");
const select = document.getElementById("select");

let selected = 0;

function updateClasses() {
  spans.forEach((span, index) => {
    span.classList.remove(
      "left-1",
      "left-2",
      "left-3",
      "left-4",
      "right-1",
      "right-2",
      "right-3",
      "right-4"
    );

    if (index < selected) {
      // Assign left classes
      const leftIndex = selected - index; // Calculate left class index
      span.classList.add(`left-${leftIndex}`);
    } else if (index > selected) {
      // Assign right classes
      const rightIndex = index - selected; // Calculate right class index
      span.classList.add(`right-${rightIndex}`);
    }
  });

  spans[selected].classList.add("selected"); // Keep the selected class
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    // Left arrow
    move.currentTime = 0;
    move.play();
    if (selected > 0) {
      spans[selected].classList.remove("selected");
      selected--;
      updateClasses();
    }
  } else if (event.keyCode === 39) {
    // Right arrow
    move.currentTime = 0;
    move.play();
    if (selected < spans.length - 1) {
      spans[selected].classList.remove("selected");
      selected++;
      updateClasses();
    }
  } else if (event.code === "Enter") {
    select.currentTime = 0;
    select.play();
    window.location.href = `${spans[selected].textContent}/index.html`;
  }
});

// Initialize the classes on page load
updateClasses();
