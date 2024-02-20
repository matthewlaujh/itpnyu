const broker = ""
const mqtt_port = 443

const mqtt_user = ""
const mqtt_pass = ""
const clientID = "mqttAssignmentWebsite"
const subTopic = "HomeTemperature"
const will = "ConnectionStatus"

const MQTT = new Paho.MQTT.Client(broker, mqtt_port, clientID)

const willMessage = new Paho.MQTT.Message("offline")
willMessage.destinationName = will
willMessage.qos = 0
willMessage.retained = true

let timeout

MQTT.connect({
  onSuccess: mqttConnected,
  userName: mqtt_user,
  password: mqtt_pass,
  useSSL: true,
  willMessage: willMessage,
})

function mqttConnected() {
  MQTT.subscribe(will)
  MQTT.subscribe(subTopic)

  MQTT.onMessageArrived = handleMQTTMessage
  console.log("MQTT connected successfully.")
  switchToWillMessageAfterDelay()
}

function handleMQTTMessage(msg) {
  const currentTime = new Date()
  const formattedDateTime = currentTime.toLocaleString("en-US", {
    hour12: true,
  })
  if (msg.destinationName === subTopic) {
    clearTimeout(timeout)
    document.querySelector(
      "#displayText"
    ).innerHTML = `Temperature:<br> ${msg.payloadString}`
    document.querySelector(
      "#displayTime"
    ).innerHTML = `Last update: ${formattedDateTime}`
    switchToWillMessageAfterDelay()
  }
}

function switchToWillMessageAfterDelay() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    const currentTime = new Date()
    const formattedDateTime = currentTime.toLocaleString("en-US", {
      hour12: true,
    })
    document.querySelector("#displayText").innerHTML =
      "Connected To Broker,<br> Device is Offline"
    document.querySelector(
      "#displayTime"
    ).innerHTML = `Device went offline at: ${formattedDateTime}`
  }, 2000)
}
