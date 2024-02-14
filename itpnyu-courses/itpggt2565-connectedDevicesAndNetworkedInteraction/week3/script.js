const inputText = document.getElementById("inputText")
const displayText = document.getElementById("displayText")
const displayTextContainer = document.getElementById("displayTextContainer")
displayText.contentEditable = "true"
function updateText() {
  displayText.textContent = inputText.value
}
inputText.addEventListener("input", updateText)

const ws = new WebSocket("ws://localhost:1880/messages")
const wsGyroData = new WebSocket("ws://localhost:1880/gyroData")
const wsAccelData = new WebSocket("ws://localhost:1880/accelData")

ws.addEventListener("open", handleSocketOpen)
wsGyroData.addEventListener("message", handleSocketGyroData)
wsAccelData.addEventListener("message", handleSocketAccelData)

function handleSocketOpen(event) {
  ws.send("Hello Server!")
  displayText.innerHTML = "Hello World!<br>Type Something!"
}

function handleSocketGyroData(event) {
  const gyroDataString = event.data.trim()
  const [Gx, Gy, Gz] = gyroDataString.split(/\s+/).map(parseFloat)
  displayText.style.transform = `translate(${Gx}px, ${Gy}px)`
}

function handleSocketAccelData(event) {
  displayTextContainer.style.backgroundColor = "black"
  displayText.style.color = "white"
  setTimeout(() => {
    displayTextContainer.style.backgroundColor = ""
    displayText.style.color = ""
  }, 1000)
}
