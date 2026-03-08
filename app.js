const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const ownerBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");

let ownerOpen = false;

ownerBtn.onclick = () => {
  ownerOpen = !ownerOpen;
  ownerMenu.style.display = ownerOpen ? "block" : "none";
};

sendBtn.onclick = sendMessage;

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.textContent = text;
  msg.style.padding = "8px";
  msg.style.margin = "5px 0";
  msg.style.background = "#1e1e1e";
  msg.style.borderRadius = "8px";

  chatBox.appendChild(msg);

  chatInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("joinRandom").onclick = () => {
  alert("Random chat coming next build 🚀");
};