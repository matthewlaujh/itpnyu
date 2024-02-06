const inputText = document.getElementById("inputText")
const displayText = document.getElementById("displayText")
displayText.contentEditable = "true"
function updateText() {
  displayText.textContent = inputText.value
}
inputText.addEventListener("input", updateText)

window.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX
  const mouseY = event.clientY

  const fontWeight = mapRange(mouseY, 0, window.innerHeight, 200, 700)

  const fontItalic = mapRange(mouseX, 0, window.innerWidth, 0, 12)

  displayText.style.fontVariationSettings = `'wght' ${fontWeight}, 'ital' ${fontItalic}`
  displayText.style.transition = "font-variation-settings 0.3s ease"
})

function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

document.addEventListener("keydown", function (event) {
  if (event.shiftKey) {
    displayText.style.fontFeatureSettings = `"calt" 1, "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss01" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss06" 1, "aalt" 1, "ss07" 1, "case" 1, "dlig" 1, "dnom" 1, "frac" 1, "lnum" 1, "numr" 1, "onum" 1, "ordn" 1, "pnum" 1, "salt" 1, "sinf" 1, "subs" 1, "sups" 1, "tnum" 1, "zero" 1, "locl" 1`
  }
})
document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    displayText.style.fontFeatureSettings = "normal"
  }
})
