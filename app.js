const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const ownerBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");
const joinRandom = document.getElementById("joinRandom");

if (ownerMenu) {
  ownerMenu.style.display = "none";
}

if (ownerBtn) {
  ownerBtn.addEventListener("click", () => {
    ownerMenu.style.display =
      ownerMenu.style.display === "none" ? "block" : "none";
  });
}

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;

    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.padding = "10px";
    msg.style.marginBottom = "8px";
    msg.style.background = "#1e293b";
    msg.style.borderRadius = "10px";
    msg.style.color = "white";

    chatBox.appendChild(msg);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

if (joinRandom) {
  joinRandom.addEventListener("click", () => {
    const msg = document.createElement("div");
    msg.textContent = "Connecting to random user...";
    msg.style.padding = "10px";
    msg.style.marginBottom = "8px";
    msg.style.background = "#0f172a";
    msg.style.borderRadius = "10px";
    msg.style.color = "white";

    chatBox.appendChild(msg);
  });
}