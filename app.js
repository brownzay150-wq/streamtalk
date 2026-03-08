const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const ownerMenuBtn = document.getElementById("ownerMenuBtn");
const ownerMenu = document.getElementById("ownerMenu");
const joinRandom = document.getElementById("joinRandom");
const skipBtn = document.getElementById("skipBtn");
const disconnectBtn = document.getElementById("disconnectBtn");
const statusText = document.getElementById("statusText");

let connected = false;

function addMessage(text, type = "system") {
  if (!chatBox) return;

  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function setStatus(text) {
  if (statusText) {
    statusText.textContent = `Status: ${text}`;
  }
}

if (ownerMenu) {
  ownerMenu.style.display = "none";
}

if (ownerMenuBtn && ownerMenu) {
  ownerMenuBtn.addEventListener("click", () => {
    ownerMenu.style.display =
      ownerMenu.style.display === "none" ? "block" : "none";
  });
}

if (joinRandom) {
  joinRandom.addEventListener("click", () => {
    connected = true;
    setStatus("Looking for stranger...");
    addMessage("Looking for a random user...", "system");

    setTimeout(() => {
      if (!connected) return;
      setStatus("Connected");
      addMessage("You are now connected to a stranger.", "system");
    }, 1000);
  });
}

if (sendBtn && chatInput) {
  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;

    if (!connected) {
      addMessage("You are not connected. Press Join Random Chat first.", "system");
      return;
    }

    addMessage(text, "me");
    chatInput.value = "";

    setTimeout(() => {
      if (connected) {
        addMessage("This is a demo auto-reply.", "other");
      }
    }, 700);
  });
}

if (chatInput) {
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (sendBtn) sendBtn.click();
    }
  });
}

if (skipBtn) {
  skipBtn.addEventListener("click", () => {
    if (!connected) {
      addMessage("You are not connected yet.", "system");
      return;
    }

    addMessage("You skipped the current stranger.", "system");
    setStatus("Looking for stranger...");

    setTimeout(() => {
      if (!connected) return;
      setStatus("Connected");
      addMessage("Connected to a new stranger.", "system");
    }, 900);
  });
}

if (disconnectBtn) {
  disconnectBtn.addEventListener("click", () => {
    connected = false;
    setStatus("Disconnected");
    addMessage("You disconnected from the chat.", "system");
  });
}

if (chatBox) {
  addMessage("Welcome to StreamTalk.", "system");
  addMessage("Press Join Random Chat to begin.", "system");
}