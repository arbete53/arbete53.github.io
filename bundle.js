// Generate a random duration for the rotation animation
const randomDuration = Math.random() * 2 + 8; // Random duration between 2s and 10s
document.querySelector(".dice1").style.animationDuration = `${randomDuration}s, 7s`;
document.querySelector(".dice3").style.animationDuration = `${randomDuration-1.5}s, 7s`;

setTimeout(() => {
  document.querySelector('.dice2').style.opacity = 1;
}, 1500);

setTimeout(() => {2
  document.querySelector('.dice3').style.opacity = 1;
}, 3000);