const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const ownerMenuBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");
const joinRandom = document.getElementById("joinRandom");

if (ownerMenu) {
  ownerMenu.style.display = "none";
}

if (ownerMenuBtn) {
  ownerMenuBtn.addEventListener("click", () => {
    if (ownerMenu.style.display === "none") {
      ownerMenu.style.display = "block";
    } else {
      ownerMenu.style.display = "none";
    }
  });
}

if (sendBtn && chatInput && chatBox) {
  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;

    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.background = "#1e293b";
    msg.style.color = "white";
    msg.style.padding = "10px 14px";
    msg.style.borderRadius = "12px";
    msg.style.marginBottom = "10px";
    msg.style.maxWidth = "80%";
    msg.style.wordBreak = "break-word";

    chatBox.appendChild(msg);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

if (joinRandom && chatBox) {
  joinRandom.addEventListener("click", () => {
    const status = document.createElement("div");
    status.textContent = "Connecting to random user...";
    status.style.background = "#0f172a";
    status.style.color = "#94a3b8";
    status.style.padding = "10px 14px";
    status.style.borderRadius = "12px";
    status.style.marginBottom = "10px";

    chatBox.appendChild(status);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}