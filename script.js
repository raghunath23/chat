function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value;
  if (message.trim() !== "") {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.textContent = "You: " + message;
    chatBox.appendChild(newMessage);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    // Send the message to the other user or server here
  }
}
