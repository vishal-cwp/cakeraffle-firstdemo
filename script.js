const form = document.getElementById("raffle-form");
const nameInput = document.getElementById("name-input");
const participantsList = document.getElementById("participants-list");
const drawBtn = document.getElementById("draw-btn");
const winnerDisplay = document.getElementById("winner-display");

let participants = [];

// Add participants
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    participants.push(name);
    const li = document.createElement("li");
    li.textContent = name;
    participantsList.appendChild(li);
    nameInput.value = "";
  }
});

// Draw winner
drawBtn.addEventListener("click", () => {
  if (participants.length === 0) {
    winnerDisplay.textContent = "No participants yet!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[randomIndex];
  winnerDisplay.textContent = `🎉 Winner: ${winner} 🎉`;
});
