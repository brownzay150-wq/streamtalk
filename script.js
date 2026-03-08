// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

let room = "global_room";

// listen for messages
db.ref("rooms/" + room).on("child_added", snapshot => {

  const msg = snapshot.val();

  const div = document.createElement("div");
  div.className = "message";

  div.innerText = msg.text;

  messagesDiv.appendChild(div);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;

});

// send message
sendBtn.onclick = () => {

  const text = input.value.trim();
  if(!text) return;

  db.ref("rooms/" + room).push({
    text: text,
    time: Date.now()
  });

  input.value = "";

};
