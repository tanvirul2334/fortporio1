// Greet the user when the page loads
window.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to the Xiaomi Portfolio!");
});

// Track button clicks
document.addEventListener('DOMContentLoaded', () => {
  const hireBtn = document.querySelector('.hire-btn');
  const downloadBtn = document.querySelector('.primary');
  const reelBtn = document.querySelector('.secondary');

  if (hireBtn) {
    hireBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Thank you for considering hiring!");
      console.log("Hire Me button clicked");
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Download CV clicked");
      console.log("Download CV button clicked");
    });
  }

  if (reelBtn) {
    reelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Play Show Reel");
      console.log("Show Reel button clicked");
    });
  }
});
