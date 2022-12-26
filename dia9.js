const leds = [1, 0, 0, 1, 0, 0]
countTime(leds)

function countTime (leds){
    let all_on
    let seconds = 0
    let no_repeat = false
    let size = leds.length
        do {
            all_on = leds.every((element) => element === 1)
            if (all_on === false){
                if (leds[0] === 1 && leds[size-1] === 0){
                    leds[size-1] = 1
                    no_repeat = true
                } 
                leds.forEach((element, index) => {
                    if (index === size-1 && no_repeat === true){
                        no_repeat = false
                    } else if (element === 1 && leds[index-1] === 0){
                        leds[index-1] = 1
                    }
                });
              seconds = seconds + 7
            }
        } while (!all_on);
    return seconds
}