// script.js

// Check if user is logged in


document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  const notes = document.querySelectorAll(".notes");
  let timeout;

  searchInput.addEventListener("input", function() {
    const filter = this.value.toLowerCase();

    // Filter notes
    notes.forEach(note => {
      const text = note.textContent.toLowerCase();
      note.style.display = text.includes(filter) ? "flex" : "none";
    });

    // Clear previous timeout
    clearTimeout(timeout);

    // If input is not empty, reset notes automatically after 3 seconds
    if (filter !== "") {
      timeout = setTimeout(() => {
        searchInput.value = ""; // Clear input
        notes.forEach(note => note.style.display = "flex"); // Show all notes
      }, 10000); // 3000ms = 3 seconds
    }
  });
});


// script.js
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  const notes = document.querySelectorAll(".card-semester");
  let timeout;

  searchInput.addEventListener("input", function() {
    const filter = this.value.toLowerCase();

    // Filter notes
    notes.forEach(note => {
      const text = note.textContent.toLowerCase();
      note.style.display = text.includes(filter) ? "flex" : "none";
    });

    // Clear previous timeout
    clearTimeout(timeout);

    // If input is not empty, reset notes automatically after 3 seconds
    if (filter !== "") {
      timeout = setTimeout(() => {
        searchInput.value = ""; // Clear input
        notes.forEach(note => note.style.display = "flex"); // Show all notes
      }, 10000); // 3000ms = 3 seconds
    }
  });
});


  