// Add any interactivity for the website here, such as animations or effects.
console.log("Welcome to my portfolio website!");

// Ensure animations play when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");

  // Add a class to start the animation
  title.style.animationPlayState = "running";
  subtitle.style.animationPlayState = "running";
});
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const title = document.querySelector("#hero-title");
  const subtitle = document.querySelector("#hero-subtitle");

  // Delay to ensure hero title and subtitle animations finish
  setTimeout(() => {
    title.classList.add("hero-title-and-subtitle");
    hero.classList.add("animate"); // Triggers the image animation
  }, 2000); // Adjust time based on your CSS animation durations
});

document.querySelectorAll('.rating-bar').forEach(function(bar) {
  bar.addEventListener('input', function() {
    bar.style.background = `linear-gradient(to right, #ff9800 ${bar.value}%, #ddd ${bar.value}%)`;
  });
});


// Function to open the image preview modal
function previewImage(imageSrc) {
  const modal = document.getElementById('image-preview-modal');
  const previewImg = document.getElementById('preview-img');
  previewImg.src = imageSrc; // Set the source of the image to be previewed
  modal.style.display = 'flex'; // Show the modal
}

// Function to close the image preview modal
document.getElementById('close-preview').addEventListener('click', function() {
  const modal = document.getElementById('image-preview-modal');
  modal.style.display = 'none'; // Hide the modal
});

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});










































































































































































































































































































































































