const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const ownerBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");
const joinRandom = document.getElementById("joinRandom");

ownerMenu.style.display = "none";

ownerBtn.addEventListener("click", () => {
  if (ownerMenu.style.display === "none") {
    ownerMenu.style.display = "block";
  } else {
    ownerMenu.style.display = "none";
  }
});

sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.textContent = text;

  msg.style.padding = "10px";
  msg.style.marginBottom = "8px";
  msg.style.background = "#1e293b";
  msg.style.borderRadius = "10px";

  chatBox.appendChild(msg);

  chatInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
});

joinRandom.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.textContent = "Connecting to random user...";
  msg.style.opacity = "0.6";
  chatBox.appendChild(msg);
});