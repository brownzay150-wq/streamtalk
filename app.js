const joinRandom = document.getElementById("joinRandom");
const ownerMenuBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

ownerMenu.style.display = "none";

ownerMenuBtn.addEventListener("click", () => {
  ownerMenu.style.display =
    ownerMenu.style.display === "none" ? "block" : "none";
});

sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.textContent = text;
  msg.style.padding = "10px";
  msg.style.margin = "8px 0";
  msg.style.background = "#222";
  msg.style.color = "#fff";
  msg.style.borderRadius = "10px";

  chatBox.appendChild(msg);
  chatInput.value = "";
});

joinRandom.addEventListener("click", () => {
  alert("Random chat system not connected yet.");
});