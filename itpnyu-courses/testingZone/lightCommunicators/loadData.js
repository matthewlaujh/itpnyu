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
