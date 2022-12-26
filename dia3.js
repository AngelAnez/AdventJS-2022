const packOfGifts = ["book"]
const reindeers = ["dasher", "dancer"]
distributeGifts(packOfGifts, reindeers)

function distributeGifts(packOfGifts, reindeers) {
    let x = packOfGifts.join("").length
    let y = reindeers.join("").length * 2
    let z = Math.floor(x/y)
    return z
  }