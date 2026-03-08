// Load the StreamTalk JSON data
const jsonFile = "streamtalk_full.json.txt";

fetch(jsonFile)
  .then(res => {
    if (!res.ok) throw new Error("Failed to load JSON file.");
    return res.json();
  })
  .then(data => {
    window.appData = data;
    console.log("StreamTalk data loaded:", data);
    if (typeof initApp === "function") initApp(data);
  })
  .catch(err => console.error("Error loading JSON:", err));

// Example init function for chat rendering
function initApp(data) {
  const chatBox = document.getElementById("chatBox");
  data.rooms.forEach(room => {
    room.messages.forEach(msg => {
      const div = document.createElement("div");
      div.className = "message";
      div.textContent = `[${msg.sender}] ${msg.text}`;
      chatBox.appendChild(div);
    });
  });
}