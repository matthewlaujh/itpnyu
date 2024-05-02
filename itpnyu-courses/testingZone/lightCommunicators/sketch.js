let fluid
let dataA = []
let dataLoaded = false
let currentDataIndex = 0
let elapsedTime = 0

function setup() {
  createCanvas(600, 600)
  frameRate(22)
  fluid = new Fluid(0.2, 0, 0.0000001)
  //   loadData()
  mockData()
}

function draw() {
  background(0)
  //   if (!dataLoaded || currentDataIndex >= dataA.length) {
  //     return // Skip if data isn't loaded or all entries are processed
  //   }
  fluid.step()
  updateFluidAnimation()
  fluid.renderD()
}

function updateFluidAnimation() {
  if (currentDataIndex >= dataA.length) {
    return
  }

  let data = dataA[currentDataIndex]
  let lerpFactor = elapsedTime / data.duration
  let hue = lerp(data.startingHue, data.endingHue, lerpFactor)

  let cx = int((0.5 * width) / SCALE)
  let cy = int((0.5 * height) / SCALE)
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let angle = noise(frameCount * 0.1) * TWO_PI
      let strength = random(0.05, 0.1)
      let vx = cos(angle) * strength
      let vy = sin(angle) * strength
      let normalizedHue = fluid.normalizeHue(hue)
      fluid.setHue(cx + i, cy + j, hue)
      // FOR DAN - hue being updated correctly here
      // console.log(`Hue at (${cx + i}, ${cy + j}): ${normalizedHue}`)
      fluid.addDensity(cx + i, cy + j, random(50, 150), normalizedHue)
      fluid.addVelocity(cx + i, cy + j, vx, vy)
      // FOR DAN - hue being updated correctly here
      // console.log(`Hue at (${cx + i}, ${cy + j}): ${normalizedHue}`)
    }
  }
  elapsedTime += deltaTime
  if (elapsedTime >= data.duration) {
    elapsedTime = 0
    currentDataIndex++
  }
  if (currentDataIndex >= dataA.length) {
    currentDataIndex = 0
  }
}

function mockData() {
  let mockData = [
    "10160,10160,474",
    "10160,53310,2898",
    "63890,65420,636",
    "65420,34630,2521",
    "46870,46870,165",
    "46870,46870,206",
  ]

  let stringifiedData = '["' + mockData.join('","') + '"]'
  console.log(stringifiedData)
  dataA = parseData(stringifiedData)
  console.log(dataA)
}

function loadData() {
  const urlA = "http://209.97.158.184:1880/message?deviceID=communicatorA"
  const urlB = "http://209.97.158.184:1880/message?deviceID=communicatorB"

  httpGet(
    urlA,
    "text",
    false,
    function (response) {
      dataA = parseData(response)
      console.log(response)
      checkDataLoaded()
      //   console.log(dataA)
    },
    function (error) {
      console.error("Request failed for A:", error)
    }
  )

  httpGet(
    urlB,
    "text",
    false,
    function (response) {
      dataB = parseData(response)
      checkDataLoaded()
      //   console.log(dataB)
    },
    function (error) {
      console.error("Request failed for B:", error)
    }
  )
}

function parseData(rawData) {
  let trimmedData = rawData.slice(1, rawData.length - 1)
  let entries = trimmedData.split('","')
  return entries.map((item) => {
    let cleanItem = item.replace(/"/g, "")
    let parts = cleanItem.split(",")
    return {
      startingHue: parseInt(parts[0]),
      endingHue: parseInt(parts[1]),
      duration: parseInt(parts[2]),
    }
  })
}

function checkDataLoaded() {
  // Set dataLoaded to true only if both dataA and dataB are successfully loaded
  //   if (dataA.length > 0 && dataB.length > 0) {
  //     dataLoaded = true
  //   }
  if (dataA.length > 0) {
    dataLoaded = true
  }
}
