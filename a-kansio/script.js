const words = ["Full Stack", "Backend", "UX"];

function changeHero() {
  let index = 0;
  setInterval(() => {
    document.getElementById("hero-text").innerText = words[index];
    index = (index + 1) % words.length;
  }, 1500); // Change every 1.5 seconds (3000 milliseconds)
}

// Call the function when the page loads
window.onload = changeHero;
