//Inconcluso


const giftsCities = [12, 3, 8, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

getMaxGifts(giftsCities, maxGifts, maxCities)

function getMaxGifts(giftsCities, maxGifts, maxCities) {  
  let menores = giftsCities.filter(n => n < maxGifts)
    console.log(menores)
  if (menores.length == 0){
    return 0
  }
    let orden = menores.sort((f,s) => f - s)
    console.log(orden)
  
  for (let i = 1; i < giftsCities.length; i++) {
    for (let k = 0; k < (giftsCities.length-i); k++) {
        if (giftsCities[i]) ;
        
    }
  }

    return 0
}