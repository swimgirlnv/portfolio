// colorChange.js
document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.querySelector(".top-bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            topBar.classList.add("dark-text");
            topBar.classList.remove("light-text");
          } else {
            topBar.classList.add("light-text");
            topBar.classList.remove("dark-text");
          }
        });
      },
      {
        threshold: [0.5], // Adjust as needed
      }
    );
  
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  