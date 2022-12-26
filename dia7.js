const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3)

function getGiftsToRefill(a1, a2, a3) {
    let refill = []
    let a = []
    let b = []
    let c = []
    a1.forEach((gift) => {
        a = a1.some (element => element == gift)
        b = a2.some (element => element == gift)
        c = a3.some (element => element == gift)
        if (a == false && b == false && c == true ||
            a == false && b == true && c == false ||
            a == true && b == false && c == false){
            repeat = refill.some (element => element == gift)
            if (repeat == false){
                refill.push(gift)
            }
        }
    });
    a2.forEach((gift) => {
        a = a1.some (element => element == gift)
        b = a2.some (element => element == gift)
        c = a3.some (element => element == gift)
        if (a == false && b == false && c == true ||
            a == false && b == true && c == false ||
            a == true && b == false && c == false){
            repeat = refill.some (element => element == gift)
            if (repeat == false){
                refill.push(gift)
            }
        }
    });
    a3.forEach((gift) => {
        a = a1.some (element => element == gift)
        b = a2.some (element => element == gift)
        c = a3.some (element => element == gift)
        if (a == false && b == false && c == true ||
            a == false && b == true && c == false ||
            a == true && b == false && c == false){
            repeat = refill.some (element => element == gift)
            if (repeat == false){
                refill.push(gift)
            }
        }
    });
    return refill
}